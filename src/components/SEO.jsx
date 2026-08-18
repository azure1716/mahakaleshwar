import { useEffect } from "react";

const SEO = ({ title, description, canonicalPath = "", schemaData = null, ogImage = "/room.webp", ogType = "website" }) => {
  useEffect(() => {
    const domain = "https://www.mahakalbhaktanivasujjain.com";
    const fullCanonical = `${domain}${canonicalPath.startsWith("/") ? canonicalPath : `/${canonicalPath}`}`;

    // Document Title
    if (title) {
      document.title = title;
    }

    // Helper function to update or create meta tags
    const updateMeta = (selector, attributeName, attributeValue, contentValue) => {
      let element = document.querySelector(selector);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attributeName, attributeValue);
        document.head.appendChild(element);
      }
      element.setAttribute("content", contentValue);
    };

    // Meta Description
    if (description) {
      updateMeta('meta[name="description"]', 'name', 'description', description);
    }

    // Canonical Tag
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.rel = "canonical";
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = fullCanonical;

    // Open Graph Meta Tags
    if (title) updateMeta('meta[property="og:title"]', 'property', 'og:title', title);
    if (description) updateMeta('meta[property="og:description"]', 'property', 'og:description', description);
    updateMeta('meta[property="og:url"]', 'property', 'og:url', fullCanonical);
    updateMeta('meta[property="og:type"]', 'property', 'og:type', ogType);
    updateMeta('meta[property="og:site_name"]', 'property', 'og:site_name', 'Shri Mahakaleshwar Bhakta Niwas Ujjain');
    if (ogImage) {
      const fullImgUrl = ogImage.startsWith("http") ? ogImage : `${domain}${ogImage.startsWith("/") ? ogImage : `/${ogImage}`}`;
      updateMeta('meta[property="og:image"]', 'property', 'og:image', fullImgUrl);
    }

    // Twitter Card Meta Tags
    updateMeta('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image');
    if (title) updateMeta('meta[name="twitter:title"]', 'name', 'twitter:title', title);
    if (description) updateMeta('meta[name="twitter:description"]', 'name', 'twitter:description', description);

    // JSON-LD Structured Data Management
    let scriptTag = document.querySelector('script[id="dynamic-page-schema"]');
    if (schemaData) {
      if (!scriptTag) {
        scriptTag = document.createElement("script");
        scriptTag.id = "dynamic-page-schema";
        scriptTag.type = "application/ld+json";
        document.head.appendChild(scriptTag);
      }
      scriptTag.textContent = JSON.stringify(schemaData);
    } else if (scriptTag) {
      scriptTag.remove();
    }
  }, [title, description, canonicalPath, schemaData, ogImage, ogType]);

  return null;
};

export default SEO;

