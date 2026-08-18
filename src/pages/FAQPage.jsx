import SEO from "../components/SEO";
import ScrollReveal from "../components/ScrollReveal";
import FAQ from "../components/FAQ";
import { MessageSquare, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const extendedFaqs = [
  {
    q: "How can I book a room at Shri Mahakaleshwar Bhakta Niwas in Ujjain?",
    a: "Booking is simple and fast. You can send a direct message on WhatsApp or call our reception desk at +91 96752 78024. Share your visit dates and guest count, and we will confirm room availability immediately.",
  },
  {
    q: "What is the room price at Bhakta Niwas Ujjain?",
    a: "Room prices range from ₹900 per night for Standard Twin rooms up to ₹2,800 per night for Large Family Suites. Deluxe AC rooms start from ₹2,000 per night. All prices are completely transparent with no hidden charges.",
  },
  {
    q: "How far is the property from Shri Mahakaleshwar Temple?",
    a: "The property is located at 127 Temple Road, Kot Mohalla, Jaisinghpura — just a 3-minute walk (200 metres) from the main Mahakaleshwar Temple entry gate.",
  },
  {
    q: "Is parking available at the Bhakta Niwas?",
    a: "Yes, we provide secure, gated, and well-lit on-site parking for personal cars, SUVs, and tempo travellers for our staying guests.",
  },
  {
    q: "What are the check-in and check-out rules?",
    a: "Standard check-in is at 12:00 PM and check-out is at 10:00 AM. Early check-in or late check-out options are subject to room availability upon arrival.",
  },
  {
    q: "Do you offer assistance for Bhasma Aarti darshan?",
    a: "Yes! Bhasma Aarti takes place every morning from 4:00 AM to 7:00 AM. Our front desk assists staying pilgrims with guidance and official darshan booking advice.",
  },
  {
    q: "Is pure vegetarian food available?",
    a: "Yes, our on-site Bhojanalaya serves fresh, hygienic, pure vegetarian (sattvic) breakfast, thali lunch, and dinner.",
  },
  {
    q: "Can large family groups or pilgrim tour groups be accommodated?",
    a: "Yes. We have dedicated Family Suites and multi-bed rooms designed specifically to host large family groups and pilgrim yatras.",
  },
  {
    q: "What is the cancellation policy for room bookings?",
    a: "Cancellations made up to 24 hours prior to check-in are completely free. Please contact reception as early as possible if your travel plan changes.",
  },
  {
    q: "How do I reach the Bhakta Niwas from Ujjain Railway Station?",
    a: "Ujjain Junction (UJN) is approximately 1.8 km away. Auto-rickshaws and e-rickshaws are available 24/7 directly to 127 Temple Road (8 to 10 minutes travel time).",
  },
];

const FAQPage = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "name": "Bhakta Niwas Ujjain FAQ",
    "url": "https://www.mahakalbhaktanivasujjain.com/faq",
    "mainEntity": extendedFaqs.map((item) => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.a
      }
    }))
  };

  return (
    <div>
      <SEO
        title="Bhakta Niwas Ujjain FAQ | Rooms, Booking, Prices & Timing"
        description="Frequently asked questions about Shri Mahakaleshwar Bhakta Niwas in Ujjain. Clear answers on room prices, booking procedure, temple distance, check-in, and parking."
        canonicalPath="/faq"
        schemaData={faqSchema}
      />

      {/* Header Banner */}
      <section className="bg-brand-burgundy-900 border-b border-brand-gold-500/10 py-16 md:py-24 text-center text-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-brand-gold-500/5 rounded-full blur-[80px]" />

        <ScrollReveal className="container mx-auto px-4 relative z-10 space-y-4 max-w-3xl">
          <p className="text-xs font-semibold tracking-widest text-brand-gold-400 uppercase">
            Pilgrim Help Desk
          </p>

          <h1 className="text-3xl md:text-5xl font-serif font-bold text-white leading-tight">
            Bhakta Niwas Ujjain FAQ
          </h1>

          <div className="w-12 h-[1px] bg-brand-gold-500 mx-auto my-4" />

          <p className="text-sm md:text-base text-brand-cream-100/70 font-light leading-relaxed max-w-2xl mx-auto">
            Everything you need to know about staying at Shri Mahakaleshwar Bhakta Niwas in Ujjain — room tariffs, booking methods, distance to temple, and stay guidelines.
          </p>
        </ScrollReveal>
      </section>

      {/* Main FAQ Component */}
      <FAQ />

      {/* Additional Help CTA */}
      <section className="py-16 bg-white border-t border-brand-gold-500/10">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-brand-burgundy-800">
            Have a question not listed here?
          </h2>
          <p className="text-sm text-brand-dark-light max-w-xl mx-auto font-light leading-relaxed">
            Our front desk is active 24 hours a day to answer all your accommodation and temple darshan queries.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2">
            <a
              href="https://wa.me/919675278024?text=Hello%2C%20I%20have%20a%20question%20about%20staying%20at%20Shri%20Mahakaleshwar%20Bhakta%20Niwas."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-premium-gold px-8 py-3.5 rounded-xl text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2"
            >
              <MessageSquare size={16} />
              Ask on WhatsApp
            </a>
            <a
              href="tel:+919675278024"
              className="border border-brand-gold-500/30 text-brand-burgundy-900 px-8 py-3.5 rounded-xl text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-brand-burgundy-900 hover:text-white transition-all"
            >
              <Phone size={16} />
              Call +91 96752 78024
            </a>
          </div>

          <div className="pt-6 border-t border-brand-gold-500/10 flex flex-wrap justify-center gap-6 text-xs text-brand-gold-600 font-semibold">
            <Link to="/rooms" className="hover:underline">View All Rooms</Link>
            <Link to="/rooms/price" className="hover:underline">Check Price List</Link>
            <Link to="/booking" className="hover:underline">Online Booking</Link>
            <Link to="/location" className="hover:underline">Map & Directions</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;
