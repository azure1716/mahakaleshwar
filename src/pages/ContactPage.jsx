import SEO from "../components/SEO";
import { Phone, Mail, MapPin, MessageSquare } from "lucide-react";
import FAQ from "../components/FAQ";
import BookingForm from "../components/BookingForm";
import ScrollReveal from "../components/ScrollReveal";

const ContactPage = () => {
  return (
    <div>
      <SEO
        title="Ujjain Dharamshala Contact Number | Bhakta Niwas Booking"
        description="Official Ujjain dharamshala contact number (+91 96752 78024). Call or WhatsApp for room booking near Shri Mahakaleshwar Temple, Ujjain. 24hr desk."
        canonicalPath="/contact"
      />
      {/* Header Banner */}
      <section className="bg-brand-burgundy-900 border-b border-brand-gold-500/10 py-16 md:py-24 text-center text-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-brand-gold-500/5 rounded-full blur-[80px]" />

        <ScrollReveal className="container mx-auto px-4 relative z-10 space-y-4 max-w-3xl">
          <p className="text-xs font-semibold tracking-widest text-brand-gold-400 uppercase">
            Contact
          </p>

          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight">
            Contact Shri Mahakaleshwar Bhakta Niwas
          </h1>

          <div className="w-12 h-[1px] bg-brand-gold-500 mx-auto my-4" />

          <p className="text-sm md:text-base text-brand-cream-100/70 font-light leading-relaxed max-w-2xl mx-auto">
            For room booking, accommodation details, darshan information,
            and general enquiries, contact our reception team anytime.
          </p>
        </ScrollReveal>
      </section>

      {/* Contact Cards */}
      <section className="py-20 bg-brand-cream-50">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <ScrollReveal className="text-center space-y-4 max-w-xl mx-auto mb-12">
            <p className="text-xs font-semibold tracking-widest text-brand-gold-600 uppercase">
              Contact Channels
            </p>

            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-burgundy-800">
              We are one message away
            </h2>

            <p className="text-xs md:text-sm text-brand-dark-light font-medium tracking-wide">
              Reception Open 24 Hours · Check-in 12:00 PM · Check-out 10:00 AM
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Phone */}
            <ScrollReveal delay={100}>
              <div className="bg-white p-6 rounded-2xl border border-brand-gold-500/10 hover:border-brand-gold-500/30 transition-all duration-300 flex flex-col justify-between h-full premium-card-border text-center sm:text-left group">
                <div className="w-12 h-12 rounded-xl bg-brand-cream-100 border border-brand-gold-500/10 flex items-center justify-center text-brand-gold-500 mb-6 mx-auto sm:mx-0 group-hover:bg-brand-gold-500 group-hover:text-white transition-all duration-300">
                  <Phone size={20} className="stroke-[1.5]" />
                </div>

                <div className="space-y-2">
                  <p className="text-[10px] font-bold text-brand-gold-600 uppercase tracking-widest">
                    Call Reception
                  </p>

                  <a
                    href="tel:+919675278024"
                    className="text-base font-serif font-bold text-brand-burgundy-800 hover:text-brand-gold-500 block break-words transition-colors"
                  >
                    +91 96752 78024
                  </a>

                  <p className="text-xs text-brand-dark-light font-light">
                    Answered 24 Hours
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* WhatsApp */}
            <ScrollReveal delay={150}>
              <div className="bg-white p-6 rounded-2xl border border-brand-gold-500/10 hover:border-brand-gold-500/30 transition-all duration-300 flex flex-col justify-between h-full premium-card-border text-center sm:text-left group">
                <div className="w-12 h-12 rounded-xl bg-brand-cream-100 border border-brand-gold-500/10 flex items-center justify-center text-brand-gold-500 mb-6 mx-auto sm:mx-0 group-hover:bg-brand-gold-500 group-hover:text-white transition-all duration-300">
                  <MessageSquare size={20} className="stroke-[1.5]" />
                </div>

                <div className="space-y-2">
                  <p className="text-[10px] font-bold text-brand-gold-600 uppercase tracking-widest">
                    WhatsApp Chat
                  </p>

                  <a
                    href="https://wa.me/919675278024?text=Hello%2C%20I%20would%20like%20to%20book%20a%20room%20at%20Shri%20Mahakaleshwar%20Bhakta%20Niwas."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-serif font-bold text-brand-burgundy-800 hover:text-brand-gold-500 block break-words transition-colors"
                  >
                    +91 96752 78024
                  </a>

                  <p className="text-xs text-brand-dark-light font-light">
                    Quick Response on WhatsApp
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Email */}
            <ScrollReveal delay={200}>
              <div className="bg-white p-6 rounded-2xl border border-brand-gold-500/10 hover:border-brand-gold-500/30 transition-all duration-300 flex flex-col justify-between h-full premium-card-border text-center sm:text-left group">
                <div className="w-12 h-12 rounded-xl bg-brand-cream-100 border border-brand-gold-500/10 flex items-center justify-center text-brand-gold-500 mb-6 mx-auto sm:mx-0 group-hover:bg-brand-gold-500 group-hover:text-white transition-all duration-300">
                  <Mail size={20} className="stroke-[1.5]" />
                </div>

                <div className="space-y-2">
                  <p className="text-[10px] font-bold text-brand-gold-600 uppercase tracking-widest">
                    Email Enquiry
                  </p>

                  <a
                    href="mailto:Mahakalmaharajsanstan@gmail.com"
                    className="text-sm font-serif font-bold text-brand-burgundy-800 hover:text-brand-gold-500 block break-all transition-colors mt-1"
                  >
                    Mahakalmaharajsanstan@gmail.com
                  </a>

                  <p className="text-xs text-brand-dark-light font-light">
                    For Booking & General Enquiries
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Address */}
            <ScrollReveal delay={250}>
              <div className="bg-white p-6 rounded-2xl border border-brand-gold-500/10 hover:border-brand-gold-500/30 transition-all duration-300 flex flex-col justify-between h-full premium-card-border text-center sm:text-left group">
                <div className="w-12 h-12 rounded-xl bg-brand-cream-100 border border-brand-gold-500/10 flex items-center justify-center text-brand-gold-500 mb-6 mx-auto sm:mx-0 group-hover:bg-brand-gold-500 group-hover:text-white transition-all duration-300">
                  <MapPin size={20} className="stroke-[1.5]" />
                </div>

                <div className="space-y-2">
                  <p className="text-[10px] font-bold text-brand-gold-600 uppercase tracking-widest">
                    Our Address
                  </p>

                  <div className="text-xs font-serif font-bold text-brand-burgundy-800 leading-relaxed">
                    <p>127, Temple RD</p>
                    <p>Near Shri Mahakaleshwar Jyotirlinga</p>
                    <p>Kot Mohalla, Jaisinghpura</p>
                    <p>Ujjain, Madhya Pradesh 456006</p>
                  </div>

                  <p className="text-xs text-brand-dark-light font-light">
                    3 Min Walk to Mahakal Temple
                  </p>

                  <a
                    href="https://www.google.com/maps/search/?api=1&query=127%2C%20Temple%20RD%2C%20near%20Shri%20Mahakaleshwar%20Jyotirlinga%2C%20Kot%20Mohalla%2C%20Jaisinghpura%2C%20Ujjain%2C%20Madhya%20Pradesh%20456006"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center text-xs font-semibold text-brand-gold-500 hover:text-brand-gold-400 transition-colors duration-300 mt-3"
                  >
                    Open Google Maps
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <BookingForm />
      <FAQ />
    </div>
  );
};

export default ContactPage;