import SEO from "../components/SEO";
import Rooms from "../components/Rooms";
import FAQ from "../components/FAQ";
import ScrollReveal from "../components/ScrollReveal";
import { Link } from "react-router-dom";

const RoomsPage = () => {
  const roomsSchema = {
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
  };

  return (
    <div>
      <SEO
        title="Bhakta Niwas Ujjain Rooms | Room Types & Amenities"
        description="Explore rooms at Shri Mahakaleshwar Bhakta Niwas Ujjain near Mahakal temple. Standard Twin from ₹900/night, Deluxe AC & Family Suites with attached bath & 24hr hot water."
        canonicalPath="/rooms"
        schemaData={roomsSchema}
      />
      {/* Banner Header */}
      <div className="bg-brand-burgundy-900 border-b border-brand-gold-500/10 py-16 md:py-24 text-center text-white relative overflow-hidden">
        {/* Decorative circle glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-brand-gold-500/5 rounded-full blur-[80px]" />
        
        <ScrollReveal className="container mx-auto px-4 relative z-10 space-y-4 max-w-3xl">
          <p className="text-xs font-semibold tracking-widest text-brand-gold-400 uppercase">
            Comfortable Pilgrim Stay
          </p>
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-white leading-tight">
            Bhakta Niwas Ujjain Rooms & Amenities
          </h1>
          <div className="w-12 h-[1px] bg-brand-gold-500 mx-auto my-4" />
          <p className="text-sm md:text-base text-brand-cream-100/70 font-light leading-relaxed max-w-2xl mx-auto">
            Explore clean accommodation options at Shri Mahakaleshwar Bhakta Niwas in Ujjain near Mahakal temple (200m). All rooms feature attached bathrooms, 24-hour solar hot water, and daily housekeeping.
          </p>
          <div className="pt-2">
            <Link to="/rooms/price" className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-gold-400 hover:text-white underline">
              View Detailed Price & Tariff Breakdown →
            </Link>
          </div>
        </ScrollReveal>
      </div>

      <Rooms />
      <FAQ />
    </div>
  );
};

export default RoomsPage;