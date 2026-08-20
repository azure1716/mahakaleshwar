import { Link } from "react-router-dom";
import ScrollReveal from "./ScrollReveal";
import { blogPosts } from "../data/blogPosts";
import { ArrowRight, BookOpen, Calendar, Clock } from "lucide-react";

const BlogTeaser = () => {
  const latestPost = blogPosts[0];

  if (!latestPost) return null;

  return (
    <section className="py-16 md:py-20 bg-brand-cream-50 border-t border-brand-gold-500/10">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        <ScrollReveal className="text-center space-y-3 max-w-2xl mx-auto mb-10">
          <p className="text-xs font-semibold tracking-widest text-brand-gold-600 uppercase">
            Pilgrim Travel Guides
          </p>
          <h2 className="text-2xl md:text-4xl font-serif font-bold text-brand-burgundy-800">
            Latest from Our Pilgrim Blog
          </h2>
          <p className="text-xs md:text-sm text-brand-dark-light font-light max-w-xl mx-auto">
            Practical advice on room tariffs, temple proximity, and early morning Bhasma Aarti darshan preparation.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <div className="bg-white rounded-3xl overflow-hidden border border-brand-gold-500/15 shadow-sm hover:shadow-md transition-all duration-300 grid grid-cols-1 md:grid-cols-12 gap-0 group">
            {/* Image */}
            <div className="md:col-span-5 relative min-h-[220px] md:min-h-full overflow-hidden bg-brand-burgundy-900">
              <img
                src={latestPost.image}
                alt={latestPost.imageAlt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-burgundy-900/60 to-transparent" />
              <span className="absolute top-4 left-4 bg-brand-burgundy-900/90 backdrop-blur-md text-brand-gold-400 text-[11px] font-semibold tracking-wider px-3 py-1 rounded-full border border-brand-gold-500/20 flex items-center gap-1.5">
                <BookOpen size={12} /> Pilgrim Guide
              </span>
            </div>

            {/* Content */}
            <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-4 text-xs text-brand-dark-light/70 font-medium">
                  <span className="flex items-center gap-1">
                    <Calendar size={13} className="text-brand-gold-500" />
                    {latestPost.dateFormatted}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={13} className="text-brand-gold-500" />
                    {latestPost.readTime}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-serif font-bold text-brand-burgundy-800 group-hover:text-brand-gold-600 transition-colors leading-snug">
                  <Link to={`/blog/${latestPost.slug}`}>
                    {latestPost.title}
                  </Link>
                </h3>

                <p className="text-xs sm:text-sm text-brand-dark-light font-light leading-relaxed line-clamp-3">
                  {latestPost.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-brand-gold-500/10 flex items-center justify-between">
                <Link
                  to="/blog"
                  className="text-xs font-semibold text-brand-gold-600 hover:underline uppercase tracking-wider"
                >
                  View All Guides
                </Link>

                <Link
                  to={`/blog/${latestPost.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-burgundy-900 hover:text-brand-gold-600 transition-colors"
                >
                  Read Guide <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default BlogTeaser;
