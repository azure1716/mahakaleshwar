import fs from 'fs';

let totalAssertions = 0;
let passedAssertions = 0;
let failedAssertions = [];

function check(condition, message) {
  totalAssertions++;
  if (condition) {
    passedAssertions++;
  } else {
    failedAssertions.push(message);
    console.error(`[FAIL] ${message}`);
  }
}

console.log('====================================================');
console.log('COMPREHENSIVE AUTOMATED VERIFICATION: ALL 50 POSTS');
console.log('====================================================\n');

// 1. Read src/data/blogPosts.js
const blogPostsRaw = fs.readFileSync('src/data/blogPosts.js', 'utf8');

// Match all posts
const postBoundaries = [];
let re = /\{\s*\n\s*id:\s*(\d+),/g;
let m;
while ((m = re.exec(blogPostsRaw)) !== null) {
  postBoundaries.push({ id: parseInt(m[1]), start: m.index });
}

check(postBoundaries.length === 50, `Expected 50 posts in blogPosts.js, found ${postBoundaries.length}`);

const posts = postBoundaries.map((b, i) => {
  const end = i + 1 < postBoundaries.length ? postBoundaries[i + 1].start : blogPostsRaw.lastIndexOf('];');
  return { id: b.id, raw: blogPostsRaw.substring(b.start, end) };
});

// Check post IDs sequence
posts.forEach((p, i) => {
  check(p.id === i + 1, `Post index ${i} ID is ${p.id}, expected ${i + 1}`);
});

// Check slugs
const allSlugs = [];
posts.forEach(p => {
  const sm = p.raw.match(/slug:\s*["']([^"']+)["']/);
  check(!!sm, `Post ${p.id} missing slug`);
  if (sm) {
    allSlugs.push(sm[1]);
    check(/^[a-z0-9-]+$/.test(sm[1]), `Post ${p.id} slug "${sm[1]}" not kebab-case`);
    check(sm[1].length < 70, `Post ${p.id} slug "${sm[1]}" length ${sm[1].length} >= 70`);
  }
});
const uniqueSlugs = new Set(allSlugs);
check(uniqueSlugs.size === 50, `Expected 50 unique slugs, got ${uniqueSlugs.size}`);

// Check SEO titles and SEO descriptions for posts 21-50
posts.filter(p => p.id >= 21).forEach(p => {
  const tm = p.raw.match(/seoTitle:\s*["']([^"']+)["']/);
  check(!!tm, `Post ${p.id} missing seoTitle`);
  if (tm) {
    check(tm[1].length <= 60, `Post ${p.id} seoTitle length ${tm[1].length} > 60: "${tm[1]}"`);
  }

  const dm = p.raw.match(/seoDescription:\s*["']([^"']+)["']/);
  check(!!dm, `Post ${p.id} missing seoDescription`);
  if (dm) {
    check(dm[1].length >= 140 && dm[1].length <= 155,
      `Post ${p.id} seoDescription length ${dm[1].length} not between 140-155: "${dm[1]}"`);
    check(dm[1].includes('Ujjain'), `Post ${p.id} seoDescription must include "Ujjain"`);
    check(dm[1].toLowerCase().includes('mahakal'), `Post ${p.id} seoDescription must include "Mahakal"`);
    check(dm[1].toLowerCase().includes('200m') || dm[1].toLowerCase().includes('near mahakal'),
      `Post ${p.id} seoDescription must include proximity phrase`);
  }

  // Check author
  const am = p.raw.match(/author:\s*["']([^"']+)["']/);
  check(am && am[1] === 'Shri Mahakaleshwar Bhakta Niwas', `Post ${p.id} author must be "Shri Mahakaleshwar Bhakta Niwas"`);

  // Check datePublished
  const dpm = p.raw.match(/datePublished:\s*["']([^"']+)["']/);
  check(dpm && dpm[1] === '2026-10-21', `Post ${p.id} datePublished must be "2026-10-21"`);

  // Check highlights
  check(p.raw.includes('Direct Reception Phone: ${PHONE_NUMBER_DISPLAY}'), `Post ${p.id} highlights must include phone`);
});

// Check CTA in ALL 50 posts
posts.forEach(p => {
  const hasCta = p.raw.includes('link: "/booking"') || p.raw.includes("link: '/booking'");
  check(hasCta, `Post ${p.id} must have CTA section with link: "/booking"`);
});

// Check keywords across all posts: zero duplicates across all 50 posts!
const kwMatches = [...blogPostsRaw.matchAll(/["']?keywords["']?\s*:\s*["']([^"']+)["']/g)];
const seenKws = new Map();
let duplicateKwCount = 0;

kwMatches.forEach((m, idx) => {
  const list = m[1].split(',').map(s => s.trim().toLowerCase()).filter(Boolean);
  list.forEach(kw => {
    if (seenKws.has(kw)) {
      duplicateKwCount++;
      failedAssertions.push(`Duplicate keyword across posts: "${kw}"`);
    } else {
      seenKws.set(kw, idx);
    }
  });
});

check(duplicateKwCount === 0, `Expected 0 duplicate keywords, found ${duplicateKwCount}`);
console.log(`Verified ${seenKws.size} unique keywords across the repository with zero duplicates.`);

// Check Punctuation Compliance in posts 21-50 (no em dash / en dash)
posts.filter(p => p.id >= 21).forEach(p => {
  check(!p.raw.includes('—'), `Post ${p.id} contains em dash (—)`);
  check(!p.raw.includes('–'), `Post ${p.id} contains en dash (–)`);
});

// Check External links in posts 21-50
posts.filter(p => p.id >= 21).forEach(p => {
  const links = [...p.raw.matchAll(/\[([^\]]+)\]\(([^)]+)\)/g)];
  links.forEach(l => {
    check(!l[2].startsWith('http://') && !l[2].startsWith('https://'),
      `Post ${p.id} has external link: ${l[2]}`);
    if (l[2].startsWith('/blog/')) {
      const targetSlug = l[2].replace('/blog/', '');
      check(uniqueSlugs.has(targetSlug), `Post ${p.id} links to invalid blog slug: ${targetSlug}`);
    }
  });
});

// Check Section 10 Inbound links in existing posts
const inboundChecks = [
  // Posts 21-35 retrofits
  { pid: 2, slug: 'kal-bhairav-temple-ujjain-liquor-prasad-timing-guide', text: '**[Kal Bhairav Temple](/blog/kal-bhairav-temple-ujjain-liquor-prasad-timing-guide)**' },
  { pid: 2, slug: 'sandipani-ashram-ujjain-krishna-sudama-history-guide', text: '**[Sandipani Ashram](/blog/sandipani-ashram-ujjain-krishna-sudama-history-guide)**' },
  { pid: 4, slug: 'wheelchair-accessible-senior-citizen-mahakal-darshan-guide', text: '**[wheelchair facility](/blog/wheelchair-accessible-senior-citizen-mahakal-darshan-guide)**' },
  { pid: 5, slug: 'chintaman-ganesh-mandir-ujjain-timing-history-guide', text: '**[Chintaman Ganesh](/blog/chintaman-ganesh-mandir-ujjain-timing-history-guide)**' },
  { pid: 5, slug: 'gadkalika-mata-mandir-ujjain-kalidas-history-guide', text: '**[Gadkalika](/blog/gadkalika-mata-mandir-ujjain-kalidas-history-guide)**' },
  { pid: 10, slug: 'ujjain-heritage-walk-chaubis-khamba-kalidas-akademi-guide', text: '**[Ujjain heritage sightseeing](/blog/ujjain-heritage-walk-chaubis-khamba-kalidas-akademi-guide)**' },
  { pid: 11, slug: 'dharamshala-vs-hotel-near-mahakaleshwar-temple-ujjain', text: '**[dharamshala 200 metres from the temple](/blog/dharamshala-vs-hotel-near-mahakaleshwar-temple-ujjain)**' },
  { pid: 15, slug: 'ujjain-to-indore-one-day-trip-darshan-shopping-guide', text: '**[Indore](/blog/ujjain-to-indore-one-day-trip-darshan-shopping-guide)**' },

  // Posts 36-50 retrofits
  { pid: 1, slug: 'mahakal-lok-corridor-statues-timing-photography-guide', text: '**[Mahakal Lok Corridor](/blog/mahakal-lok-corridor-statues-timing-photography-guide)**' },
  { pid: 1, slug: 'mahakal-temple-darshan-dress-code-prohibited-items-guide', text: '**[dress code guidelines](/blog/mahakal-temple-darshan-dress-code-prohibited-items-guide)**' },
  { pid: 4, slug: 'mahakal-temple-photography-mobile-phone-rules-guide', text: '**[not allowed inside](/blog/mahakal-temple-photography-mobile-phone-rules-guide)**' },
  { pid: 5, slug: 'ujjain-auto-rickshaw-tour-package-cost-full-day-guide', text: '**[auto fare](/blog/ujjain-auto-rickshaw-tour-package-cost-full-day-guide)**' },
  { pid: 5, slug: 'bade-ganesh-ji-temple-ujjain-history-timing-guide', text: '**[Bade Ganesh ji ka mandir](/blog/bade-ganesh-ji-temple-ujjain-history-timing-guide)**' },
  { pid: 8, slug: 'mahakal-prasad-online-order-home-delivery-guide', text: '**[prasad counters](/blog/mahakal-prasad-online-order-home-delivery-guide)**' },
  { pid: 10, slug: 'hidden-offbeat-places-in-ujjain-pilgrim-guide', text: '**[main temple circuit](/blog/hidden-offbeat-places-in-ujjain-pilgrim-guide)**' },
  { pid: 12, slug: '12-jyotirlinga-yatra-planning-from-ujjain-mahakal-guide', text: '**[12 Jyotirlingas](/blog/12-jyotirlinga-yatra-planning-from-ujjain-mahakal-guide)**' },
  { pid: 14, slug: 'rudra-sagar-lake-ujjain-boating-history-guide', text: '**[Rudrasagar](/blog/rudra-sagar-lake-ujjain-boating-history-guide)**' },
  { pid: 16, slug: 'panchkroshi-yatra-ujjain-route-stops-parikrama-guide', text: '**[Simhastha pilgrimage](/blog/panchkroshi-yatra-ujjain-route-stops-parikrama-guide)**' },
  { pid: 19, slug: 'ujjain-jyotish-kundli-astrology-consultation-guide', text: '**[Vedic astrologers](/blog/ujjain-jyotish-kundli-astrology-consultation-guide)**' },
  { pid: 19, slug: 'navagraha-shani-temple-ujjain-graha-shanti-guide', text: '**[planetary remedial rituals](/blog/navagraha-shani-temple-ujjain-graha-shanti-guide)**' },
  { pid: 35, slug: 'shravan-somwar-mahakaleshwar-crowd-jalabhishek-guide', text: '**[Shravan](/blog/shravan-somwar-mahakaleshwar-crowd-jalabhishek-guide)**' }
];

inboundChecks.forEach(ic => {
  const post = posts.find(p => p.id === ic.pid);
  check(post && post.raw.includes(ic.text), `Inbound link in Post ${ic.pid} for slug ${ic.slug} not found`);
});

// 2. Check public/sitemap.xml
const sitemapRaw = fs.readFileSync('public/sitemap.xml', 'utf8');
const sitemapLocs = [...sitemapRaw.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1]);
check(sitemapLocs.length === 95, `Expected 95 URLs in sitemap.xml (60 pages/posts + 5 categories + 30 tags), found ${sitemapLocs.length}`);
const uniqueSitemapLocs = new Set(sitemapLocs);
check(uniqueSitemapLocs.size === 95, `Expected 95 unique URLs in sitemap.xml, found ${uniqueSitemapLocs.size}`);
check(sitemapRaw.includes('<loc>https://www.mahakalbhaktanivasujjain.com/blog</loc>\n    <lastmod>2026-10-21</lastmod>'),
  `Expected /blog lastmod to be 2026-10-21 in sitemap.xml`);

allSlugs.forEach(slug => {
  const expectedUrl = `https://www.mahakalbhaktanivasujjain.com/blog/${slug}`;
  check(uniqueSitemapLocs.has(expectedUrl), `Sitemap missing blog URL: ${expectedUrl}`);
});

// 3. Check scripts/prerender.js
const prerenderRaw = fs.readFileSync('scripts/prerender.js', 'utf8');
const prerenderPaths = [...prerenderRaw.matchAll(/path:\s*['"]([^'"]+)['"]/g)].map(m => m[1]);
check(prerenderPaths.length === 60, `Expected 60 routes in prerender.js, found ${prerenderPaths.length}`);
const uniquePrerenderPaths = new Set(prerenderPaths);
check(uniquePrerenderPaths.size === 60, `Expected 60 unique routes in prerender.js, found ${uniquePrerenderPaths.size}`);

allSlugs.forEach(slug => {
  const expectedPath = `/blog/${slug}`;
  check(uniquePrerenderPaths.has(expectedPath), `prerender.js missing route: ${expectedPath}`);
});

// 4. Check OG webp files in public/
const publicFiles = new Set(fs.readdirSync('public'));
posts.filter(p => p.id >= 21).forEach(p => {
  const ogm = p.raw.match(/["']?image["']?\s*:\s*["']https:\/\/www\.mahakalbhaktanivasujjain\.com\/([^"']+)["']/);
  check(!!ogm, `Post ${p.id} missing schema image`);
  if (ogm) {
    const filename = ogm[1];
    check(publicFiles.has(filename), `OG image file missing in public/: ${filename}`);
  }
});

console.log('\n====================================================');
console.log(`TOTAL TESTS: ${totalAssertions}`);
console.log(`PASSED: ${passedAssertions}`);
console.log(`FAILED: ${failedAssertions.length}`);
if (failedAssertions.length === 0) {
  console.log('STATUS: ALL CHECKS PASSED PERFECTLY!');
} else {
  console.log('FAILURES:\n' + failedAssertions.join('\n'));
}
console.log('====================================================\n');
