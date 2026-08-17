import { useEffect, useState } from "react";

const SplashLoader = () => {
  const [show, setShow] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Check if it's already shown in this session
    const hasLoaded = sessionStorage.getItem("splash-loaded");
    if (hasLoaded) {
      setShow(false);
      return;
    }

    const fadeTimeout = setTimeout(() => {
      setFadeOut(true);
    }, 2000);

    const removeTimeout = setTimeout(() => {
      setShow(false);
      sessionStorage.setItem("splash-loaded", "true");
    }, 2700);

    return () => {
      clearTimeout(fadeTimeout);
      clearTimeout(removeTimeout);
    };
  }, []);

  if (!show) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-brand-burgundy-900 text-white transition-opacity duration-700 ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="text-center space-y-6 px-4">
        {/* Shloka */}
        <div className="text-brand-gold-500 text-xl md:text-2xl font-serif tracking-widest animate-pulse-glow">
          ॥ ॐ नमः शिवाय ॥
        </div>

        {/* Brand Logo */}
        <div className="space-y-2">
          <h1 className="text-2xl md:text-4xl font-serif font-bold tracking-wider text-white uppercase">
            Shri Mahakaleshwar
          </h1>
          <h2 className="text-xl md:text-3xl font-serif font-light tracking-widest text-brand-gold-500 uppercase">
            Bhakta Niwas
          </h2>
        </div>

        {/* Elegant Gold Divider */}
        <div className="w-16 h-[1.5px] bg-gradient-to-r from-transparent via-brand-gold-500 to-transparent mx-auto mt-4" />

        <p className="text-brand-gold-300/60 text-xs uppercase tracking-widest font-sans mt-2">
          A Calm Place to Rest, Before Darshan
        </p>
      </div>
    </div>
  );
};

export default SplashLoader;
