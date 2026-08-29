import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DIST_DIR = path.resolve(__dirname, '../dist');

function escapeHtml(str) {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

const routes = [
  {
    path: '/',
    title: 'Shri Mahakaleshwar Bhakta Niwas | Dharamshala at Ujjain near Mahakal Temple',
    description: 'Clean, peaceful dharamshala rooms near Shri Mahakaleshwar Temple, Ujjain. 24-hour reception, pure veg bhojanalaya, solar hot water, and Bhasma Aarti guidance.',
    canonicalPath: '/',
    schemaData: [
      {
        "@context": "https://schema.org",
        "@type": "LodgingBusiness",
        "name": "Shri Mahakaleshwar Bhakta Niwas",
        "description": "Clean, peaceful accommodation for families and pilgrims in Ujjain near Shri Mahakaleshwar Jyotirlinga Temple.",
        "url": "https://www.mahakalbhaktanivasujjain.com/",
        "telephone": "+91-8969891496",
        "email": "Mahakalmaharajsanstan@gmail.com",
        "priceRange": "₹900 - ₹2,800",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "127 Temple Rd, Kot Mohalla, Jaisinghpura",
          "addressLocality": "Ujjain",
          "addressRegion": "Madhya Pradesh",
          "postalCode": "456006",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 23.1827,
          "longitude": 75.7682
        },
        "amenityFeature": [
          { "@type": "LocationFeatureSpecification", "name": "3 Min Walk to Darshan (200m)", "value": true },
          { "@type": "LocationFeatureSpecification", "name": "24-Hour Reception", "value": true },
          { "@type": "LocationFeatureSpecification", "name": "24-Hour Solar Hot Water", "value": true },
          { "@type": "LocationFeatureSpecification", "name": "Pure Veg Bhojanalaya", "value": true },
          { "@type": "LocationFeatureSpecification", "name": "Secure Gated Parking", "value": true },
          { "@type": "LocationFeatureSpecification", "name": "Bhasm Aarti Guidance", "value": true }
        ]
      },
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Shri Mahakaleshwar Bhakta Niwas Ujjain",
        "url": "https://www.mahakalbhaktanivasujjain.com/"
      }
    ]
  },
  {
    path: '/rooms',
    title: 'Bhakta Niwas Ujjain Rooms | Room Types & Amenities',
    description: 'Explore rooms at Shri Mahakaleshwar Bhakta Niwas Ujjain near Mahakal temple. Standard Twin from ₹900/night, Deluxe AC & Family Suites with attached bath & 24hr hot water.',
    canonicalPath: '/rooms',
    schemaData: {
      "@context": "https://schema.org",
      "@type": "ItemPage",
      "name": "Bhakta Niwas Ujjain Rooms",
      "description": "Clean AC and Non-AC room options at Shri Mahakaleshwar Bhakta Niwas near Mahakaleshwar Temple, Ujjain.",
      "url": "https://www.mahakalbhaktanivasujjain.com/rooms",
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.mahakalbhaktanivasujjain.com/" },
          { "@type": "ListItem", "position": 2, "name": "Rooms", "item": "https://www.mahakalbhaktanivasujjain.com/rooms" }
        ]
      }
    }
  },
  {
    path: '/rooms/price',
    title: 'Bhakta Niwas Ujjain Room Price & Tariff | 2026 Price List',
    description: 'Check official room price at Shri Mahakaleshwar Bhakta Niwas Ujjain. Standard twin from ₹900/night, Deluxe AC ₹2,000, Family suites ₹2,500. No hidden charges.',
    canonicalPath: '/rooms/price',
    schemaData: {
      "@context": "https://schema.org",
      "@type": "ItemPage",
      "name": "Bhakta Niwas Ujjain Room Price & Tariff",
      "description": "Transparent room prices for Shri Mahakaleshwar Bhakta Niwas in Ujjain near Mahakal temple. Tariff from ₹900 to ₹2,800 per night.",
      "url": "https://www.mahakalbhaktanivasujjain.com/rooms/price",
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.mahakalbhaktanivasujjain.com/" },
          { "@type": "ListItem", "position": 2, "name": "Rooms", "item": "https://www.mahakalbhaktanivasujjain.com/rooms" },
          { "@type": "ListItem", "position": 3, "name": "Room Price", "item": "https://www.mahakalbhaktanivasujjain.com/rooms/price" }
        ]
      }
    }
  },
  {
    path: '/booking',
    title: 'Bhakta Niwas Ujjain Online Booking | Reserve Room Near Mahakal Temple',
    description: 'Book Shri Mahakaleshwar Bhakta Niwas room online. Quick booking on WhatsApp or call +91 89698 91496. Clean AC & Non-AC rooms near Mahakal Temple, Ujjain.',
    canonicalPath: '/booking',
    schemaData: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Bhakta Niwas Ujjain Online Booking",
      "description": "Reserve rooms at Shri Mahakaleshwar Bhakta Niwas Ujjain online via WhatsApp or call reception directly (+91 89698 91496).",
      "url": "https://www.mahakalbhaktanivasujjain.com/booking",
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.mahakalbhaktanivasujjain.com/" },
          { "@type": "ListItem", "position": 2, "name": "Booking", "item": "https://www.mahakalbhaktanivasujjain.com/booking" }
        ]
      }
    }
  },
  {
    path: '/location',
    title: 'Bhakta Niwas Near Mahakaleshwar Temple Ujjain | Location & Map',
    description: 'Shri Mahakaleshwar Bhakta Niwas is located just 200m (3 min walk) from Mahakaleshwar Temple Ujjain. Check address, map directions from Railway Station & Airport.',
    canonicalPath: '/location',
    schemaData: {
      "@context": "https://schema.org",
      "@type": "Place",
      "name": "Shri Mahakaleshwar Bhakta Niwas Location",
      "description": "200 metres (3 minute walk) from Shri Mahakaleshwar Jyotirlinga Temple, Ujjain.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "127 Temple Rd, Kot Mohalla, Jaisinghpura",
        "addressLocality": "Ujjain",
        "addressRegion": "Madhya Pradesh",
        "postalCode": "456006",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 23.1827,
        "longitude": 75.7682
      },
      "url": "https://www.mahakalbhaktanivasujjain.com/location",
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.mahakalbhaktanivasujjain.com/" },
          { "@type": "ListItem", "position": 2, "name": "Location", "item": "https://www.mahakalbhaktanivasujjain.com/location" }
        ]
      }
    }
  },
  {
    path: '/faq',
    title: 'Bhakta Niwas Ujjain FAQ | Rooms, Booking, Prices & Timing',
    description: 'Frequently asked questions about Shri Mahakaleshwar Bhakta Niwas in Ujjain. Clear answers on room prices, booking procedure, temple distance, check-in, and parking.',
    canonicalPath: '/faq',
    schemaData: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "name": "Bhakta Niwas Ujjain FAQ",
      "url": "https://www.mahakalbhaktanivasujjain.com/faq"
    }
  },
  {
    path: '/about',
    title: 'About Shri Mahakaleshwar Bhakta Niwas Ujjain | Pilgrim Seva',
    description: 'Discover Shri Mahakaleshwar Bhakta Niwas in Ujjain. Established to provide clean, peaceful dharamshala accommodation near Shri Mahakaleshwar Temple.',
    canonicalPath: '/about',
    schemaData: {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "name": "About Shri Mahakaleshwar Bhakta Niwas Ujjain",
      "description": "Learn about Shri Mahakaleshwar Bhakta Niwas in Ujjain — family dharamshala accommodation dedicated to serving pilgrims visiting Shri Mahakaleshwar Jyotirlinga.",
      "url": "https://www.mahakalbhaktanivasujjain.com/about",
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.mahakalbhaktanivasujjain.com/" },
          { "@type": "ListItem", "position": 2, "name": "About Us", "item": "https://www.mahakalbhaktanivasujjain.com/about" }
        ]
      }
    }
  },
  {
    path: '/mahakaleshwar-temple-guide',
    title: 'Where to Stay in Ujjain Near Mahakaleshwar Temple | Darshan & Stay Guide',
    description: 'Comprehensive guide for Mahakaleshwar Temple Ujjain visitors. Bhasma Aarti timings, dress code, accommodation tips near Mahakal temple, and local itinerary.',
    canonicalPath: '/mahakaleshwar-temple-guide',
    schemaData: {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Mahakaleshwar Temple Visit Guide & Where to Stay in Ujjain",
      "description": "Complete guide for pilgrims visiting Shri Mahakaleshwar Temple Ujjain — Bhasma Aarti timings, accommodation advice, nearby temples, and stay tips.",
      "author": {
        "@type": "Organization",
        "name": "Shri Mahakaleshwar Bhakta Niwas"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Shri Mahakaleshwar Bhakta Niwas",
        "url": "https://www.mahakalbhaktanivasujjain.com"
      },
      "mainEntityOfPage": "https://www.mahakalbhaktanivasujjain.com/mahakaleshwar-temple-guide",
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.mahakalbhaktanivasujjain.com/" },
          { "@type": "ListItem", "position": 2, "name": "Temple Guide", "item": "https://www.mahakalbhaktanivasujjain.com/mahakaleshwar-temple-guide" }
        ]
      }
    }
  },
  {
    path: '/blog',
    title: 'Pilgrim Blog & Ujjain Stay Guides | Shri Mahakaleshwar Bhakta Niwas',
    description: 'Read essential pilgrim guides for visiting Shri Mahakaleshwar Temple in Ujjain. Information on room tariffs, Bhasma Aarti timings, Mahakal Lok, and travel advice.',
    canonicalPath: '/blog',
    schemaData: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.mahakalbhaktanivasujjain.com/" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.mahakalbhaktanivasujjain.com/blog" }
      ]
    }
  },
  {
    path: '/blog/room-near-mahakaleshwar-temple-ujjain-guide',
    title: 'Booking a Room Near Mahakaleshwar Temple Ujjain | Stay & Aarti Guide',
    description: 'Complete guide to booking rooms near Mahakaleshwar Temple Ujjain. Check prices, double bed room tariffs, Bhasma Aarti timing tips, and walking distance to Mahakal Lok.',
    canonicalPath: '/blog/room-near-mahakaleshwar-temple-ujjain-guide',
    ogType: 'article',
    ogImage: '/room.webp',
    schemaData: {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": "Booking a Room Near Mahakaleshwar Temple, Ujjain: Prices, Location & Bhasma Aarti Guide",
      "description": "Complete guide for pilgrims booking accommodation near Mahakaleshwar Temple in Ujjain — room rates, proximity to Mahakal Lok, early morning Bhasma Aarti guidance, and direct contact details.",
      "datePublished": "2026-08-20",
      "dateModified": "2026-08-20",
      "author": {
        "@type": "Organization",
        "name": "Shri Mahakaleshwar Bhakta Niwas",
        "url": "https://www.mahakalbhaktanivasujjain.com"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Shri Mahakaleshwar Bhakta Niwas",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.mahakalbhaktanivasujjain.com/favicon-48x48.png"
        }
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.mahakalbhaktanivasujjain.com/blog/room-near-mahakaleshwar-temple-ujjain-guide"
      }
    }
  },
  {
    path: '/contact',
    title: 'Bhakta Niwas Ujjain Contact Number | Booking Enquiry',
    description: 'Shri Mahakaleshwar Bhakta Niwas Ujjain contact number (+91 89698 91496). Call or WhatsApp for room booking near Shri Mahakaleshwar Temple, Ujjain. 24hr reception desk.',
    canonicalPath: '/contact',
    schemaData: {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": "Bhakta Niwas Ujjain Contact Number & Booking Enquiry",
      "description": "Contact Shri Mahakaleshwar Bhakta Niwas reception in Ujjain (+91 89698 91496) for room booking, location guidance, and darshan information.",
      "url": "https://www.mahakalbhaktanivasujjain.com/contact",
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.mahakalbhaktanivasujjain.com/" },
          { "@type": "ListItem", "position": 2, "name": "Contact", "item": "https://www.mahakalbhaktanivasujjain.com/contact" }
        ]
      }
    }
  }
];

function prerenderRoute(baseHtml, meta) {
  let html = baseHtml;
  const domain = "https://www.mahakalbhaktanivasujjain.com";
  const canonicalUrl = `${domain}${meta.canonicalPath === '/' ? '/' : meta.canonicalPath}`;
  const ogImgUrl = meta.ogImage ? (meta.ogImage.startsWith('http') ? meta.ogImage : `${domain}${meta.ogImage.startsWith('/') ? meta.ogImage : `/${meta.ogImage}`}`) : `${domain}/room.webp`;
  const ogType = meta.ogType || "website";

  // Title tag update
  if (/<title>.*<\/title>/i.test(html)) {
    html = html.replace(/<title>.*<\/title>/i, `<title>${escapeHtml(meta.title)}</title>`);
  } else {
    html = html.replace('</head>', `  <title>${escapeHtml(meta.title)}</title>\n</head>`);
  }

  // Remove existing metadata tags if present to prevent duplicate tags
  html = html.replace(/<meta\s+name=["']description["'][^>]*>/gi, '');
  html = html.replace(/<link\s+rel=["']canonical["'][^>]*>/gi, '');
  html = html.replace(/<meta\s+property=["']og:[^"']+["'][^>]*>/gi, '');
  html = html.replace(/<meta\s+name=["']twitter:[^"']+["'][^>]*>/gi, '');
  html = html.replace(/<script\s+id=["']dynamic-page-schema["'][^>]*>[\s\S]*?<\/script>/gi, '');

  const tags = [
    `<meta name="description" content="${escapeHtml(meta.description)}" />`,
    `<link rel="canonical" href="${canonicalUrl}" />`,
    `<meta property="og:title" content="${escapeHtml(meta.title)}" />`,
    `<meta property="og:description" content="${escapeHtml(meta.description)}" />`,
    `<meta property="og:url" content="${canonicalUrl}" />`,
    `<meta property="og:type" content="${ogType}" />`,
    `<meta property="og:site_name" content="Shri Mahakaleshwar Bhakta Niwas Ujjain" />`,
    `<meta property="og:image" content="${ogImgUrl}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${escapeHtml(meta.title)}" />`,
    `<meta name="twitter:description" content="${escapeHtml(meta.description)}" />`,
    meta.schemaData ? `<script id="dynamic-page-schema" type="application/ld+json">${JSON.stringify(meta.schemaData)}</script>` : ''
  ].filter(Boolean).map(t => `    ${t}`).join('\n');

  html = html.replace('</head>', `${tags}\n  </head>`);
  return html;
}

function runPrerender() {
  const indexPath = path.join(DIST_DIR, 'index.html');
  if (!fs.existsSync(indexPath)) {
    console.error('[prerender] Error: dist/index.html not found!');
    process.exit(1);
  }

  const baseHtml = fs.readFileSync(indexPath, 'utf8');

  for (const route of routes) {
    const preRenderedHtml = prerenderRoute(baseHtml, route);

    let targetFile;
    if (route.path === '/') {
      targetFile = path.join(DIST_DIR, 'index.html');
    } else {
      const cleanPath = route.path.startsWith('/') ? route.path.slice(1) : route.path;
      targetFile = path.join(DIST_DIR, cleanPath, 'index.html');
    }

    const targetDir = path.dirname(targetFile);
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }

    fs.writeFileSync(targetFile, preRenderedHtml, 'utf8');
    console.log(`[prerender] Successfully pre-rendered static HTML for ${route.path} -> ${path.relative(DIST_DIR, targetFile)}`);
  }

  console.log('[prerender] All 11 routes pre-rendered successfully without browser overhead!');
}

runPrerender();
