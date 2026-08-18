import { Phone, Mail, MapPin, Clock, MessageSquare, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-brand-burgundy-900 text-white border-t border-brand-gold-500/20 relative z-20">
      {/* Decorative top gold gradient line */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-brand-gold-500 to-transparent w-full" />

      <div className="container mx-auto px-4 md:px-8 py-16 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
        {/* Brand Column */}
        <div className="md:col-span-5 space-y-6">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 flex items-center justify-center bg-brand-burgundy-800 rounded-full border border-brand-gold-500/30 group-hover:border-brand-gold-400 transition-all duration-300">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="w-5 h-5 text-brand-gold-500 group-hover:rotate-45 transition-transform duration-700"
                strokeWidth="1.5"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2v20M2 12h20M7 7l10 10M7 17L17 7" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-serif font-bold text-white tracking-wider leading-none">
                Shri Mahakaleshwar Bhakta Niwas
              </span>
              <span className="text-xs font-serif font-light text-brand-gold-500 tracking-widest mt-0.5 leading-none">
                Bhakta Niwas Ujjain
              </span>
            </div>
          </Link>
          <p className="text-brand-cream-100/60 text-xs md:text-sm font-light leading-relaxed max-w-sm">
            Shri Mahakaleshwar Bhakta Niwas — peaceful accommodation in Ujjain near Shri Mahakaleshwar Temple, offering clean AC & non-AC rooms, 24-hour hot water, and darshan assistance.
          </p>
          <div className="flex items-start gap-3 text-brand-cream-100/70 text-xs md:text-sm">
            <MapPin size={20} className="text-brand-gold-500 shrink-0 mt-0.5" />
            <div className="text-brand-cream-100/70 text-xs md:text-sm leading-relaxed max-w-md">
              <p className="font-semibold text-white mb-1">Complete Address</p>
              <address className="not-italic space-y-0.5">
                <p>127, Temple RD</p>
                <p>Near Shri Mahakaleshwar Jyotirlinga</p>
                <p>Kot Mohalla, Jaisinghpura</p>
                <p>Ujjain, Madhya Pradesh 456006</p>
              </address>
              <a
                href="https://www.google.com/maps/search/?api=1&query=127%2C%20Temple%20RD%2C%20near%20Shri%20Mahakaleshwar%20Jyotirlinga%2C%20Kot%20Mohalla%2C%20Jaisinghpura%2C%20Ujjain%2C%20Madhya%20Pradesh%20456006"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center justify-center gap-2 rounded-full border border-orange-500 px-5 py-2.5 text-xs md:text-sm font-bold text-orange-500 transition-colors duration-300 hover:bg-orange-500 hover:text-white"
              >
                <MapPin size={16} />
                Open Google Maps
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>

        {/* Quick Links Column */}
        <div className="md:col-span-3 space-y-4">
          <h3 className="text-brand-gold-500 font-serif font-semibold uppercase tracking-wider text-sm">
            Quick Navigation
          </h3>
          <ul className="space-y-2 text-xs md:text-sm">
            <li>
              <Link to="/" className="text-brand-cream-100/70 hover:text-brand-gold-400 transition-colors duration-300">
                Home
              </Link>
            </li>
            <li>
              <Link to="/rooms" className="text-brand-cream-100/70 hover:text-brand-gold-400 transition-colors duration-300">
                Rooms & Amenities
              </Link>
            </li>
            <li>
              <Link to="/rooms/price" className="text-brand-cream-100/70 hover:text-brand-gold-400 transition-colors duration-300">
                Room Prices & Tariff
              </Link>
            </li>
            <li>
              <Link to="/booking" className="text-brand-cream-100/70 hover:text-brand-gold-400 transition-colors duration-300">
                Online Booking
              </Link>
            </li>
            <li>
              <Link to="/location" className="text-brand-cream-100/70 hover:text-brand-gold-400 transition-colors duration-300">
                Location & Directions
              </Link>
            </li>
            <li>
              <Link to="/faq" className="text-brand-cream-100/70 hover:text-brand-gold-400 transition-colors duration-300">
                Pilgrim FAQ
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-brand-cream-100/70 hover:text-brand-gold-400 transition-colors duration-300">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/mahakaleshwar-temple-guide" className="text-brand-cream-100/70 hover:text-brand-gold-400 transition-colors duration-300">
                Mahakal Darshan Guide
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-brand-cream-100/70 hover:text-brand-gold-400 transition-colors duration-300">
                Contact Reception
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info Column */}
        <div className="md:col-span-4 space-y-4">
          <h3 className="text-brand-gold-500 font-serif font-semibold uppercase tracking-wider text-sm">
            Get in Touch
          </h3>
          <ul className="space-y-4 text-xs md:text-sm">
            <li className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-brand-burgundy-850 flex items-center justify-center text-brand-gold-500 border border-white/5">
                <Phone size={14} />
              </div>
              <a href="tel:+919675278024" className="text-brand-cream-100/80 hover:text-brand-gold-400 transition-colors duration-300 font-medium">
                +91 96752 78024
              </a>
            </li>

            <li className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-brand-burgundy-850 flex items-center justify-center text-brand-gold-500 border border-white/5">
                <Mail size={14} />
              </div>
              <a href="mailto:Mahakalmaharajsanstan@gmail.com" className="text-brand-cream-100/80 hover:text-brand-gold-400 transition-colors duration-300">
                Mahakalmaharajsanstan@gmail.com
              </a>
            </li>

            <li className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-brand-burgundy-850 flex items-center justify-center text-brand-gold-500 border border-white/5">
                <MessageSquare size={14} />
              </div>
              <a
                href="https://wa.me/919675278024?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20a%20room."
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-cream-100/80 hover:text-brand-gold-400 transition-colors duration-300"
              >
                Chat on WhatsApp
              </a>
            </li>

            <li className="flex items-center gap-3 text-brand-cream-100/80">
              <div className="w-8 h-8 rounded-lg bg-brand-burgundy-850 flex items-center justify-center text-brand-gold-400 border border-white/5">
                <Clock size={14} />
              </div>
              <span className="text-xs">Morning Darshan: 4:00 AM – 7:00 AM</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright row */}
      <div className="border-t border-brand-gold-500/10 py-6 text-center text-xs text-brand-cream-100/80">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>&copy; {new Date().getFullYear()} Shri Mahakaleshwar Bhakta Niwas. All rights reserved.</p>
          <p className="font-serif tracking-widest text-[10px] text-brand-gold-400">॥ शुभ दर्शनम् ॥</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

