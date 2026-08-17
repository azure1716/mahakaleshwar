import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const faqs = [
  {
    q: "How do I book a room?",
    a: "Send us a WhatsApp message or call the reception directly. Tell us your dates and number of guests and we confirm within minutes. No advance payment is required for stays under three nights.",
  },
  {
    q: "What are the check-in and check-out timings?",
    a: "Check-in is at 12:00 PM and check-out is at 10:00 AM. Early check-in or late check-out may be available upon request.",
  },
  {
    q: "How far is the temple?",
    a: "The temple is just a 3-minute walk from our doorstep.",
  },
  {
    q: "Is food available?",
    a: "Yes, we serve sattvic breakfast, thali lunch, and dinner freshly prepared each day.",
  },
  {
    q: "Do you allow large groups?",
    a: "Absolutely. We have family suites and can accommodate groups. Contact us directly for group bookings.",
  },
  {
    q: "What is the Ujjain Bhasma Aarti booking price and timing?",
    a: "Bhasma Aarti takes place early morning from 4:00 AM to 7:00 AM. Official darshan guidance is available for staying pilgrims (approx ₹250 per person). Contact our front desk or WhatsApp us for booking assistance.",
  },
  {
    q: "What is the cancellation policy?",
    a: "Cancellations are free up to 24 hours before check-in. Please contact us for any changes.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-brand-cream-50">
      <div className="container mx-auto px-4 md:px-8 max-w-3xl">
        <ScrollReveal className="text-center space-y-4 mb-12">
          <p className="text-xs font-semibold tracking-widest text-brand-gold-600 uppercase">
            Questions
          </p>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-brand-burgundy-800 leading-tight">
            Questions pilgrims ask us
          </h2>
        </ScrollReveal>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <ScrollReveal key={idx} delay={idx * 100}>
                <div className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen ? "border-brand-gold-500 shadow-md" : "border-brand-gold-500/15"
                }`}>
                  <button
                    onClick={() => toggle(idx)}
                    className="w-full flex justify-between items-center p-6 text-left hover:bg-brand-cream-100/50 transition duration-300"
                  >
                    <span className="font-serif font-bold text-sm md:text-base text-brand-burgundy-800">
                      {faq.q}
                    </span>
                    <span className={`w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300 ${
                      isOpen 
                        ? "border-brand-gold-500 bg-brand-gold-500 text-white" 
                        : "border-brand-gold-500/20 text-brand-gold-500"
                    }`}>
                      {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                    </span>
                  </button>
                  
                  <div
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="p-6 pt-0 text-xs md:text-sm text-brand-dark-light font-light leading-relaxed border-t border-brand-gold-500/10">
                      {faq.a}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;