import SEO from "../components/SEO";
import ScrollReveal from "../components/ScrollReveal";
import OurStory from "../components/OurStory";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import { Link } from "react-router-dom";
import { HeartHandshake, ShieldCheck, MapPin, Clock } from "lucide-react";

const AboutPage = () => {
  const aboutSchema = {
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
  };

  return (
    <div>
      <SEO
        title="About Shri Mahakaleshwar Bhakta Niwas Ujjain | Pilgrim Seva"
        description="Discover Shri Mahakaleshwar Bhakta Niwas in Ujjain. Established to provide clean, peaceful dharamshala accommodation near Shri Mahakaleshwar Temple."
        canonicalPath="/about"
        schemaData={aboutSchema}
      />

      {/* Header Banner */}
      <section className="bg-brand-burgundy-900 border-b border-brand-gold-500/10 py-16 md:py-24 text-center text-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-brand-gold-500/5 rounded-full blur-[80px]" />

        <ScrollReveal className="container mx-auto px-4 relative z-10 space-y-4 max-w-3xl">
          <p className="text-xs font-semibold tracking-widest text-brand-gold-400 uppercase">
            Atithi Devo Bhava
          </p>

          <h1 className="text-3xl md:text-5xl font-serif font-bold text-white leading-tight">
            About Shri Mahakaleshwar Bhakta Niwas
          </h1>

          <div className="w-12 h-[1px] bg-brand-gold-500 mx-auto my-4" />

          <p className="text-sm md:text-base text-brand-cream-100/70 font-light leading-relaxed max-w-2xl mx-auto">
            Providing clean, peaceful, and sacred hospitality for families, saints, and devotees journeying to seek the divine blessings of Lord Mahakaleshwar in Ujjain.
          </p>
        </ScrollReveal>
      </section>

      {/* Core Values Section */}
      <section className="py-16 bg-white border-b border-brand-gold-500/10">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <ScrollReveal delay={100}>
              <div className="bg-brand-cream-50 p-6 rounded-2xl border border-brand-gold-500/15 text-center space-y-3 h-full">
                <div className="w-12 h-12 rounded-full bg-white border border-brand-gold-500/20 text-brand-gold-600 mx-auto flex items-center justify-center">
                  <HeartHandshake size={22} />
                </div>
                <h3 className="font-serif font-bold text-brand-burgundy-800 text-base">
                  Sacred Seva
                </h3>
                <p className="text-xs text-brand-dark-light font-light leading-relaxed">
                  We consider hosting pilgrims in Ujjain as a holy act of devotion rather than a commercial transaction.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <div className="bg-brand-cream-50 p-6 rounded-2xl border border-brand-gold-500/15 text-center space-y-3 h-full">
                <div className="w-12 h-12 rounded-full bg-white border border-brand-gold-500/20 text-brand-gold-600 mx-auto flex items-center justify-center">
                  <ShieldCheck size={22} />
                </div>
                <h3 className="font-serif font-bold text-brand-burgundy-800 text-base">
                  Purity & Cleanliness
                </h3>
                <p className="text-xs text-brand-dark-light font-light leading-relaxed">
                  Strictly vegetarian property with daily room sanitization, attached bathrooms, and clean linens.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="bg-brand-cream-50 p-6 rounded-2xl border border-brand-gold-500/15 text-center space-y-3 h-full">
                <div className="w-12 h-12 rounded-full bg-white border border-brand-gold-500/20 text-brand-gold-600 mx-auto flex items-center justify-center">
                  <MapPin size={22} />
                </div>
                <h3 className="font-serif font-bold text-brand-burgundy-800 text-base">
                  Prime Proximity
                </h3>
                <p className="text-xs text-brand-dark-light font-light leading-relaxed">
                  Located just 200 metres (3 minutes walk) from Mahakaleshwar Jyotirlinga for stress-free darshan.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={250}>
              <div className="bg-brand-cream-50 p-6 rounded-2xl border border-brand-gold-500/15 text-center space-y-3 h-full">
                <div className="w-12 h-12 rounded-full bg-white border border-brand-gold-500/20 text-brand-gold-600 mx-auto flex items-center justify-center">
                  <Clock size={22} />
                </div>
                <h3 className="font-serif font-bold text-brand-burgundy-800 text-base">
                  24-Hour Desk
                </h3>
                <p className="text-xs text-brand-dark-light font-light leading-relaxed">
                  Reception desk open 24 hours to accommodate night train arrivals and early morning Bhasma Aarti.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Our Story Component */}
      <OurStory />

      {/* Features / Amenities */}
      <Features />

      {/* Testimonials */}
      <Testimonials />

      {/* Call to Action */}
      <section className="py-16 bg-brand-burgundy-900 text-white text-center">
        <div className="container mx-auto px-4 max-w-3xl space-y-6">
          <h2 className="text-3xl font-serif font-bold">
            Plan Your Pilgrimage to Ujjain
          </h2>
          <p className="text-sm text-brand-cream-100/70 font-light max-w-xl mx-auto leading-relaxed">
            Reserve your stay in advance to ensure comfortable accommodation close to Lord Mahakaleshwar Temple.
          </p>
          <div className="flex justify-center gap-4 pt-2">
            <Link to="/rooms" className="btn-premium-gold px-8 py-3.5 rounded-xl text-xs font-bold uppercase tracking-widest">
              View Rooms & Tariff
            </Link>
            <Link to="/booking" className="border border-brand-gold-500/40 hover:border-brand-gold-400 text-brand-gold-400 hover:text-white px-8 py-3.5 rounded-xl text-xs font-bold uppercase tracking-widest transition-all">
              Book Online
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
