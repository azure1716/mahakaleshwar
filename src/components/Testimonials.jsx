import { Star } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const testimonials = [
  {
    quote:
      "Spotless rooms and genuinely warm people. We reached at 2 AM and were welcomed with hot water and tea. Rare hospitality.",
    name: "S. Krishnan",
    location: "Chennai",
  },
  {
    quote:
      "Booked the family suite for eight of us over WhatsApp in five minutes. Everything was exactly as promised, no hidden charges.",
    name: "Meera Joshi",
    location: "Pune",
  },
  {
    quote:
      "The location is unbeatable — we walked to the aarti every morning. Simple, clean and peaceful, which is all one needs here.",
    name: "Rakesh Patel",
    location: "Ahmedabad",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-brand-cream-100">
      <div className="container mx-auto px-4 md:px-8">
        <ScrollReveal className="text-center space-y-4 max-w-2xl mx-auto mb-12 md:mb-16">
          <p className="text-xs font-semibold tracking-widest text-brand-gold-600 uppercase">
            Reviews
          </p>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-brand-burgundy-800 leading-tight">
            Trusted by families, year after year
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <ScrollReveal key={idx} delay={idx * 150}>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-brand-gold-500/10 hover:shadow-md transition-all duration-300 flex flex-col justify-between h-full premium-card-border relative">
                {/* Gold Quote Mark Icon */}
                <span className="text-5xl font-serif text-brand-gold-500/20 absolute top-4 right-6 pointer-events-none select-none">
                  ”
                </span>
                
                <div className="space-y-4">
                  {/* Stars */}
                  <div className="flex items-center gap-1 text-brand-gold-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" className="stroke-none" />
                    ))}
                  </div>
                  <p className="text-brand-dark italic text-sm md:text-base font-light leading-relaxed">
                    “{t.quote}”
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-brand-gold-500/10">
                  <p className="font-serif font-bold text-brand-burgundy-800">
                    {t.name}
                  </p>
                  <p className="text-xs text-brand-dark-light tracking-wide mt-0.5">
                    {t.location}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;