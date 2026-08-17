import SEO from "../components/SEO";
import Rooms from "../components/Rooms";
import FAQ from "../components/FAQ";
import ScrollReveal from "../components/ScrollReveal";

const RoomsPage = () => {
  return (
    <div>
      <SEO
        title="Ujjain Dharamshala List with Price | Bhakta Niwas Rooms"
        description="View Ujjain dharamshala room prices near Mahakal temple. Standard Twin from ₹900/night, Deluxe AC & Family Suites with 24hr hot water."
        canonicalPath="/rooms"
      />
      {/* Banner Header */}
      <div className="bg-brand-burgundy-900 border-b border-brand-gold-500/10 py-16 md:py-24 text-center text-white relative overflow-hidden">
        {/* Decorative circle glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-brand-gold-500/5 rounded-full blur-[80px]" />
        
        <ScrollReveal className="container mx-auto px-4 relative z-10 space-y-4 max-w-3xl">
          <p className="text-xs font-semibold tracking-widest text-brand-gold-400 uppercase">
            Rooms & Tariff
          </p>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight">
            Ujjain Dharamshala Rooms & Tariff
          </h1>
          <div className="w-12 h-[1px] bg-brand-gold-500 mx-auto my-4" />
          <p className="text-sm md:text-base text-brand-cream-100/70 font-light leading-relaxed max-w-2xl mx-auto">
            Explore clean dharamshala rooms in Ujjain near Mahakal temple with transparent prices starting from ₹900/night. All rooms feature attached bathrooms, 24-hour solar hot water, and daily housekeeping.
          </p>
        </ScrollReveal>
      </div>

      <Rooms />
      <FAQ />
    </div>
  );
};

export default RoomsPage;