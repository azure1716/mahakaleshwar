import SEO from "../components/SEO";
import ScrollReveal from "../components/ScrollReveal";
import { MessageSquare, Phone, CheckCircle, ShieldCheck } from "lucide-react";
import FAQ from "../components/FAQ";
import { Link } from "react-router-dom";
import { PHONE_NUMBER_WHATSAPP, PHONE_NUMBER_TEL } from "../config";

const roomPrices = [
  {
    type: "Standard Twin Room",
    beds: "2 Single Beds",
    occupancy: "2 Adults",
    price: "₹900",
    ac: "Non-AC / Ceiling Fan",
    hotWater: "24-Hour Solar Hot Water",
    bathroom: "Attached Clean Bathroom",
    amenities: ["Free Wi-Fi", "Daily Housekeeping", "Locker Facility", "Temple Guidance"],
    idealFor: "Solo pilgrims & budget travelers",
  },
  {
    type: "Deluxe AC Double",
    beds: "1 King / Double Bed",
    occupancy: "2 Adults",
    price: "₹2,000",
    ac: "Air Conditioned",
    hotWater: "24-Hour Solar Hot Water",
    bathroom: "Attached Western Bathroom",
    amenities: ["Free Wi-Fi", "Air Conditioning", "Daily Housekeeping", "Locker Facility"],
    idealFor: "Couples & small families",
  },
  {
    type: "Elegant / Modern AC Room",
    beds: "1 Double Bed",
    occupancy: "2 Adults",
    price: "₹2,100",
    ac: "Air Conditioned",
    hotWater: "24-Hour Solar Hot Water",
    bathroom: "Attached Modern Bathroom",
    amenities: ["Free Wi-Fi", "Air Conditioning", "Bedside Lamps", "Daily Housekeeping"],
    idealFor: "Devotees seeking extra room comfort",
  },
  {
    type: "Premium Double Room",
    beds: "1 Double Bed",
    occupancy: "2-3 Adults",
    price: "₹2,200",
    ac: "Air Conditioned",
    hotWater: "24-Hour Solar Hot Water",
    bathroom: "Attached Modern Bathroom",
    amenities: ["Free Wi-Fi", "Air Conditioning", "Balcony View (Select Rooms)", "Housekeeping"],
    idealFor: "Pilgrims needing quiet relaxation",
  },
  {
    type: "TV Deluxe Room",
    beds: "1 Double Bed + Extra Bed option",
    occupancy: "2-3 Adults",
    price: "₹2,300",
    ac: "Air Conditioned",
    hotWater: "24-Hour Solar Hot Water",
    bathroom: "Attached Modern Bathroom",
    amenities: ["Television", "Free Wi-Fi", "Sitting Area", "Housekeeping"],
    idealFor: "Families & travelers wanting TV amenities",
  },
  {
    type: "Family Suite",
    beds: "Family Double Bed Setup",
    occupancy: "4-5 Adults",
    price: "₹2,500",
    ac: "Air Conditioned",
    hotWater: "24-Hour Solar Hot Water",
    bathroom: "Attached Spacious Bathroom",
    amenities: ["Air Conditioning", "Extra Luggage Space", "Free Wi-Fi", "Housekeeping"],
    idealFor: "Family groups visiting Mahakaleshwar",
  },
  {
    type: "Large Family Room",
    beds: "Multiple Bed Setup",
    occupancy: "5-7 Adults",
    price: "₹2,800",
    ac: "Air Conditioned",
    hotWater: "24-Hour Solar Hot Water",
    bathroom: "Attached Large Bathroom",
    amenities: ["Multiple Beds", "Air Conditioning", "Free Wi-Fi", "Housekeeping"],
    idealFor: "Large pilgrim groups & multi-generational stay",
  },
];

const RoomPricesPage = () => {
  const priceSchema = {
    "@context": "https://schema.org",
    "@type": "ItemPage",
    "name": "Bhakta Niwas Ujjain Room Price & Tariff",
    "description": "Transparent room prices for Shri Mahakaleshwar Bhakta Niwas in Ujjain near Mahakal temple. Tariff from ₹900 to ₹2,800 per night.",
    "url": "https://www.mahakalbhaktanivasujjain.com/rooms/price",
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.mahakalbhaktanivasujjain.com/" },
        { "@type": "ListItem", "position": 2, "name": "Rooms", "item": "https://www.mahakalbhaktanivasujjain.com/rooms" },
        { "@type": "ListItem", "position": 3, "name": "Room Price", "item": "https://www.mahakalbhaktanivasujjain.com/rooms/price" }
      ]
    }
  };

  return (
    <div>
      <SEO
        title="Bhakta Niwas Ujjain Room Price & Tariff | 2026 Price List"
        description="Check official room price at Shri Mahakaleshwar Bhakta Niwas Ujjain. Standard twin from ₹900/night, Deluxe AC ₹2,000, Family suites ₹2,500. No hidden charges."
        canonicalPath="/rooms/price"
        schemaData={priceSchema}
      />

      {/* Header Banner */}
      <section className="bg-brand-burgundy-900 border-b border-brand-gold-500/10 py-16 md:py-24 text-center text-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-brand-gold-500/5 rounded-full blur-[80px]" />

        <ScrollReveal className="container mx-auto px-4 relative z-10 space-y-4 max-w-3xl">
          <p className="text-xs font-semibold tracking-widest text-brand-gold-400 uppercase">
            Transparent Tariff
          </p>

          <h1 className="text-3xl md:text-5xl font-serif font-bold text-white leading-tight">
            Bhakta Niwas Ujjain Room Price & Tariff
          </h1>

          <div className="w-12 h-[1px] bg-brand-gold-500 mx-auto my-4" />

          <p className="text-sm md:text-base text-brand-cream-100/70 font-light leading-relaxed max-w-2xl mx-auto">
            Clear, honest pricing for pilgrims visiting Shri Mahakaleshwar Temple. Stays start from ₹900 per night with 24-hour solar hot water, attached bathroom, and zero hidden charges.
          </p>
        </ScrollReveal>
      </section>

      {/* Price Table Section */}
      <section className="py-16 md:py-20 bg-brand-cream-50">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <ScrollReveal className="text-center space-y-4 max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl md:text-4xl font-serif font-bold text-brand-burgundy-800">
              Complete Room Tariff & Rate Breakdown
            </h2>
            <p className="text-xs md:text-sm text-brand-dark-light font-light">
              All tariffs listed per room per night (GST & taxes applicable where required).
            </p>
          </ScrollReveal>

          {/* Detailed Pricing Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {roomPrices.map((item, idx) => (
              <ScrollReveal key={item.type} delay={idx * 100}>
                <div className="bg-white p-6 md:p-8 rounded-2xl border border-brand-gold-500/15 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between h-full premium-card-border">
                  <div className="space-y-4">
                    <div className="flex justify-between items-start gap-2 border-b border-brand-gold-500/10 pb-4">
                      <div>
                        <h3 className="text-xl font-serif font-bold text-brand-burgundy-800">
                          {item.type}
                        </h3>
                        <p className="text-xs text-brand-gold-600 font-semibold mt-0.5">
                          {item.idealFor}
                        </p>
                      </div>
                      <div className="text-right shrink-0">
                        <span className="text-2xl font-bold text-brand-gold-600 block">{item.price}</span>
                        <span className="text-[10px] text-brand-dark-light uppercase font-semibold">Per Night</span>
                      </div>
                    </div>

                    <ul className="space-y-2 text-xs text-brand-dark font-medium">
                      <li className="flex items-center gap-2">
                        <CheckCircle size={14} className="text-brand-gold-500 shrink-0" />
                        <span><strong>Beds:</strong> {item.beds}</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle size={14} className="text-brand-gold-500 shrink-0" />
                        <span><strong>Occupancy:</strong> {item.occupancy}</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle size={14} className="text-brand-gold-500 shrink-0" />
                        <span><strong>Cooling:</strong> {item.ac}</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle size={14} className="text-brand-gold-500 shrink-0" />
                        <span><strong>Hot Water:</strong> {item.hotWater}</span>
                      </li>
                    </ul>

                    <div className="pt-2 border-t border-brand-gold-500/10">
                      <p className="text-[10px] uppercase font-bold text-brand-gold-600 tracking-wider mb-2">
                        Key Amenities
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {item.amenities.map((amenity) => (
                          <span key={amenity} className="bg-brand-cream-100 text-brand-burgundy-800 text-[10px] px-2.5 py-1 rounded-md font-medium border border-brand-gold-500/10">
                            {amenity}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-brand-gold-500/10 flex gap-2">
                    <a
                      href={`https://wa.me/${PHONE_NUMBER_WHATSAPP}?text=Hello%2C%20I%20want%20to%20book%20the%20${encodeURIComponent(item.type)}%20at%20${encodeURIComponent(item.price)}/night.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 btn-premium-gold py-2.5 rounded-lg flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider"
                    >
                      <MessageSquare size={14} />
                      Book Now
                    </a>
                    <a
                      href={`tel:${PHONE_NUMBER_TEL}`}
                      className="p-2.5 border border-brand-gold-500/30 text-brand-gold-600 hover:bg-brand-gold-500 hover:text-white rounded-lg transition-colors flex items-center justify-center"
                      title="Call Reception"
                    >
                      <Phone size={14} />
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Booking Terms & Trust Highlights */}
          <ScrollReveal className="mt-16 bg-white p-8 rounded-3xl border border-brand-gold-500/20 shadow-sm max-w-4xl mx-auto space-y-6">
            <div className="flex items-center gap-3 text-brand-burgundy-800">
              <ShieldCheck size={28} className="text-brand-gold-500 shrink-0" />
              <h3 className="text-xl font-serif font-bold">
                Bhakta Niwas Tariff Guarantee & Booking Terms
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs md:text-sm text-brand-dark-light leading-relaxed">
              <div className="space-y-2">
                <p>✓ <strong>Check-in:</strong> 12:00 PM | <strong>Check-out:</strong> 10:00 AM</p>
                <p>✓ <strong>No advance payment required</strong> for stays under 3 nights when booked via phone/WhatsApp.</p>
                <p>✓ <strong>Free cancellation</strong> up to 24 hours before check-in.</p>
              </div>
              <div className="space-y-2">
                <p>✓ <strong>Pure Sattvic Environment:</strong> Strictly vegetarian property close to Mahakal temple.</p>
                <p>✓ <strong>Walk to Temple:</strong> 3-minute walking distance (200m) to temple entrance.</p>
                <p>✓ <strong>Group Accommodation:</strong> Discounts for registered pilgrim groups available on direct inquiry.</p>
              </div>
            </div>
            <div className="pt-4 border-t border-brand-gold-500/10 flex flex-wrap justify-between items-center gap-4">
              <p className="text-xs text-brand-dark-light">
                Have specific queries regarding room availability or custom group stays?
              </p>
              <Link to="/booking" className="text-xs font-bold text-brand-gold-600 hover:text-brand-gold-500 underline">
                Go to Online Booking →
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <FAQ />
    </div>
  );
};

export default RoomPricesPage;
