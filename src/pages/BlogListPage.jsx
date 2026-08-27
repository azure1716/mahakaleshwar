import SEO from "../components/SEO";
import ScrollReveal from "../components/ScrollReveal";
import { blogPosts } from "../data/blogPosts";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight, BookOpen, MessageSquare, Phone } from "lucide-react";

const BlogListPage = () => {
  const blogListSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.mahakalbhaktanivasujjain.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://www.mahakalbhaktanivasujjain.com/blog"
      }
    ]
  };

  return (
    <div>
      <SEO
        title="Pilgrim Blog & Ujjain Stay Guides | Shri Mahakaleshwar Bhakta Niwas"
        description="Read essential pilgrim guides for visiting Shri Mahakaleshwar Temple in Ujjain. Information on room tariffs, Bhasma Aarti timings, Mahakal Lok, and travel advice."
        canonicalPath="/blog"
        schemaData={blogListSchema}
      />

      {/* Header Banner */}
      <section className="bg-brand-burgundy-900 border-b border-brand-gold-500/10 py-16 md:py-24 text-center text-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-brand-gold-500/5 rounded-full blur-[80px]" />

        <ScrollReveal className="container mx-auto px-4 relative z-10 space-y-4 max-w-3xl">
          <p className="text-xs font-semibold tracking-widest text-brand-gold-400 uppercase">
            Pilgrim Travel & Stay Articles
          </p>

          <h1 className="text-3xl md:text-5xl font-serif font-bold text-white leading-tight">
            Ujjain Pilgrimage & Room Guides
          </h1>

          <div className="w-12 h-[1px] bg-brand-gold-500 mx-auto my-4" />

          <p className="text-sm md:text-base text-brand-cream-100/70 font-light leading-relaxed max-w-2xl mx-auto">
            Practical advice, room tariff insights, Bhasma Aarti preparation, and travel tips for your holy visit to Shri Mahakaleshwar Temple in Ujjain.
          </p>
        </ScrollReveal>
      </section>

      {/* Blog Post List Section */}
      <section className="py-16 md:py-20 bg-brand-cream-50">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post, idx) => (
              <ScrollReveal key={post.slug} delay={idx * 150}>
                <article className="bg-white rounded-3xl overflow-hidden border border-brand-gold-500/15 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full group">
                  {/* Card Image */}
                  <div className="relative h-56 overflow-hidden bg-brand-burgundy-900">
                    <img
                      src={post.image}
                      alt={post.imageAlt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-burgundy-900/60 to-transparent" />
                    <span className="absolute bottom-3 left-4 bg-brand-burgundy-900/90 backdrop-blur-md text-brand-gold-400 text-[11px] font-semibold tracking-wider px-3 py-1 rounded-full border border-brand-gold-500/20 flex items-center gap-1.5">
                      <BookOpen size={12} /> Pilgrim Guide
                    </span>
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
              href="https://wa.me/918969891496?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20a%20room%20booking."
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
