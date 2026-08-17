import { Phone, MessageSquare, ArrowDown, Bell } from "lucide-react";
import heroBg from "../assets/hero_temple_bg.webp";

const Hero = () => {
  const scrollToRooms = () => {
    const el = document.getElementById("rooms-section");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const playTempleBell = () => {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;

    const audioContext = new AudioContext();
    const gain = audioContext.createGain();
    gain.gain.setValueAtTime(0.0001, audioContext.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.18, audioContext.currentTime + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, audioContext.currentTime + 2.2);
    gain.connect(audioContext.destination);

    [540, 812, 1080].forEach((frequency, index) => {
      const oscillator = audioContext.createOscillator();
      const toneGain = audioContext.createGain();
      oscillator.type = "sine";
      oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
      oscillator.frequency.exponentialRampToValueAtTime(
        frequency * 0.985,
        audioContext.currentTime + 1.8
      );
      toneGain.gain.setValueAtTime(index === 0 ? 0.9 : 0.35, audioContext.currentTime);
      toneGain.gain.exponentialRampToValueAtTime(0.0001, audioContext.currentTime + 2.1);
      oscillator.connect(toneGain);
      toneGain.connect(gain);
      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 2.25);
    });
  };

  return (
    <section className="hero-premium-shell sacred-pattern-bg om-watermark relative min-h-[calc(100svh-64px)] md:min-h-[92vh] flex items-center justify-center overflow-hidden bg-brand-burgundy-900 text-white select-none">
      {/* Background Image Container with Slow Zoom */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={heroBg}
          alt="Shri Mahakaleshwar Temple Ujjain background"
          loading="eager"
          decoding="async"
          fetchPriority="high"
          className="w-full h-full object-cover object-center opacity-30 pointer-events-none animate-slow-zoom"
        />
        {/* Vignette Overlay matching dark theme */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-burgundy-900 via-brand-burgundy-900/50 to-brand-burgundy-900/75" />
      </div>

      {/* Hero Content */}
      <div className="container mx-auto w-full px-4 sm:px-6 md:px-8 py-14 sm:py-20 md:py-24 text-center relative z-10 space-y-6 md:space-y-8 max-w-4xl">
        <button
          type="button"
          onClick={playTempleBell}
          className="temple-bell-button absolute top-4 right-4 md:top-14 md:right-0 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center text-brand-gold-500 transition-colors duration-300"
          aria-label="Play temple bell sound"
          title="Temple bell"
        >
          <Bell className="h-8 w-8 md:h-11 md:w-11" strokeWidth={1.45} />
        </button>
        
        {/* Figma Header Text */}
        <div className="mx-auto flex max-w-[92vw] items-center justify-center gap-3">
          <div className="hidden sm:block w-12 h-[1px] bg-brand-gold-500/30" />
          <span className="text-[9px] sm:text-[10px] font-bold tracking-wider md:tracking-widest text-brand-gold-500 uppercase font-sans leading-relaxed">
             Jai Mahakal · Ujjain, Madhya Pradesh · Est. 1908
          </span>
          <div className="hidden sm:block w-12 h-[1px] bg-brand-gold-500/30" />
        </div>

        {/* Heading & Subtitle */}
        <div className="space-y-4 md:space-y-6">
          <h1 className="premium-heading-shine text-[clamp(2.1rem,10vw,3.8rem)] md:text-[clamp(4.25rem,6vw,5.75rem)] font-serif font-bold text-white leading-[1.08] tracking-wide">
            Shri Mahakaleshwar
            <span
              style={{
                display: "block",
                fontSize: "clamp(2.4rem, 6.5vw, 5.75rem)",
                letterSpacing: "0",
                fontStyle: "italic",
                backgroundImage:
                  "linear-gradient(90deg, rgb(200, 146, 42) 0%, rgb(242, 226, 176) 40%, rgb(232, 184, 75) 70%, rgb(200, 146, 42) 100%)",
                backgroundSize: "300%",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
                animation: "5s linear 0s infinite normal none running shimmer-gold",
              }}
            >
              Bhakta Niwas
            </span>
          </h1>
          <p className="text-xs sm:text-sm md:text-lg text-brand-cream-100/70 max-w-2xl mx-auto font-light leading-relaxed">
            Premier dharamshala in Ujjain near Mahakal temple for family room booking, real-time Bhasma Aarti darshan guidance, pure sattvic stay, and temple travel assistance.
          </p>
        </div>

        {/* Buttons */}
        <div className="pt-3 md:pt-6 flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-3 md:gap-4">
          <a
            href="https://wa.me/919675278024?text=Hello%2C%20I%20would%20like%20to%20book%20a%20room%20at%20Shri%20Mahakaleshwar%20Bhakta%20Niwas."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-brand-gold-500 text-brand-burgundy-900 hover:bg-brand-gold-400 hover:scale-[1.02] active:scale-95 px-6 md:px-8 py-3.5 md:py-4 rounded-sm flex items-center justify-center gap-3 text-xs font-bold uppercase tracking-wider md:tracking-widest transition-all duration-300 shadow-lg font-sans"
          >
            <MessageSquare size={16} className="fill-brand-burgundy-900" />
            Book on WhatsApp
          </a>
          <a
            href="tel:+919675278024"
            className="w-full sm:w-auto border border-brand-gold-500/30 text-brand-gold-500 hover:text-white hover:border-brand-gold-500 px-6 md:px-8 py-3.5 md:py-4 rounded-sm flex items-center justify-center gap-3 text-xs font-bold uppercase tracking-wider md:tracking-widest transition-all duration-300 font-sans"
          >
            <Phone size={16} />
            +91 96752 78024
          </a>
        </div>
      </div>

      {/* Figma Bottom details & Indicators */}
      
      {/* Scroll indicator (Bottom Left) */}
      <button
        onClick={scrollToRooms}
        className="absolute bottom-8 left-8 hidden md:flex flex-col items-center space-y-2 text-brand-gold-500/70 hover:text-brand-gold-500 transition-colors duration-300 group cursor-pointer"
      >
        <span className="text-[9px] font-bold tracking-widest uppercase origin-bottom [writing-mode:vertical-lr]">
          SCROLL
        </span>
        <ArrowDown size={14} className="group-hover:translate-y-1 transition-transform duration-300 animate-bounce" />
      </button>

      {/* Mahakaleshwar details (Bottom Right) */}
      <div className="absolute bottom-8 right-8 hidden md:block text-right space-y-0.5">
        <p className="text-[10px] font-bold text-white tracking-widest uppercase">
          Mahakaleshwar Temple
        </p>
        <p className="text-[9px] font-bold text-brand-gold-500 tracking-wider uppercase">
          200M · UJJAIN, MADHYA PRADESH
        </p>
      </div>

      {/* Decorative Golden Bottom Glow Line */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-gold-500/30 to-transparent" />
    </section>
  );
};

export default Hero;
