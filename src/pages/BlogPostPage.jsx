import { useParams, Link, Navigate } from "react-router-dom";
import SEO from "../components/SEO";
import ScrollReveal from "../components/ScrollReveal";
import { blogPosts } from "../data/blogPosts";
import { Calendar, Clock, ArrowLeft, MessageSquare, Phone, MapPin, CheckCircle2, ShieldCheck } from "lucide-react";
import { PHONE_NUMBER_DISPLAY, PHONE_NUMBER_WHATSAPP, PHONE_NUMBER_TEL } from "../config";

const renderFormattedText = (text) => {
  if (!text) return null;
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-semibold text-brand-burgundy-900">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
};

const BlogPostPage = () => {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div>
      <SEO
        title={post.seoTitle}
        description={post.seoDescription}
        canonicalPath={`/blog/${post.slug}`}
        schemaData={post.schema}
        ogImage={post.image}
        ogType="article"
      />

      {/* Header Banner */}
      <section className="bg-brand-burgundy-900 border-b border-brand-gold-500/10 py-12 md:py-20 text-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-brand-gold-500/5 rounded-full blur-[80px]" />

        <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-4xl space-y-6">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-gold-400 hover:text-brand-gold-300 transition-colors"
          >
            <ArrowLeft size={14} /> Back to Blog & Guides
          </Link>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-serif font-bold text-white leading-tight">
            {post.title}
          </h1>

          <p className="text-xs sm:text-sm md:text-base text-brand-cream-100/80 font-light leading-relaxed">
            {post.subtitle}
          </p>

          <div className="flex flex-wrap items-center gap-4 md:gap-6 text-xs text-brand-cream-100/70 pt-2 border-t border-brand-gold-500/15">
            <span className="flex items-center gap-1.5">
              <Calendar size={14} className="text-brand-gold-400" />
              {post.dateFormatted}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={14} className="text-brand-gold-400" />
              {post.readTime}
            </span>
            <span className="flex items-center gap-1.5 text-brand-gold-400 font-semibold">
              <ShieldCheck size={14} />
              Published by {post.author}
            </span>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-12 md:py-20 bg-brand-cream-50">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl space-y-10">
          
          {/* Post Featured Image */}
          <div className="rounded-3xl overflow-hidden border border-brand-gold-500/20 shadow-md">
            <img
              src={post.image}
              alt={post.imageAlt}
              className="w-full max-h-[420px] object-cover"
            />
          </div>

          {/* Article Content Cards */}
          <article className="bg-white p-6 sm:p-10 md:p-12 rounded-3xl border border-brand-gold-500/15 shadow-sm space-y-8">
            {post.sections.map((sec) => (
              <div key={sec.id} className="space-y-4">
                {sec.h2 && (
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-brand-burgundy-800 pt-2 border-t border-brand-gold-500/10">
                    {sec.h2}
                  </h2>
                )}

                {sec.content && (
                  <p className="text-xs sm:text-sm md:text-base text-brand-dark-light font-light leading-relaxed">
                    {renderFormattedText(sec.content)}
                  </p>
                )}

                {sec.extraContent && (
                  <p className="text-xs sm:text-sm md:text-base text-brand-dark-light font-light leading-relaxed">
                    {renderFormattedText(sec.extraContent)}
                  </p>
                )}
              </div>
            ))}

            {/* Quick Summary Highlights Box */}
            <div className="bg-brand-cream-50 p-6 rounded-2xl border border-brand-gold-500/20 space-y-3 my-6">
              <h3 className="text-sm font-serif font-bold text-brand-burgundy-900 uppercase tracking-wider">
                Key Stay Information & Direct Booking Contacts
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-brand-dark font-medium pt-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-brand-gold-500 shrink-0" />
                  <span>200 Metres (3-min walk) to Temple Gate</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-brand-gold-500 shrink-0" />
                  <span>24-Hour Solar Hot Water for morning baths</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-brand-gold-500 shrink-0" />
                  <span>Standard Double Bed Rooms from ₹900/night</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-brand-gold-500 shrink-0" />
                  <span>Direct Reception Phone: {PHONE_NUMBER_DISPLAY}</span>
                </div>
              </div>
            </div>

            {/* Callout Box for Direct WhatsApp & Phone Booking */}
            <div className="bg-brand-burgundy-900 text-white p-8 rounded-3xl border border-brand-gold-500/20 space-y-4">
              <div className="flex items-center gap-3">
                <MapPin className="text-brand-gold-400 shrink-0" size={24} />
                <h3 className="text-lg font-serif font-bold">
                  Book Your Stay Near Shri Mahakaleshwar Temple
                </h3>
              </div>
              <p className="text-xs md:text-sm text-brand-cream-100/80 font-light leading-relaxed">
                Shri Mahakaleshwar Bhakta Niwas provides clean AC and Non-AC family rooms, 24-hour reception, and Bhasma Aarti timing guidance. Address: 127 Temple Road, Kot Mohalla, Jaisinghpura, Ujjain.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href={`https://wa.me/${PHONE_NUMBER_WHATSAPP}?text=Hello%2C%20I%20read%20your%20blog%20guide%20and%20want%20to%20book%20a%20room.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-brand-gold-500 text-brand-burgundy-900 px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-brand-gold-400 transition-colors inline-flex items-center justify-center gap-2"
                >
                  <MessageSquare size={16} />
                  WhatsApp Booking ({PHONE_NUMBER_DISPLAY})
                </a>
                <a
                  href={`tel:${PHONE_NUMBER_TEL}`}
                  className="border border-brand-gold-500/30 text-white px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-white/10 transition-colors inline-flex items-center justify-center gap-2"
                >
                  <Phone size={16} />
                  Call Reception
                </a>
              </div>
            </div>

            {/* Internal Links Navigation Card */}
            <div className="pt-8 border-t border-brand-gold-500/15 space-y-4">
              <h3 className="text-base font-serif font-bold text-brand-burgundy-800">
                Explore Accommodation Details & Booking Pages
              </h3>
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/rooms"
                  className="btn-premium-gold px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider"
                >
                  Explore Rooms & Amenities
                </Link>
                <Link
                  to="/rooms/price"
                  className="border border-brand-gold-500/30 text-brand-burgundy-800 hover:bg-brand-burgundy-800 hover:text-white px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  View Tariff & Price List
                </Link>
                <Link
                  to="/booking"
                  className="border border-brand-gold-500/30 text-brand-burgundy-800 hover:bg-brand-burgundy-800 hover:text-white px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  Online Room Reservation
                </Link>
                <Link
                  to="/contact"
                  className="border border-brand-gold-500/30 text-brand-burgundy-800 hover:bg-brand-burgundy-800 hover:text-white px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  Contact Reception Desk
                </Link>
              </div>
            </div>

          </article>
        </div>
      </section>
    </div>
  );
};

export default BlogPostPage;
