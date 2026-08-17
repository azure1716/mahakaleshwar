import ScrollReveal from "./ScrollReveal";
import imgDeluxe from "../assets/room_deluxe.png"; // fallback backgrounds for destination cards

const destinations = [
  {
    title: "Shri Mahakaleshwar Jyotirlinga",
    distance: "200 Metres (3 Min Walk)",
    description: "One of the twelve sacred Jyotirlingas of Lord Shiva and the spiritual heart of Ujjain.",
  },
  {
    title: "Bhasma Aarti Darshan",
    distance: "Morning 4:00 AM – 7:00 AM",
    description: "Experience the world-famous Bhasma Aarti, a unique ritual performed before sunrise. ₹250 Per Person ",
  },
  {
    title: "Harsiddhi Mata Temple",
    distance: "1.2 Kilometres",
    description: "Ancient Shakti Peetha known for its divine atmosphere and iconic deep stambhas.",
  },
  {
    title: "Ram Ghat (Shipra River)",
    distance: "1.5 Kilometres",
    description: "Sacred bathing ghat on the banks of River Shipra where devotees gather for prayers and rituals.",
  },
  {
    title: "Kal Bhairav Temple",
    distance: "4 Kilometres",
    description:"One of Ujjain's most revered temples dedicated to Lord Kal Bhairav.",
  },
  {
    title: "Sandipani Ashram",
    distance: "3 Kilometres",
    description:"Historic ashram where Lord Krishna, Balram and Sudama are believed to have received education.",
  }
];

const Destinations = () => {
  return (
    <section id="destinations" className="sacred-pattern-bg py-20 bg-brand-cream-50 scroll-mt-20">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">
        <ScrollReveal className="text-center space-y-4 max-w-2xl mx-auto mb-12 md:mb-16">
          <p className="text-xs font-semibold tracking-widest text-brand-gold-600 uppercase">
            Local Sights
          </p>
          <h2 className="premium-heading-shine text-3xl md:text-5xl font-serif font-bold text-brand-burgundy-800 leading-tight">
            Explore Sacred Ujjain
          </h2>
          <p className="text-sm md:text-base text-brand-dark-light font-light leading-relaxed">
            Discover the spiritual landmarks surrounding Shri Mahakaleshwar Bhakta Niwas and experience the divine heritage of Ujjain.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {destinations.map((dest, idx) => (
            <ScrollReveal key={idx} delay={idx * 150}>
              <div className="bg-white p-8 rounded-3xl border border-brand-gold-500/10 hover:border-brand-gold-500/30 transition-all duration-300 flex flex-col justify-between h-full premium-card-border group hover:-translate-y-1">
                <div className="space-y-4">
                  <div className="flex flex-wrap justify-between items-center gap-2">
                    <h3 className="text-xl md:text-2xl font-serif font-bold text-brand-burgundy-800 leading-tight">
                      {dest.title}
                    </h3>
                    <span className="bg-brand-cream-200 text-brand-gold-600 text-[10px] font-bold tracking-wider uppercase px-3 py-1.5 rounded-full border border-brand-gold-500/20">
                      {dest.distance}
                    </span>
                  </div>
                  <p className="text-xs md:text-sm text-brand-dark-light font-light leading-relaxed">
                    {dest.description}
                  </p>
                </div>
                
                {/* Decorative border line draw on card hover */}
                <div className="w-0 h-[2px] bg-brand-gold-500 group-hover:w-16 transition-all duration-500 mt-6" />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;
