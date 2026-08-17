import { useState } from "react";
import { Phone, Clock, MessageSquare } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const BookingForm = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    checkIn: "",
    nights: "1",
    guests: "2",
    room: "Deluxe AC Double",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, phone, checkIn, nights, guests, room } = form;
    const message = `Hello, I would like to book a room at Shri Mahakaleshwar Bhakta Niwas Dharamshala, Ujjain.%0A%0A` +
      `Name: ${encodeURIComponent(name)}%0A` +
      `Phone: ${encodeURIComponent(phone)}%0A` +
      `Check-in: ${encodeURIComponent(checkIn)}%0A` +
      `Nights: ${encodeURIComponent(nights)}%0A` +
      `Guests: ${encodeURIComponent(guests)}%0A` +
      `Room: ${encodeURIComponent(room)}`;
    
    window.open(`https://wa.me/919675278024?text=${message}`, "_blank");
  };

  return (
    <section className="py-20 bg-brand-burgundy-900 text-white relative overflow-hidden">
      {/* Decorative light spots */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-gold-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-burgundy-700/30 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-5 space-y-6 lg:pr-6">
            <ScrollReveal className="space-y-4">
              <span className="text-xs font-semibold tracking-widest text-brand-gold-400 uppercase block">
                Reserve Your Stay
              </span>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-white leading-tight">
                Tell us your dates.<br />
                We'll hold the room.
              </h2>
              <p className="text-sm md:text-base text-brand-cream-100/70 font-light leading-relaxed">
                No advance payment for stays under three nights. Fill this in and it opens a
                ready-made WhatsApp message — or simply call our front desk directly.
              </p>
            </ScrollReveal>

            {/* Quick Contact Buttons */}
            <ScrollReveal delay={150} className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="tel:+919675278024"
                className="bg-brand-burgundy-800 border border-brand-gold-500/30 hover:border-brand-gold-400 text-brand-gold-400 hover:text-white px-5 py-3 rounded-xl flex items-center gap-3 text-xs font-bold uppercase tracking-wider transition-all duration-300"
              >
                <Phone size={16} />
                +91 96752 78024
              </a>
              <div className="bg-brand-burgundy-850 border border-white/5 text-brand-cream-100/60 px-5 py-3 rounded-xl flex items-center gap-3 text-xs font-semibold uppercase tracking-wider">
                <Clock size={16} className="text-brand-gold-500" />
                Reception open 4 am to 7 am 
              </div>
            </ScrollReveal>
          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-7">
            <ScrollReveal delay={200}>
              <div className="bg-brand-cream-200/90 text-brand-dark p-8 md:p-10 rounded-3xl shadow-2xl border border-white/10 backdrop-blur-md">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Full Name */}
                    <div className="space-y-1">
                      <label htmlFor="name" className="block text-[10px] font-bold text-brand-burgundy-800 uppercase tracking-widest">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-white border border-brand-gold-500/20 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold-500 focus:border-transparent transition-all"
                        placeholder="e.g. Rajan Patel"
                      />
                    </div>

                    {/* Phone Number */}
                    <div className="space-y-1">
                      <label htmlFor="phone" className="block text-[10px] font-bold text-brand-burgundy-800 uppercase tracking-widest">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        required
                        className="w-full bg-white border border-brand-gold-500/20 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold-500 focus:border-transparent transition-all"
                        placeholder="e.g. +91 98250 12345"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                    {/* Check In */}
                    <div className="space-y-1">
                      <label htmlFor="checkIn" className="block text-[10px] font-bold text-brand-burgundy-800 uppercase tracking-widest">
                        Check-in
                      </label>
                      <input
                        type="date"
                        id="checkIn"
                        name="checkIn"
                        value={form.checkIn}
                        onChange={handleChange}
                        required
                        className="w-full bg-white border border-brand-gold-500/20 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold-500 focus:border-transparent transition-all"
                      />
                    </div>

                    {/* Nights */}
                    <div className="space-y-1">
                      <label htmlFor="nights" className="block text-[10px] font-bold text-brand-burgundy-800 uppercase tracking-widest">
                        Nights
                      </label>
                      <select
                        id="nights"
                        name="nights"
                        value={form.nights}
                        onChange={handleChange}
                        className="w-full bg-white border border-brand-gold-500/20 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold-500 focus:border-transparent transition-all cursor-pointer"
                      >
                        {[1, 2, 3, 4, 5, 6, 7].map((n) => (
                          <option key={n} value={n}>
                            {n} {n === 1 ? "Night" : "Nights"}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Guests */}
                    <div className="space-y-1">
                      <label htmlFor="guests" className="block text-[10px] font-bold text-brand-burgundy-800 uppercase tracking-widest">
                        Guests
                      </label>
                      <select
                        id="guests"
                        name="guests"
                        value={form.guests}
                        onChange={handleChange}
                        className="w-full bg-white border border-brand-gold-500/20 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold-500 focus:border-transparent transition-all cursor-pointer"
                      >
                        {[1, 2, 3, 4, 5, 6].map((n) => (
                          <option key={n} value={n}>
                            {n} {n === 1 ? "Guest" : "Guests"}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Room Type */}
                  <div className="space-y-1">
                    <label htmlFor="room" className="block text-[10px] font-bold text-brand-burgundy-800 uppercase tracking-widest">
                      Room Type
                    </label>
                    <select
                      id="room"
                      name="room"
                      value={form.room}
                      onChange={handleChange}
                      className="w-full bg-white border border-brand-gold-500/20 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold-500 focus:border-transparent transition-all cursor-pointer"
                    >
                      <option>Standard Twin Room</option>
                      <option>Deluxe AC Double</option>
                      <option>Family Suite</option>
                    </select>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-brand-burgundy-800 hover:bg-brand-burgundy-700 text-white border border-brand-gold-500/40 hover:border-brand-gold-500 py-4 rounded-xl flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
                  >
                    <MessageSquare size={16} />
                    Send booking request on WhatsApp
                  </button>

                  <p className="text-center text-xs text-brand-dark-light italic mt-3">
                    We reply within minutes, day or night.
                  </p>
                </form>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BookingForm;