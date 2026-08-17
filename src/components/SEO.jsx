import { useEffect } from "react";

const SEO = ({ title, description, canonicalPath = "" }) => {
  useEffect(() => {
    if (title) {
      document.title = title;
    }

    if (description) {
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement("meta");
        metaDesc.name = "description";
        document.head.appendChild(metaDesc);
      }
      metaDesc.content = description;
    }

    // Canonical link tag management
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.rel = "canonical";
      document.head.appendChild(canonicalLink);
    }
    const origin = window.location.origin;
    canonicalLink.href = `${origin}${canonicalPath}`;
  }, [title, description, canonicalPath]);

  return null;
};

export default SEO;
