import SEO from "../components/SEO";
import ScrollReveal from "../components/ScrollReveal";
import Destinations from "../components/Destinations";
import { MapPin, Navigation, Phone, ExternalLink, Car, Train, Plane } from "lucide-react";
import FAQ from "../components/FAQ";

const routesInfo = [
  {
    mode: "From Ujjain Railway Station (UJN)",
    distance: "1.8 Kilometres (8-10 Mins)",
    icon: Train,
    details: "Take an e-rickshaw or auto-rickshaw directly towards Mahakaleshwar Temple gate / Kot Mohalla Jaisinghpura. Fare is approx ₹30–₹50 per person.",
  },
  {
    mode: "From Dewas Gate Bus Stand",
    distance: "2.0 Kilometres (10 Mins)",
    icon: Navigation,
    details: "Direct auto-rickshaws available round the clock to Mahakaleshwar Temple. Ask driver for 127 Temple Road near Kot Mohalla.",
  },
  {
    mode: "From Devi Ahilyabai Holkar Airport, Indore (IDR)",
    distance: "55 Kilometres (1 hr 15 Mins)",
    icon: Plane,
    details: "Prepaid taxis or private cabs available from Indore Airport directly via Indore-Ujjain Highway to Shri Mahakaleshwar Bhakta Niwas.",
  },
  {
    mode: "Private Vehicle / Car Parking",
    distance: "On-site Gated Parking",
    icon: Car,
    details: "Secure, lit parking for cars, SUVs, and tempo travellers inside the Bhakta Niwas premises for staying guests.",
  },
];

const LocationPage = () => {
  const locationSchema = {
    "@context": "https://schema.org",
    "@type": "Place",
    "name": "Shri Mahakaleshwar Bhakta Niwas Location",
    "description": "Location and directions to Shri Mahakaleshwar Bhakta Niwas in Ujjain, located 200 metres (3 minute walk) from Shri Mahakaleshwar Temple.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "127 Temple Rd, Kot Mohalla, Jaisinghpura",
      "addressLocality": "Ujjain",
      "addressRegion": "Madhya Pradesh",
      "postalCode": "456006",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 23.1827,
      "longitude": 75.7682
    },
    "url": "https://www.mahakalbhaktanivasujjain.com/location",
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.mahakalbhaktanivasujjain.com/" },
        { "@type": "ListItem", "position": 2, "name": "Location", "item": "https://www.mahakalbhaktanivasujjain.com/location" }
      ]
    }
  };

  return (
    <div>
      <SEO
        title="Bhakta Niwas Near Mahakaleshwar Temple Ujjain | Location & Map"
        description="Shri Mahakaleshwar Bhakta Niwas is located just 200m (3 min walk) from Mahakaleshwar Temple Ujjain. Check address, map directions from Railway Station & Airport."
        canonicalPath="/location"
        schemaData={locationSchema}
      />

      {/* Header Banner */}
      <section className="bg-brand-burgundy-900 border-b border-brand-gold-500/10 py-16 md:py-24 text-center text-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-brand-gold-500/5 rounded-full blur-[80px]" />

        <ScrollReveal className="container mx-auto px-4 relative z-10 space-y-4 max-w-3xl">
          <p className="text-xs font-semibold tracking-widest text-brand-gold-400 uppercase">
            3-Minute Walk to Darshan Gate
          </p>

          <h1 className="text-3xl md:text-5xl font-serif font-bold text-white leading-tight">
            Bhakta Niwas Near Mahakaleshwar Temple, Ujjain
          </h1>

          <div className="w-12 h-[1px] bg-brand-gold-500 mx-auto my-4" />

          <p className="text-sm md:text-base text-brand-cream-100/70 font-light leading-relaxed max-w-2xl mx-auto">
            Situated at 127 Temple Road, Kot Mohalla, Jaisinghpura — just 200 metres from Shri Mahakaleshwar Jyotirlinga. Ideal for early morning Bhasma Aarti and easy family travel.
          </p>
        </ScrollReveal>
      </section>

      {/* Address & Maps Section */}
      <section className="py-16 md:py-20 bg-brand-cream-50">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Address Details */}
            <div className="lg:col-span-5 space-y-6">
              <ScrollReveal className="space-y-4">
                <span className="text-xs font-semibold tracking-widest text-brand-gold-600 uppercase block">
                  Property Address
                </span>
                <h2 className="text-2xl md:text-4xl font-serif font-bold text-brand-burgundy-800 leading-tight">
                  Prime Location in Ujjain Sacred Zone
                </h2>
                <div className="w-12 h-[2px] bg-brand-gold-500" />
              </ScrollReveal>

              <ScrollReveal delay={150} className="space-y-4">
                <div className="bg-white p-6 rounded-2xl border border-brand-gold-500/20 shadow-sm space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin size={22} className="text-brand-gold-500 shrink-0 mt-1" />
                    <div>
                      <p className="font-serif font-bold text-lg text-brand-burgundy-800">
                        Shri Mahakaleshwar Bhakta Niwas
                      </p>
                      <address className="not-italic text-xs md:text-sm text-brand-dark-light font-light leading-relaxed mt-1">
                        127, Temple Road, Near Shri Mahakaleshwar Jyotirlinga,<br />
                        Kot Mohalla, Jaisinghpura,<br />
                        Ujjain, Madhya Pradesh — 456006
                      </address>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-brand-gold-500/10 flex items-center justify-between">
                    <span className="text-xs text-brand-gold-600 font-semibold">
                      Distance to Mahakal Temple: 200m
                    </span>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=127%2C%20Temple%20RD%2C%20near%20Shri%20Mahakaleshwar%20Jyotirlinga%2C%20Kot%20Mohalla%2C%20Jaisinghpura%2C%20Ujjain%2C%20Madhya%20Pradesh%20456006"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-bold text-brand-burgundy-800 hover:text-brand-gold-600 transition-colors"
                    >
                      Google Maps <ExternalLink size={12} />
                    </a>
                  </div>
                </div>

                <div className="bg-brand-burgundy-900 text-white p-6 rounded-2xl border border-brand-gold-500/20 space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand-gold-400">
                    Need Help Reaching Us?
                  </p>
                  <p className="text-xs text-brand-cream-100/80 leading-relaxed">
                    Call our reception desk anytime. We will guide your driver or auto right to our entrance.
                  </p>
                  <a
                    href="tel:+919675278024"
                    className="inline-flex items-center gap-2 text-sm font-bold text-brand-gold-400 hover:text-white mt-2 transition-colors"
                  >
                    <Phone size={16} /> +91 96752 78024
                  </a>
                </div>
              </ScrollReveal>
            </div>

            {/* Map Embed Column */}
            <div className="lg:col-span-7">
              <ScrollReveal delay={200}>
                <div className="rounded-3xl overflow-hidden border-2 border-brand-gold-500/20 shadow-xl h-[400px] md:h-[450px] bg-brand-burgundy-900 relative">
                  <iframe
                    title="Shri Mahakaleshwar Bhakta Niwas Google Map Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.625628549364!2d75.7660113!3d23.1827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39637435f3d32cf5%3A0x892a0df8d1c7f47e!2sShri%20Mahakaleshwar%20Jyotirlinga!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* Routes & How to Reach Section */}
      <section className="py-16 bg-white border-y border-brand-gold-500/10">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <ScrollReveal className="text-center space-y-4 max-w-2xl mx-auto mb-12">
            <p className="text-xs font-semibold tracking-widest text-brand-gold-600 uppercase">
              Directions & Transport
            </p>
            <h2 className="text-2xl md:text-4xl font-serif font-bold text-brand-burgundy-800">
              How to Reach Shri Mahakaleshwar Bhakta Niwas
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {routesInfo.map((route, idx) => (
              <ScrollReveal key={route.mode} delay={idx * 100}>
                <div className="bg-brand-cream-50 p-6 rounded-2xl border border-brand-gold-500/15 flex flex-col justify-between h-full hover:-translate-y-1 transition-all">
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-white border border-brand-gold-500/20 flex items-center justify-center text-brand-gold-600">
                      <route.icon size={20} />
                    </div>
                    <h3 className="text-base font-serif font-bold text-brand-burgundy-800">
                      {route.mode}
                    </h3>
                    <span className="text-[10px] font-bold text-brand-gold-600 uppercase tracking-widest block">
                      {route.distance}
                    </span>
                    <p className="text-xs text-brand-dark-light font-light leading-relaxed">
                      {route.details}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Local Destinations Component */}
      <Destinations />

      <FAQ />
    </div>
  );
};

export default LocationPage;
