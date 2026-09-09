import SEO from "../components/SEO";
import ScrollReveal from "../components/ScrollReveal";
import BookingForm from "../components/BookingForm";
import LocationBooking from "../components/LocationBooking";
import FAQ from "../components/FAQ";
import { Phone, MessageSquare, ShieldCheck } from "lucide-react";
import { PHONE_NUMBER_DISPLAY, PHONE_NUMBER_WHATSAPP, PHONE_NUMBER_TEL } from "../config";

const bookingSteps = [
  {
    step: "01",
    title: "Select Room & Dates",
    desc: "Choose your preferred room type (Standard Twin, Deluxe AC, or Family Suite) and select check-in & check-out dates.",
  },
  {
    step: "02",
    title: "Submit Booking Request",
    desc: "Fill in your details using our quick form or send a direct message to our reception desk on WhatsApp.",
  },
  {
    step: "03",
    title: "Receive Immediate Confirmation",
    desc: "Our 24-hour reception team verifies room availability and sends immediate confirmation with stay guidelines.",
  },
  {
    step: "04",
    title: "Check-in at Property",
    desc: "Arrive at Shri Mahakaleshwar Bhakta Niwas (200m from Mahakal temple gate), present ID proof, and enjoy your stay.",
  },
];

const BookingPage = () => {
  const bookingSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Bhakta Niwas Ujjain Online Booking",
    "description": `Reserve rooms at Shri Mahakaleshwar Bhakta Niwas Ujjain online via WhatsApp or call reception directly (${PHONE_NUMBER_DISPLAY}).`,
    "url": "https://www.mahakalbhaktanivasujjain.com/booking",
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.mahakalbhaktanivasujjain.com/" },
        { "@type": "ListItem", "position": 2, "name": "Booking", "item": "https://www.mahakalbhaktanivasujjain.com/booking" }
      ]
    }
  };

  return (
    <div>
      <SEO
        title="Bhakta Niwas Ujjain Online Booking | Reserve Room Near Mahakal Temple"
        description={`Book Shri Mahakaleshwar Bhakta Niwas room online. Quick booking on WhatsApp or call ${PHONE_NUMBER_DISPLAY}. Clean AC & Non-AC rooms near Mahakal Temple, Ujjain.`}
        canonicalPath="/booking"
        schemaData={bookingSchema}
      />

      {/* Header Banner */}
      <section className="bg-brand-burgundy-900 border-b border-brand-gold-500/10 py-16 md:py-24 text-center text-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-brand-gold-500/5 rounded-full blur-[80px]" />

        <ScrollReveal className="container mx-auto px-4 relative z-10 space-y-4 max-w-3xl">
          <p className="text-xs font-semibold tracking-widest text-brand-gold-400 uppercase">
            Instant Room Reservation
          </p>

          <h1 className="text-3xl md:text-5xl font-serif font-bold text-white leading-tight">
            Bhakta Niwas Ujjain Online Booking
          </h1>

          <div className="w-12 h-[1px] bg-brand-gold-500 mx-auto my-4" />

          <p className="text-sm md:text-base text-brand-cream-100/70 font-light leading-relaxed max-w-2xl mx-auto">
            Reserve clean, comfortable accommodation near Shri Mahakaleshwar Temple. Direct reception booking with immediate confirmation. No advance payment required for short stays.
          </p>
        </ScrollReveal>
      </section>

      {/* Steps Section */}
      <section className="py-16 bg-white border-b border-brand-gold-500/10">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <ScrollReveal className="text-center space-y-4 max-w-2xl mx-auto mb-12">
            <p className="text-xs font-semibold tracking-widest text-brand-gold-600 uppercase">
              Simple 4-Step Process
            </p>
            <h2 className="text-2xl md:text-4xl font-serif font-bold text-brand-burgundy-800">
              How to Book Your Stay
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bookingSteps.map((step, idx) => (
              <ScrollReveal key={step.step} delay={idx * 100}>
                <div className="bg-brand-cream-50 p-6 rounded-2xl border border-brand-gold-500/15 flex flex-col justify-between h-full relative group hover:-translate-y-1 transition-all">
                  <span className="text-3xl font-serif font-bold text-brand-gold-500/30 group-hover:text-brand-gold-500 transition-colors">
                    {step.step}
                  </span>
                  <div className="space-y-2 mt-4">
                    <h3 className="text-lg font-serif font-bold text-brand-burgundy-800">
                      {step.title}
                    </h3>
                    <p className="text-xs text-brand-dark-light font-light leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="mt-10 p-6 rounded-2xl bg-brand-cream-100 border border-brand-gold-500/20 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-brand-burgundy-900">
              <ShieldCheck className="text-brand-gold-600 shrink-0" size={24} />
              <p className="text-xs md:text-sm font-medium">
                <strong>Booking Guarantee:</strong> Direct booking with property desk ensures best rate, zero booking fees, and accurate room allocation.
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <a
                href={`https://wa.me/${PHONE_NUMBER_WHATSAPP}?text=Hello%2C%20I%20want%20to%20book%20a%20room%20at%20Shri%20Mahakaleshwar%20Bhakta%20Niwas.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-premium-gold px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-2"
              >
                <MessageSquare size={14} />
                WhatsApp Direct
              </a>
              <a
                href={`tel:${PHONE_NUMBER_TEL}`}
                className="border border-brand-gold-500/30 text-brand-burgundy-900 px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-2 hover:bg-brand-burgundy-900 hover:text-white transition-all"
              >
                <Phone size={14} />
                Call Desk
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form Component */}
      <BookingForm />

      {/* Location Booking Selection Component */}
      <LocationBooking />

      <FAQ />
    </div>
  );
};

export default BookingPage;
