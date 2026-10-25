import { useEffect, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import SEO from "../components/SEO";
import ScrollReveal from "../components/ScrollReveal";
import { blogPosts } from "../data/blogPosts.js";
import {
  getCategories,
  getTags,
  getPostsByCategory,
  getPostsByTag,
  getCategoryBySlug,
  getTagBySlug,
  slugify,
} from "../data/blogTaxonomy.js";
import {
  Calendar,
  Clock,
  ArrowRight,
  BookOpen,
  MessageSquare,
  Tag,
  FolderOpen,
  Sparkles,
  X,
  Layers,
} from "lucide-react";
import { PHONE_NUMBER_WHATSAPP } from "../config.js";

const BlogListPage = () => {
  const { categorySlug, tagSlug } = useParams();

  // Scroll to top on route filter changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [categorySlug, tagSlug]);

  // Dynamic taxonomy calculations derived from blogPosts data
  const allCategories = useMemo(() => getCategories(blogPosts), []);
  const allTags = useMemo(() => getTags(blogPosts), []);

  const activeCategory = useMemo(
    () => (categorySlug ? getCategoryBySlug(categorySlug, blogPosts) : null),
    [categorySlug]
  );

  const activeTag = useMemo(
    () => (tagSlug ? getTagBySlug(tagSlug, blogPosts) : null),
    [tagSlug]
  );

  // Filter posts based on loaded route
  const filteredPosts = useMemo(() => {
    if (categorySlug) {
      return getPostsByCategory(categorySlug, blogPosts);
    }
    if (tagSlug) {
      return getPostsByTag(tagSlug, blogPosts);
    }
    return blogPosts;
  }, [categorySlug, tagSlug]);

  // Dynamic SEO metadata
  let seoTitle =
    "Pilgrim Blog & Ujjain Stay Guides | Shri Mahakaleshwar Bhakta Niwas";
  let seoDescription =
    "Read essential pilgrim guides for visiting Shri Mahakaleshwar Temple in Ujjain. Information on room tariffs, Bhasma Aarti timings, Mahakal Lok, and travel advice.";
  let canonicalPath = "/blog";

  let breadcrumbItems = [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.mahakalbhaktanivasujjain.com/",
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Blog",
      "item": "https://www.mahakalbhaktanivasujjain.com/blog",
    },
  ];

  if (activeCategory) {
    seoTitle = `${activeCategory.name} | Pilgrim Blog | Shri Mahakaleshwar Bhakta Niwas`;
    seoDescription = `Browse essential ${activeCategory.name} guides for visiting Shri Mahakaleshwar Temple in Ujjain. Room tariffs, timings, and pilgrim advice.`;
    canonicalPath = `/blog/category/${activeCategory.slug}`;
    breadcrumbItems.push({
      "@type": "ListItem",
      "position": 3,
      "name": activeCategory.name,
      "item": `https://www.mahakalbhaktanivasujjain.com/blog/category/${activeCategory.slug}`,
    });
  } else if (activeTag) {
    seoTitle = `${activeTag.name} | Pilgrim Blog | Shri Mahakaleshwar Bhakta Niwas`;
    seoDescription = `Pilgrim articles and guides covering ${activeTag.name} for Shri Mahakaleshwar Temple, Ujjain. Helpful advice on darshan, rituals, and stay.`;
    canonicalPath = `/blog/tag/${activeTag.slug}`;
    breadcrumbItems.push({
      "@type": "ListItem",
      "position": 3,
      "name": activeTag.name,
      "item": `https://www.mahakalbhaktanivasujjain.com/blog/tag/${activeTag.slug}`,
    });
  }

  const blogListSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbItems,
  };

  // Banner titles
  const bannerEyebrow = activeCategory
    ? "Category Archive"
    : activeTag
      ? "Topic Archive"
      : "Pilgrim Travel & Stay Articles";

  const bannerTitle = activeCategory
    ? `${activeCategory.name} Guides`
    : activeTag
      ? `${activeTag.name}`
      : "Ujjain Pilgrimage & Room Guides";

  const bannerSubtitle = activeCategory
    ? `Explore all pilgrim guides and practical articles categorized under "${activeCategory.name}".`
    : activeTag
      ? `Explore all articles and pilgrimage insights tagged with "${activeTag.name}".`
      : "Practical advice, room tariff insights, Bhasma Aarti preparation, and travel tips for your holy visit to Shri Mahakaleshwar Temple in Ujjain.";

  const isFiltered = Boolean(activeCategory || activeTag);

  return (
    <div>
      <SEO
        title={seoTitle}
        description={seoDescription}
        canonicalPath={canonicalPath}
        schemaData={blogListSchema}
      />

      {/* Header Banner */}
      <section className="bg-brand-burgundy-900 border-b border-brand-gold-500/10 py-16 md:py-24 text-center text-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-brand-gold-500/5 rounded-full blur-[80px]" />

        <ScrollReveal className="container mx-auto px-4 relative z-10 space-y-4 max-w-3xl">
          <p className="text-xs font-semibold tracking-widest text-brand-gold-400 uppercase">
            {bannerEyebrow}
          </p>

          <h1 className="text-3xl md:text-5xl font-serif font-bold text-white leading-tight">
            {bannerTitle}
          </h1>

          <div className="w-12 h-[1px] bg-brand-gold-500 mx-auto my-4" />

          <p className="text-sm md:text-base text-brand-cream-100/70 font-light leading-relaxed max-w-2xl mx-auto">
            {bannerSubtitle}
          </p>
        </ScrollReveal>
      </section>

      {/* Taxonomy Chooser & Blog Post List Section */}
      <section className="py-12 md:py-16 bg-brand-cream-50">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl space-y-10">

          {/* Browse by Category & Popular Topics Navigation Card */}
          <ScrollReveal>
            <div className="bg-white rounded-3xl p-6 md:p-8 border border-brand-gold-500/20 shadow-xs space-y-6">
              
              {/* Category Pills Section */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold text-brand-burgundy-900 uppercase tracking-wider">
                  <FolderOpen size={16} className="text-brand-gold-500" />
                  <span>Browse by Category</span>
                </div>

                <div className="flex flex-wrap gap-2 md:gap-2.5">
                  <Link
                    to="/blog"
                    className={`text-xs font-semibold px-4 py-2 rounded-full inline-flex items-center gap-2 transition-all ${
                      !categorySlug && !tagSlug
                        ? "bg-brand-burgundy-900 text-brand-gold-400 border border-brand-gold-500 shadow-xs"
                        : "bg-white text-brand-burgundy-900 border border-brand-gold-500/25 hover:border-brand-gold-500 hover:bg-brand-gold-500/10"
                    }`}
                  >
                    <span>All Guides</span>
                    <span
                      className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${
                        !categorySlug && !tagSlug
                          ? "bg-brand-gold-500/20 text-brand-gold-300"
                          : "bg-brand-gold-500/15 text-brand-burgundy-900"
                      }`}
                    >
                      {blogPosts.length}
                    </span>
                  </Link>

                  {allCategories.map((cat) => {
                    const isActive = categorySlug === cat.slug;
                    return (
                      <Link
                        key={cat.slug}
                        to={isActive ? "/blog" : `/blog/category/${cat.slug}`}
                        className={`text-xs font-semibold px-4 py-2 rounded-full inline-flex items-center gap-2 transition-all ${
                          isActive
                            ? "bg-brand-burgundy-900 text-brand-gold-400 border border-brand-gold-500 shadow-xs"
                            : "bg-white text-brand-burgundy-900 border border-brand-gold-500/25 hover:border-brand-gold-500 hover:bg-brand-gold-500/10"
                        }`}
                      >
                        <span>{cat.name}</span>
                        <span
                          className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${
                            isActive
                              ? "bg-brand-gold-500/20 text-brand-gold-300"
                              : "bg-brand-gold-500/15 text-brand-burgundy-900"
                          }`}
                        >
                          {cat.count}
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-brand-gold-500/10" />

              {/* Popular Topics (Tag Cloud) Section */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold text-brand-burgundy-900 uppercase tracking-wider">
                  <Sparkles size={16} className="text-brand-gold-500" />
                  <span>Popular Topics</span>
                </div>

                <div className="flex flex-wrap gap-1.5 md:gap-2">
                  {allTags.map((tag) => {
                    const isActive = tagSlug === tag.slug;
                    return (
                      <Link
                        key={tag.slug}
                        to={isActive ? "/blog" : `/blog/tag/${tag.slug}`}
                        className={`text-[11px] font-medium px-3 py-1.5 rounded-full inline-flex items-center gap-1.5 transition-all ${
                          isActive
                            ? "bg-brand-gold-500 text-brand-burgundy-900 border border-brand-gold-600 font-bold shadow-xs"
                            : "bg-brand-cream-50 text-brand-dark-light hover:text-brand-burgundy-900 border border-brand-gold-500/15 hover:border-brand-gold-500/40 hover:bg-white"
                        }`}
                      >
                        <Tag size={10} className={isActive ? "text-brand-burgundy-900" : "text-brand-gold-500"} />
                        <span>{tag.name}</span>
                        <span
                          className={`text-[10px] font-bold ${
                            isActive
                              ? "bg-brand-burgundy-900/15 text-brand-burgundy-900 px-1 py-0.2 rounded-full"
                              : "text-brand-gold-600/90"
                          }`}
                        >
                          ({tag.count})
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Active Filter Status Bar */}
              {isFiltered && (
                <div className="pt-4 border-t border-brand-gold-500/10 flex flex-wrap items-center justify-between gap-3 text-xs">
                  <div className="flex items-center gap-2 text-brand-dark-light">
                    <Layers size={14} className="text-brand-gold-500" />
                    <span>
                      Filtered by{" "}
                      <strong className="text-brand-burgundy-900 font-semibold">
                        {activeCategory ? activeCategory.name : activeTag?.name}
                      </strong>
                      : showing <strong>{filteredPosts.length}</strong> guide{filteredPosts.length === 1 ? "" : "s"}
                    </span>
                  </div>

                  <Link
                    to="/blog"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-burgundy-900 hover:text-brand-gold-600 border border-brand-gold-500/30 hover:border-brand-gold-500 bg-brand-cream-50 px-3 py-1 rounded-full transition-all"
                  >
                    <X size={12} /> View all {blogPosts.length} posts
                  </Link>
                </div>
              )}
            </div>
          </ScrollReveal>

          {/* Blog Post List Section */}
          {filteredPosts.length === 0 ? (
            <div className="bg-white rounded-3xl p-12 text-center border border-brand-gold-500/15 space-y-4">
              <p className="text-brand-dark-light text-sm">
                No guides found matching this selection.
              </p>
              <Link
                to="/blog"
                className="btn-premium-gold px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider inline-flex items-center gap-2"
              >
                View All Guides
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredPosts.map((post, idx) => (
                <ScrollReveal key={post.slug} delay={(idx % 2) * 50}>
                  <article className="bg-white rounded-3xl overflow-hidden border border-brand-gold-500/15 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col h-full group">
                    {/* Card Image */}
                    <div className="relative h-56 overflow-hidden bg-brand-burgundy-900">
                      <img
                        src={post.image}
                        alt={post.imageAlt}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-burgundy-900/60 to-transparent" />
                      
                      {/* Category Pill Link on Image */}
                      {post.category && (
                        <Link
                          to={`/blog/category/${slugify(post.category)}`}
                          className="absolute bottom-3 left-4 bg-brand-burgundy-900/90 backdrop-blur-md text-brand-gold-400 hover:bg-brand-gold-500 hover:text-brand-burgundy-900 text-[11px] font-semibold tracking-wider px-3 py-1 rounded-full border border-brand-gold-500/20 flex items-center gap-1.5 transition-colors z-10"
                        >
                          <BookOpen size={12} />
                          <span>{post.category}</span>
                        </Link>
                      )}
                    </div>

                    {/* Card Content */}
                    <div className="p-6 md:p-8 flex flex-col flex-1 space-y-4">
                      <div className="flex items-center gap-4 text-xs text-brand-dark-light/70 font-medium">
                        <span className="flex items-center gap-1">
                          <Calendar size={13} className="text-brand-gold-500" />
                          {post.dateFormatted}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={13} className="text-brand-gold-500" />
                          {post.readTime}
                        </span>
                      </div>

                      <h2 className="text-xl font-serif font-bold text-brand-burgundy-800 group-hover:text-brand-gold-600 transition-colors leading-snug">
                        <Link to={`/blog/${post.slug}`}>
                          {post.title}
                        </Link>
                      </h2>

                      <p className="text-xs md:text-sm text-brand-dark-light font-light leading-relaxed flex-1">
                        {post.excerpt}
                      </p>

                      {/* Tag Cloud Pills on Card */}
                      {Array.isArray(post.tags) && post.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {post.tags.slice(0, 3).map((tag) => (
                            <Link
                              key={tag}
                              to={`/blog/tag/${slugify(tag)}`}
                              className="text-[10px] text-brand-dark-light/80 hover:text-brand-burgundy-900 bg-brand-cream-50 hover:bg-brand-gold-500/15 px-2 py-0.5 rounded-md border border-brand-gold-500/10 transition-colors inline-flex items-center gap-1"
                            >
                              <Tag size={9} className="text-brand-gold-500" />
                              <span>{tag}</span>
                            </Link>
                          ))}
                        </div>
                      )}

                      <div className="pt-4 border-t border-brand-gold-500/10 flex items-center justify-between">
                        <span className="text-xs font-semibold text-brand-gold-600 tracking-wide uppercase">
                          {post.author}
                        </span>
                        <Link
                          to={`/blog/${post.slug}`}
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-burgundy-900 hover:text-brand-gold-600 transition-colors group-hover:translate-x-0.5 transition-transform"
                        >
                          Read Full Guide <ArrowRight size={14} />
                        </Link>
                      </div>
                    </div>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Booking Assistance CTA */}
      <section className="py-16 bg-white border-t border-brand-gold-500/10">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-brand-burgundy-800">
            Planning Your Visit to Shri Mahakaleshwar Temple?
          </h2>
          <p className="text-xs md:text-sm text-brand-dark-light max-w-xl mx-auto font-light leading-relaxed">
            Reserve clean AC or Non-AC rooms just 200 metres from the temple entrance. Contact our reception 24/7 for instant room availability.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2">
            <Link
              to="/booking"
              className="btn-premium-gold px-8 py-3.5 rounded-xl text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2"
            >
              Book Room Online
            </Link>
            <a
              href={`https://wa.me/${PHONE_NUMBER_WHATSAPP}?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20a%20room%20booking.`}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-brand-gold-500/30 text-brand-burgundy-900 px-8 py-3.5 rounded-xl text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-brand-burgundy-900 hover:text-white transition-all"
            >
              <MessageSquare size={16} />
              WhatsApp Booking
            </a>
          </div>

          <div className="pt-6 border-t border-brand-gold-500/10 flex flex-wrap justify-center gap-6 text-xs text-brand-gold-600 font-semibold">
            <Link to="/rooms" className="hover:underline">View All Rooms</Link>
            <Link to="/rooms/price" className="hover:underline">Check Price List</Link>
            <Link to="/location" className="hover:underline">Map & Directions</Link>
            <Link to="/contact" className="hover:underline">Contact Reception</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogListPage;
