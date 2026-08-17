import ScrollReveal from "./ScrollReveal";
import imgStandard from "../assets/room_standard.png"; // reusing asset for visual rich framing

const OurStory = () => {
  const imgSrc = imgStandard;

  return (
    <section id="our-story" className="sacred-pattern-bg om-watermark py-20 bg-white border-b border-brand-gold-500/10 scroll-mt-20">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Image/Visual Column with Premium Framing */}
          <div className="lg:col-span-6 relative">
            <ScrollReveal className="relative z-10">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-brand-gold-500/10 bg-brand-burgundy-900">
                <img 
                  src={imgSrc} 
                  alt="Serving pilgrims at Shri Mahakaleshwar Bhakta Niwas Dharamshala in Ujjain" 
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover select-none pointer-events-none hover:scale-105 transition-all duration-700 opacity-100 scale-100"
                />
              </div>
              
              {/* Premium overlapping badge */}
              <div className="absolute -bottom-6 -right-6 bg-brand-burgundy-900 border border-brand-gold-500/30 text-white p-6 rounded-2xl shadow-xl hidden sm:block">
                <p className="font-serif text-3xl font-bold text-brand-gold-500">1908</p>
                <p className="text-[10px] font-bold tracking-widest text-brand-cream-100 uppercase mt-1">
                  Established Year
                </p>
              </div>
            </ScrollReveal>
            
            {/* Background decorative gold frame */}
            <div className="absolute -top-6 -left-6 w-1/2 h-1/2 border-t-2 border-l-2 border-brand-gold-500/30 rounded-tl-3xl pointer-events-none z-0" />
            <div className="absolute -bottom-6 -left-6 w-1/2 h-1/2 border-b-2 border-l-2 border-brand-gold-500/30 rounded-bl-3xl pointer-events-none z-0" />
          </div>

          {/* Text Content Column */}
          <div className="lg:col-span-6 space-y-6">
            <ScrollReveal className="space-y-4">
              <span className="text-xs font-semibold tracking-widest text-brand-gold-600 uppercase block">
                Our Story
              </span>
              <h2 className="premium-heading-shine text-3xl md:text-5xl font-serif font-bold text-brand-burgundy-800 leading-tight">
                Generations of dedicated pilgrim seva
              </h2>
              <div className="w-12 h-[2px] bg-brand-gold-500" />
            </ScrollReveal>

            <ScrollReveal delay={150} className="space-y-4 text-brand-dark-light text-sm md:text-base font-light leading-relaxed">
              <p>
                Established to serve devotees visiting Ujjain, Shri Mahakaleshwar Bhakta Niwas Dharamshala was founded with a singular, sacred vision: to provide a pure, peaceful, and clean haven for pilgrims journeying to seek the divine blessings of Lord Mahakaleshwar Jyotirlinga.
              </p>
              <p>
                For generations, we have opened our doors to families, saints, and devotees from every corner of India and the world. We believe that hospitality in the holy city of Ujjain is not a business, but a holy act of devotion (seva).
              </p>
              
              {/* Elegant quote card */}
              <div className="border-l-2 border-brand-gold-500 pl-4 py-1 mt-6">
                <p className="italic text-brand-burgundy-800 font-serif font-medium text-base">
                  "Atithi Devo Bhava — the guest is a form of the divine. We welcome you to find rest and peace before your darshan."
                </p>
                <p className="text-xs font-bold text-brand-gold-600 tracking-wider uppercase mt-2">
                  — The Sansthan Management
                </p>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
};

export default OurStory;
