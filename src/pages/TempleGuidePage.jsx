import SEO from "../components/SEO";
import ScrollReveal from "../components/ScrollReveal";
import Destinations from "../components/Destinations";
import FAQ from "../components/FAQ";
import { Link } from "react-router-dom";
import { Sparkles, CheckCircle2, ExternalLink } from "lucide-react";

const guideTopics = [
  {
    title: "1. Mahakaleshwar Temple Timings & Aarti Schedule",
    content: "Shri Mahakaleshwar Temple is unique as it features the South-facing (Dakshinamurti) Shivlinga. The temple opens early morning around 3:00 AM for Bhasma Aarti preparation. General darshan runs continuously through the day until Night Shayan Aarti at 10:30 PM.",
    bulletPoints: [
      "Bhasma Aarti: 4:00 AM – 7:00 AM (Early morning online/offline permission required)",
      "Naivedya Aarti: 10:30 AM – 11:30 AM",
      "Sandhya Aarti: 6:30 PM – 7:30 PM",
      "Shayan Aarti: 10:00 PM – 10:30 PM",
    ]
  },
  {
    title: "2. Bhasma Aarti Guidelines & Booking Advice",
    content: "Bhasma Aarti is the most coveted ritual at Mahakaleshwar Temple. Devotees seeking Bhasma Aarti permission should register online via the official temple portal or inquire at the official temple booking counter. Staying close to the temple at Shri Mahakaleshwar Bhakta Niwas (200m distance) allows you to comfortably walk to the reporting gate at 3:15 AM without transportation delays.",
    bulletPoints: [
      "Traditional attire compulsory: Dhoti-Kurta for men, Saree/Salwar for women.",
      "Reporting time: 3:00 AM to 3:30 AM at the designated gate.",
      "Our reception provides guidance to staying pilgrims regarding booking procedures.",
    ]
  },
  {
    title: "3. Where to Stay in Ujjain: Bhakta Niwas vs Hotels",
    content: "Choosing accommodation near Shri Mahakaleshwar Temple saves valuable time during peak rush and early morning rituals. Staying at a dedicated Bhakta Niwas provides a peaceful, sattvic atmosphere with family-friendly amenities, 24-hour hot water, and instant walking access to the temple complex.",
    bulletPoints: [
      "3-minute walk (200m) to temple entrance.",
      "Quiet, pure vegetarian environment.",
      "On-site parking for private vehicles.",
    ]
  },
  {
    title: "4. Major Pilgrimage Sites to Visit in Ujjain",
    content: "Ujjain is one of the seven sacred Mokshadaayini cities in Hinduism. In addition to Mahakaleshwar Temple, visitors should plan to visit:",
    bulletPoints: [
      "Harsiddhi Mata Temple (1.2 km): One of the 51 Shakti Peethas.",
      "Ram Ghat (1.5 km): Sacred bath on River Shipra, site of Kumbh Mela.",
      "Kal Bhairav Temple (4 km): Ancient temple dedicated to Lord Kal Bhairav.",
      "Sandipani Ashram (3 km): Where Lord Krishna studied under Sage Sandipani.",
    ]
  }
];

const TempleGuidePage = () => {
  const guideSchema = {
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
  };

  return (
    <div>
      <SEO
        title="Where to Stay in Ujjain Near Mahakaleshwar Temple | Darshan & Stay Guide"
        description="Comprehensive guide for Mahakaleshwar Temple Ujjain visitors. Bhasma Aarti timings, dress code, accommodation tips near Mahakal temple, and local itinerary."
        canonicalPath="/mahakaleshwar-temple-guide"
        schemaData={guideSchema}
      />

      {/* Header Banner */}
      <section className="bg-brand-burgundy-900 border-b border-brand-gold-500/10 py-16 md:py-24 text-center text-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-brand-gold-500/5 rounded-full blur-[80px]" />

        <ScrollReveal className="container mx-auto px-4 relative z-10 space-y-4 max-w-3xl">
          <p className="text-xs font-semibold tracking-widest text-brand-gold-400 uppercase">
            Pilgrim Travel & Stay Guide
          </p>

          <h1 className="text-3xl md:text-5xl font-serif font-bold text-white leading-tight">
            Mahakaleshwar Temple Visit & Ujjain Stay Guide
          </h1>

          <div className="w-12 h-[1px] bg-brand-gold-500 mx-auto my-4" />

          <p className="text-sm md:text-base text-brand-cream-100/70 font-light leading-relaxed max-w-2xl mx-auto">
            Essential information for devotees planning a visit to Shri Mahakaleshwar Jyotirlinga — Bhasma Aarti schedule, dress code, temple routes, and accommodation tips.
          </p>
        </ScrollReveal>
      </section>

      {/* Guide Topics Section */}
      <section className="py-16 md:py-20 bg-brand-cream-50">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl space-y-12">
          
          {guideTopics.map((topic, idx) => (
            <ScrollReveal key={topic.title} delay={idx * 100}>
              <div className="bg-white p-8 rounded-3xl border border-brand-gold-500/15 shadow-sm space-y-4 premium-card-border">
                <h2 className="text-2xl font-serif font-bold text-brand-burgundy-800">
                  {topic.title}
                </h2>
                <p className="text-xs md:text-sm text-brand-dark-light font-light leading-relaxed">
                  {topic.content}
                </p>
                <div className="bg-brand-cream-50 p-5 rounded-2xl border border-brand-gold-500/10 space-y-2">
                  {topic.bulletPoints.map((pt) => (
                    <div key={pt} className="flex items-start gap-2.5 text-xs text-brand-dark font-medium">
                      <CheckCircle2 size={16} className="text-brand-gold-500 shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}

          {/* Official Website Gap Note & Link */}
          <ScrollReveal className="bg-brand-burgundy-900 text-white p-8 rounded-3xl border border-brand-gold-500/20 space-y-4">
            <div className="flex items-center gap-3">
              <Sparkles className="text-brand-gold-400 shrink-0" size={24} />
              <h3 className="text-lg font-serif font-bold">
                Official Temple Services & Booking Link
              </h3>
            </div>
            <p className="text-xs md:text-sm text-brand-cream-100/80 font-light leading-relaxed">
              For official temple Bhasma Aarti online passes, VIP Sheeta Darshan tickets, and temple committee announcements, please visit the official Shri Mahakaleshwar Temple Management Committee portal:
            </p>
            <a
              href="https://shrimahakaleshwar.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand-gold-500 text-brand-burgundy-900 px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-brand-gold-400 transition-colors"
            >
              Official Temple Website <ExternalLink size={14} />
            </a>
          </ScrollReveal>

          {/* Internal Links Card */}
          <div className="bg-white p-8 rounded-3xl border border-brand-gold-500/20 text-center space-y-6">
            <h3 className="text-xl font-serif font-bold text-brand-burgundy-800">
              Need Accommodation Near Mahakal Temple?
            </h3>
            <p className="text-xs md:text-sm text-brand-dark-light font-light max-w-lg mx-auto leading-relaxed">
              Shri Mahakaleshwar Bhakta Niwas offers clean AC & non-AC rooms just 200 metres from the temple gate.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/rooms" className="btn-premium-gold px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider">
                Explore Rooms
              </Link>
              <Link to="/rooms/price" className="border border-brand-gold-500/30 text-brand-burgundy-800 hover:bg-brand-burgundy-800 hover:text-white px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors">
                View Price Tariff
              </Link>
              <Link to="/booking" className="border border-brand-gold-500/30 text-brand-burgundy-800 hover:bg-brand-burgundy-800 hover:text-white px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors">
                Book Online
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* Destinations Component */}
      <Destinations />

      <FAQ />
    </div>
  );
};

export default TempleGuidePage;
