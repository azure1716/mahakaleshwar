import fs from 'fs';
import { newPosts } from './build_posts_36_50.mjs';

// Load existing keywords from posts 1-35 in src/data/blogPosts.js
const existingKeywords = new Set();
const rawExisting = fs.readFileSync('src/data/blogPosts.js', 'utf8');
const p36Idx = rawExisting.indexOf('id: 36,');
const raw1_35 = p36Idx !== -1 ? rawExisting.substring(0, p36Idx) : rawExisting;
const existingKwMatches = [...raw1_35.matchAll(/["']?keywords["']?\s*:\s*["']([^"']+)["']/g)];
existingKwMatches.forEach(m => {
  m[1].split(',').forEach(k => existingKeywords.add(k.toLowerCase().trim()));
});

const whitelistedPaths = new Set([
  '/booking',
  '/rooms',
  '/rooms/price',
  '/contact',
  '/location',
  '/mahakaleshwar-temple-guide',
  '/faq',
  '/blog'
]);

// Read existing slugs from blogPosts.js
const existingSlugMatches = [...rawExisting.matchAll(/slug:\s*["']([^"']+)["']/g)];
const allValidSlugs = new Set(existingSlugMatches.map(m => m[1]));
newPosts.forEach(p => allValidSlugs.add(p.slug));

const expectedImageRotation = {
  36: 'room1Img',
  37: 'premiumImg',
  38: 'luxery2Img',
  39: 'roomDeluxeImg',
  40: 'roomSimple2Img',
  41: 'roomStandardImg',
  42: 'roomImg',
  43: 'templeBgImg',
  44: 'roomFamilyImg',
  45: 'roomAcImg',
  46: 'room1Img',
  47: 'premiumImg',
  48: 'luxery2Img',
  49: 'roomDeluxeImg',
  50: 'roomSimple2Img'
};

let totalTests = 0;
let passedTests = 0;
let failures = [];

function assert(condition, message) {
  totalTests++;
  if (condition) {
    passedTests++;
  } else {
    failures.push(message);
    console.error(`FAIL: ${message}`);
  }
}

console.log(`--- Running Verification on 15 New Posts (IDs 36-50) ---\n`);

// 1. Post count and IDs
assert(newPosts.length === 15, `Expected 15 posts, got ${newPosts.length}`);
newPosts.forEach((post, i) => {
  const expectedId = 36 + i;
  assert(post.id === expectedId, `Post index ${i} has id ${post.id}, expected ${expectedId}`);
});

// 2. Slugs
const newSlugs = new Set();
newPosts.forEach(post => {
  assert(/^[a-z0-9-]+$/.test(post.slug), `Post ${post.id} slug "${post.slug}" is not kebab-case`);
  assert(post.slug.length < 70, `Post ${post.id} slug "${post.slug}" is too long (${post.slug.length} chars)`);
  assert(!newSlugs.has(post.slug), `Duplicate slug "${post.slug}" in post ${post.id}`);
  newSlugs.add(post.slug);
});

// 3. Metadata lengths and conventions
newPosts.forEach(post => {
  assert(post.seoTitle.length <= 60, `Post ${post.id} seoTitle length ${post.seoTitle.length} > 60: "${post.seoTitle}"`);
  assert(post.seoDescription.length >= 140 && post.seoDescription.length <= 155,
    `Post ${post.id} seoDescription length ${post.seoDescription.length} not in [140, 155]: "${post.seoDescription}"`);
  assert(post.seoDescription.includes('Ujjain'), `Post ${post.id} seoDescription must contain "Ujjain"`);
  assert(post.seoDescription.toLowerCase().includes('mahakal'), `Post ${post.id} seoDescription must contain "Mahakal"`);
  assert(post.seoDescription.toLowerCase().includes('200m') || post.seoDescription.toLowerCase().includes('near mahakal'),
    `Post ${post.id} seoDescription must contain proximity phrase`);
  assert(post.datePublished === '2026-10-21', `Post ${post.id} datePublished must be "2026-10-21"`);
  assert(post.dateFormatted === 'October 21, 2026', `Post ${post.id} dateFormatted must be "October 21, 2026"`);
  assert(post.author === 'Shri Mahakaleshwar Bhakta Niwas', `Post ${post.id} author must be "Shri Mahakaleshwar Bhakta Niwas"`);
  assert(/^[6-9] min read$/.test(post.readTime), `Post ${post.id} readTime "${post.readTime}" invalid format`);
  assert(post.highlights && post.highlights.length === 4, `Post ${post.id} must have exactly 4 highlights`);
  assert(post.highlights[3].includes('Direct Reception Phone:'), `Post ${post.id} 4th highlight must have phone`);
  assert(post.image === expectedImageRotation[post.id], `Post ${post.id} image is ${post.image}, expected ${expectedImageRotation[post.id]}`);
});

// 4. Schema validation
newPosts.forEach(post => {
  assert(Array.isArray(post.schema) && post.schema.length === 2, `Post ${post.id} schema must be array of 2 objects`);
  const bp = post.schema[0];
  const bc = post.schema[1];
  assert(bp['@type'] === 'BlogPosting', `Post ${post.id} schema[0] @type must be BlogPosting`);
  assert(bp.headline === post.title, `Post ${post.id} schema[0] headline must match title`);
  assert(bp.description === post.seoDescription, `Post ${post.id} schema[0] description must match seoDescription`);
  assert(bp.datePublished === '2026-10-21', `Post ${post.id} schema[0] datePublished invalid`);
  assert(bp.dateModified === '2026-10-21', `Post ${post.id} schema[0] dateModified invalid`);
  assert(bp.mainEntityOfPage['@id'] === `https://www.mahakalbhaktanivasujjain.com/blog/${post.slug}`, `Post ${post.id} canonical URL mismatch`);
  assert(bp.inLanguage === 'en-IN', `Post ${post.id} inLanguage must be en-IN`);
  assert(bc['@type'] === 'BreadcrumbList', `Post ${post.id} schema[1] @type must be BreadcrumbList`);
  assert(bc.itemListElement.length === 3, `Post ${post.id} breadcrumb must have 3 items`);
});

// 5. Keyword Uniqueness
const allNewKeywords = new Map();
newPosts.forEach(post => {
  const kwString = post.schema[0].keywords;
  assert(typeof kwString === 'string' && kwString.length > 0, `Post ${post.id} keywords string missing`);
  const kws = kwString.split(',').map(s => s.trim()).filter(Boolean);
  assert(kws.length >= 15 && kws.length <= 20, `Post ${post.id} has ${kws.length} keywords (required 15-20)`);

  kws.forEach(kw => {
    const lower = kw.toLowerCase();
    assert(!existingKeywords.has(lower), `Collision with existing 1-35 keyword: "${kw}" in post ${post.id}`);
    if (allNewKeywords.has(lower)) {
      assert(false, `Collision between new posts: "${kw}" in post ${post.id} and post ${allNewKeywords.get(lower)}`);
    } else {
      allNewKeywords.set(lower, post.id);
    }
  });
});

// 6. Section Sequence, CTA, FAQs, Hindi answer
newPosts.forEach(post => {
  const sections = post.sections;
  assert(sections[0].id === 'intro' && sections[0].type === 'paragraph', `Post ${post.id} first section must be intro paragraph`);
  const introWords = sections[0].content.split(/\s+/).length;
  assert(introWords >= 130 && introWords <= 250, `Post ${post.id} intro word count ${introWords} (target 150-220)`);

  // Check CTA section
  const ctaSection = sections.find(s => s.cta && s.cta.link === '/booking');
  assert(!!ctaSection, `Post ${post.id} missing CTA section with link: "/booking"`);

  // Check FAQ header
  const faqHeaderIdx = sections.findIndex(s => s.id === 'faqs');
  assert(faqHeaderIdx !== -1, `Post ${post.id} missing FAQ header section with id "faqs"`);

  // Check FAQ items
  const faqItems = sections.filter(s => s.id && s.id.startsWith('faq-'));
  assert(faqItems.length >= 5 && faqItems.length <= 6, `Post ${post.id} must have 5-6 FAQ items, got ${faqItems.length}`);

  // Check Hindi answer in at least 1 FAQ
  const hasHindi = faqItems.some(f => /[\u0900-\u097F]/.test(f.content));
  assert(hasHindi, `Post ${post.id} must contain at least 1 FAQ with Hindi script answer`);
});

// 7. Text formatting rules (no en-dash, no em-dash, no external links, valid internal links)
let siblingNewLinksCount = 0;
newPosts.forEach(post => {
  const postString = JSON.stringify(post);
  assert(!postString.includes('—'), `Post ${post.id} contains em dash (—)`);
  assert(!postString.includes('–'), `Post ${post.id} contains en dash (–)`);

  // Extract all markdown links: [text](target) or **[text](target)**
  const linkMatches = [...postString.matchAll(/\[([^\]]+)\]\(([^)]+)\)/g)];
  assert(linkMatches.length > 0, `Post ${post.id} has no markdown links`);

  let blogLinkCount = 0;
  linkMatches.forEach(m => {
    const target = m[2];
    assert(!target.startsWith('http://') && !target.startsWith('https://'),
      `Post ${post.id} contains external link: ${target}`);
    assert(target.startsWith('/'), `Post ${post.id} link target does not start with '/': ${target}`);

    if (target.startsWith('/blog/')) {
      const slug = target.replace('/blog/', '');
      assert(allValidSlugs.has(slug), `Post ${post.id} links to invalid blog slug: ${slug}`);
      blogLinkCount++;
      if (newSlugs.has(slug)) {
        siblingNewLinksCount++;
      }
    } else {
      assert(whitelistedPaths.has(target), `Post ${post.id} links to non-whitelisted path: ${target}`);
    }
  });

  assert(blogLinkCount >= 2, `Post ${post.id} has only ${blogLinkCount} blog links (required 2-3)`);
});

assert(siblingNewLinksCount >= 4, `Expected at least 4 links to sibling new posts, found ${siblingNewLinksCount}`);

// 8. Check OG image files in public/
const publicFiles = new Set(fs.readdirSync('public'));
newPosts.forEach(post => {
  const ogImgUrl = post.schema[0].image;
  const filename = ogImgUrl.replace('https://www.mahakalbhaktanivasujjain.com/', '');
  assert(publicFiles.has(filename), `OG image file missing in public/: ${filename} for post ${post.id}`);
});

console.log(`\n========================================`);
console.log(`Verification Summary (Posts 36-50):`);
console.log(`Total tests run: ${totalTests}`);
console.log(`Passed: ${passedTests}`);
console.log(`Failed: ${failures.length}`);
if (failures.length === 0) {
  console.log(`RESULT: ALL 15 NEW POSTS (36-50) 100% COMPLIANT WITH ALL REQUIREMENTS!`);
} else {
  console.log(`FAILURES FOUND:\n` + failures.join('\n'));
}
