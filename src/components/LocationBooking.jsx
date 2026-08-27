import { useState } from "react";
import { Phone, MessageSquare } from "lucide-react";

const locations = [
  {
    name: "Ujjain Bhakta Niwas (Mandir)",
    short: "Mandir-side stay with quick temple access.",
    detail: "Near the main Shri Mahakaleshwar Temple gate, ideal for early morning Bhasma Aarti and darshan.",
  },
  {
    name: "Ujjain Anand Vihar",
    short: "Comfortable stay in a peaceful guest house.",
    detail: "A calm location in Ujjain with easy access to local dining and transport.",
  },
];

const LocationBooking = () => {
  const [location, setLocation] = useState(locations[0].name);
  const selectedLocation = locations.find((item) => item.name === location) || locations[0];

  const whatsAppUrl = `https://wa.me/918969891496?text=${encodeURIComponent(
    `Hello, I would like to book a room at ${selectedLocation.name}. ${selectedLocation.short}`
  )}`;

  return (
    <section className="py-20 bg-white text-brand-burgundy-900">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <div className="rounded-[2rem] border border-brand-gold-200/80 bg-brand-cream-50/90 p-8 md:p-10 shadow-[0_40px_100px_rgba(116,66,20,0.08)]">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
            <div className="space-y-6">
              <p className="text-sm font-semibold tracking-[0.24em] uppercase text-brand-gold-600">
                Book temple accommodation
              </p>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brand-burgundy-900 leading-tight">
                Select preferred location for immediate reservation guidance
              </h2>
              <p className="max-w-2xl text-sm md:text-base text-brand-burgundy-900/70 leading-relaxed">
                Choose your preferred temple stay location and contact us instantly by WhatsApp or phone. We will help secure your accommodation and answer your travel queries right away.
              </p>
              <div className="grid gap-3 sm:grid-cols-[auto_1fr] items-center rounded-full border border-brand-gold-200 bg-white px-5 py-4 shadow-sm">
                <label htmlFor="location" className="text-sm font-semibold text-brand-burgundy-800 mr-3 whitespace-nowrap">
                  Location
                </label>
                <div className="relative w-full">
                  <select
                    id="location"
                    name="location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full appearance-none rounded-full border border-transparent bg-white px-4 py-3 text-sm font-medium text-brand-burgundy-900 outline-none focus:border-brand-gold-300 focus:ring-2 focus:ring-brand-gold-200"
                  >
                    {locations.map((option) => (
                      <option key={option.name} value={option.name}>
                        {option.name}
                      </option>
                    ))}
                  </select>
                  <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-brand-burgundy-500">
                    ▼
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="rounded-[1.75rem] border border-brand-gold-200/70 bg-brand-burgundy-900 p-8 text-white shadow-xl">
                <p className="text-xs uppercase tracking-[0.28em] text-brand-gold-300/90 font-semibold mb-4">
                  Your selected location
                </p>
                <p className="text-2xl font-semibold leading-snug text-brand-cream-100">
                  {selectedLocation.name}
                </p>
                <p className="mt-4 text-sm text-brand-cream-200 leading-relaxed">
                  {selectedLocation.detail}
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <a
                  href={whatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-[#28c87c] px-6 py-4 text-sm font-bold text-white shadow-[0_20px_40px_rgba(40,200,124,0.28)] transition hover:-translate-y-0.5"
                >
                  <MessageSquare size={18} />
                  WhatsApp to book
                </a>
                <a
                  href="tel:+918969891496"
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#d5830b] to-[#b24c02] px-6 py-4 text-sm font-bold text-white shadow-[0_20px_40px_rgba(178,76,2,0.28)] transition hover:-translate-y-0.5"
                >
                  <Phone size={18} />
                  Call to book
                </a>
              </div>
            </div>
          </div>

          <div className="mt-10 border-t border-brand-gold-200/60 pt-8">
            <p className="text-xs uppercase tracking-[0.3em] text-brand-burgundy-600 font-semibold mb-4">
              Available pilgrimage locations
            </p>
            <div className="flex flex-wrap gap-3">
              {locations.map((item) => (
                <span
                  key={item.name}
                  className="rounded-full border border-brand-gold-200/80 bg-white px-4 py-2 text-xs font-semibold text-brand-burgundy-900 shadow-sm"
                >
                  {item.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationBooking;
