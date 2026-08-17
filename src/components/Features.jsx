import { MapPin, Utensils, Clock, Droplets, ParkingCircle, Lock } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const features = [
  {
    icon: MapPin,
    title: "Walk to Darshan",
    description: "Three minutes on foot to the temple gate — no autos, no waiting.",
  },
  {
    icon: Utensils,
    title: "Pure Veg Bhojanalaya",
    description: "Sattvic breakfast, thali lunch, and dinner served fresh each day.",
  },
  {
    icon: Clock,
    title: "24-Hour Reception",
    description: "Someone is always at the desk, whatever hour your train arrives.",
  },
  {
    icon: Droplets,
    title: "Hot Water Always",
    description: "Solar-backed geysers in every attached bathroom, round the clock.",
  },
  {
    icon: ParkingCircle,
    title: "Secure Parking",
    description: "Gated, lit parking for cars and tempo travellers inside the premises.",
  },
  {
    icon: Lock,
    title: "Locker & Luggage",
    description: "Free luggage room and lockers so you can travel light to the temple.",
  },
  {
    icon: MapPin,
    title: "Bhasm Aarti Darshan",
    description: "Official morning Bhasm Aarti guidance available.",
    timing: "4:00 AM – 7:00 AM",
    price: "₹250 Per Person",
  },
];

const Features = () => {
  return (
    <section className="sacred-pattern-bg om-watermark py-20 bg-white border-y  border-brand-gold-500/10">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <ScrollReveal className="text-center space-y-4 max-w-2xl mx-auto mb-12 md:mb-16">
          <p className="text-xs font-semibold tracking-widest text-brand-gold-600 uppercase">
            Amenities
          </p>
          <h2 className="premium-heading-shine text-3xl md:text-5xl font-serif font-bold text-brand-burgundy-800 leading-tight">
            Designed for your spiritual journey
          </h2>
          <p className="text-sm md:text-base text-brand-dark-light font-light leading-relaxed">
            We provide all essential comforts to ensure your pilgrimage is peaceful, clean, and worry-free.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, idx) => (
            <ScrollReveal key={idx} delay={idx * 100}>
              <div className="bg-brand-cream-50 p-6 md:p-8 rounded-2xl border border-brand-gold-500/10 hover:border-brand-gold-500/30 transition-all duration-300 flex items-start gap-5 hover:-translate-y-1 premium-card-border group">
                <div className="bg-white p-3 rounded-xl border border-brand-gold-500/10 text-brand-gold-500 group-hover:bg-brand-gold-500 group-hover:text-white transition-all duration-300">
                  <item.icon size={22} className="stroke-[1.5]" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-serif font-bold text-brand-burgundy-800">
                    {item.title}
                  </h3>
                  <p className="text-xs md:text-sm text-brand-dark-light font-light leading-relaxed">
                    {item.description}
                  </p>
                  {item.price && (
                    <p className="text-xs md:text-sm text-brand-dark-light font-semibold tracking-wide mt-3">
                      {item.timing} · {item.price}
                    </p>
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
