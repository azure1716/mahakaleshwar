import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { MessageSquare, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (to) => {
    setIsOpen(false);
    if (to.startsWith("/#")) {
      const targetId = to.split("#")[1];
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          const el = document.getElementById(targetId);
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else {
        const el = document.getElementById(targetId);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const navItems = [
    { to: "/rooms", label: "Rooms", isHash: false },
    { to: "/rooms/price", label: "Prices", isHash: false },
    { to: "/booking", label: "Booking", isHash: false },
    { to: "/location", label: "Location", isHash: false },
    { to: "/faq", label: "FAQ", isHash: false },
    { to: "/about", label: "About", isHash: false },
    { to: "/mahakaleshwar-temple-guide", label: "Darshan Guide", isHash: false },
    { to: "/blog", label: "Blog", isHash: false },
    { to: "/contact", label: "Contact", isHash: false },
  ];

  return (
    <header className="sticky top-0 z-50 glass-dark border-b border-brand-gold-500/10">
      <div className="container mx-auto px-4 md:px-6 py-3 md:py-4 flex items-center justify-between gap-3">
        {/* Logo */}
        <Link to="/" className="flex min-w-0 flex-1 items-center gap-2 md:gap-3 group">
          {/* Gold OM Symbol */}
          <div className="shrink-0 text-brand-gold-500 text-2xl md:text-3xl font-serif leading-none filter drop-shadow-[0_0_8px_rgba(194,159,104,0.4)] group-hover:scale-110 transition-transform duration-300">
            ॐ
          </div>
          <div className="flex min-w-0 flex-col">
            <span className="text-xs sm:text-sm md:text-lg font-serif font-bold text-white tracking-wide leading-tight uppercase md:normal-case break-words">
              Shri Mahakaleshwar Bhakta Niwas
            </span>
            <span className="text-[8px] sm:text-[9px] md:text-[10px] font-sans font-light text-brand-gold-400 tracking-wider mt-0.5 leading-tight uppercase break-words">
              Accommodation Near Mahakaleshwar Temple, Ujjain
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-5 xl:space-x-6">
          {navItems.map((item) => (
            item.isHash ? (
              <button
                key={item.to}
                onClick={() => handleNavClick(item.to)}
                className="text-[11px] xl:text-xs font-semibold tracking-wider uppercase text-brand-cream-100/80 hover:text-brand-gold-400 transition-all duration-300 cursor-pointer whitespace-nowrap"
              >
                {item.label}
              </button>
            ) : (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `text-[11px] xl:text-xs font-semibold tracking-wider uppercase transition-all duration-300 hover:text-brand-gold-400 whitespace-nowrap ${
                    isActive ? "text-brand-gold-400" : "text-brand-cream-100/80"
                  }`
                }
              >
                {item.label}
              </NavLink>
            )
          ))}
          <a
            href="https://wa.me/919675278024?text=Hello%2C%20I%20would%20like%20to%20book%20a%20room%20at%20Shri%20Mahakaleshwar%20Bhakta%20Niwas."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-gold-500 text-brand-burgundy-900 px-4 py-2 rounded-sm flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider hover:bg-brand-gold-400 hover:scale-[1.02] active:scale-95 transition-all duration-300 shadow-md font-sans whitespace-nowrap"
          >
            <MessageSquare size={13} className="fill-brand-burgundy-900" />
            WhatsApp Booking
          </a>
        </nav>

        {/* Mobile / Tablet Menu Button */}
        <button
          className="lg:hidden shrink-0 text-brand-gold-500 hover:text-brand-gold-400 transition p-1"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="lg:hidden bg-brand-burgundy-900 border-t border-brand-gold-500/10 py-5 px-6 flex flex-col space-y-4 max-h-[80vh] overflow-y-auto">
          {navItems.map((item) => (
            item.isHash ? (
              <button
                key={item.to}
                onClick={() => handleNavClick(item.to)}
                className="text-left text-xs font-semibold tracking-widest uppercase text-brand-cream-100/80 hover:text-brand-gold-400 py-1 cursor-pointer"
              >
                {item.label}
              </button>
            ) : (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `text-left text-xs font-semibold tracking-widest uppercase py-1 ${
                    isActive ? "text-brand-gold-400" : "text-brand-cream-100/80"
                  }`
                }
              >
                {item.label}
              </NavLink>
            )
          ))}
          <a
            href="https://wa.me/919675278024?text=Hello%2C%20I%20would%20like%20to%20book%20a%20room%20at%20Shri%20Mahakaleshwar%20Bhakta%20Niwas."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-gold-500 text-brand-burgundy-900 w-full py-3 rounded-sm text-center flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider hover:bg-brand-gold-400 transition-all duration-300 font-sans mt-2"
          >
            <MessageSquare size={14} className="fill-brand-burgundy-900" />
            WhatsApp Booking
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;

