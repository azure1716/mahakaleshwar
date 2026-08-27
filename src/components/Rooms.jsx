import { useState, useEffect } from "react";
import { Phone, MessageSquare, X } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "./ScrollReveal";

import imgStandard from "../assets/room_standard.webp";
import imgPremium from "../assets/room.webp";
import imgComfort from "../assets/room.webp";
import imgElegant from "../assets/room1.webp";
import imgDeluxe from "../assets/roomAc.webp";
import imgModern from "../assets/roomRoshsan.webp";
import imgTelevision from "../assets/roomT.webp";
import imgFamily from "../assets/roomW.webp";
import imgClassicDeluxe from "../assets/room_deluxe.webp";
import imgClassicFamily from "../assets/room_family.webp";
import imgSimpleTwin from "../assets/roomSimple2.webp";
import imgOneRoom from "../assets/oneRoom.webp";
import imgLightRoom from "../assets/lightRoom.webp";

const roomTypes = [
  {
    id: "standard",
    name: "Standard Twin Room",
    price: "Rs. 900",
    description: "Clean twin-bed room for pilgrims close to darshan.",
    imageContext: "Two separate beds, simple furniture.",
    features: [
      "Two single beds",
      "Attached bathroom",
      "24hr hot water"
    ],
    image: imgStandard,
    tag: "2 Beds",
    popular: false,
  },
  {
    id: "deluxe",
    name: "Deluxe AC Double",
    price: "Rs. 2,000",
    description: "Comfortable AC room with modern fittings.",
    imageContext: "King bed, extra travel comfort.",
    features: [
      "King bed",
      "Air conditioning",
      "Attached bathroom"
    ],
    image: imgDeluxe,
    tag: "King Bed",
    popular: true,
  },
  {
    id: "premium-double",
    name: "Premium Double Room",
    price: "Rs. 2,200",
    description: "Warm double room with cozy bedside lamps.",
    imageContext: "Restful double bed setup.",
    features: [
      "Double bed",
      "Bedside lamps",
      "Attached bathroom"
    ],
    image: imgPremium,
    tag: "Premium",
    popular: false,
  },
  {
    id: "balcony-double",
    name: "Balcony View Double",
    price: "Rs. 2,200",
    description: "Bright AC double room with open balcony view.",
    imageContext: "Natural light, scenic views.",
    features: [
      "Double bed",
      "Air conditioning",
      "Balcony view"
    ],
    image: imgComfort,
    tag: "View Room",
    popular: false,
  },
  {
    id: "elegant-double",
    name: "Elegant Double Room",
    price: "Rs. 2,100",
    description: "Polished room with warm texture and AC.",
    imageContext: "Modern look for two guests.",
    features: [
      "Double bed",
      "Air conditioning",
      "Modern lighting"
    ],
    image: imgElegant,
    tag: "Double",
    popular: false,
  },
  {
    id: "modern-ac",
    name: "Modern AC Room",
    price: "Rs. 2,100",
    description: "Clean AC room with peaceful interior finish.",
    imageContext: "Ideal for rest after travel.",
    features: [
      "Double bed",
      "Air conditioning",
      "Attached bathroom"
    ],
    image: imgModern,
    tag: "AC Room",
    popular: false,
  },
  {
    id: "tv-deluxe",
    name: "TV Deluxe Room",
    price: "Rs. 2,300",
    description: "Spacious wooden-finish room with television.",
    imageContext: "Extra floor space and TV.",
    features: [
      "Double bed",
      "Television",
      "Sitting area"
    ],
    image: imgTelevision,
    tag: "TV Room",
    popular: false,
  },
  {
    id: "simple-twin",
    name: "Simple Twin Room",
    price: "Rs. 1,200",
    description: "Clean two-bed room with fan and window light.",
    imageContext: "Simple setup for friends.",
    features: [
      "Two beds",
      "Ceiling fan",
      "Window seating"
    ],
    image: imgSimpleTwin,
    tag: "Twin Room",
    popular: false,
  },
  {
    id: "premium-modern",
    name: "Premium Modern Room",
    price: "Rs. 2,400",
    description: "Modern double room with tall wall panels.",
    imageContext: "Premium lighting and finish.",
    features: [
      "Double bed",
      "Premium lighting",
      "Attached bathroom"
    ],
    image: imgOneRoom,
    tag: "Modern",
    popular: false,
  },
  {
    id: "light-spacious",
    name: "Light Spacious Room",
    price: "Rs. 2,300",
    description: "Bright double room with sofa seating.",
    imageContext: "Spacious, warm ceiling light.",
    features: [
      "Double bed",
      "Sofa seating",
      "Attached bathroom"
    ],
    image: imgLightRoom,
    tag: "Spacious",
    popular: false,
  },
  {
    id: "family",
    name: "Family Suite",
    price: "Rs. 2,500",
    description: "Spacious family setup with wooden finish.",
    imageContext: "Luggage space, family comfort.",
    features: [
      "Family bed setup",
      "Air conditioning",
      "Attached bathroom"
    ],
    image: imgFamily,
    tag: "Family Stay",
    popular: false,
  },
  {
    id: "classic-deluxe",
    name: "Classic Deluxe Room",
    price: "Rs. 2,000",
    description: "Classic double room with carved wood detail.",
    imageContext: "Traditional style, garden light.",
    features: [
      "Double bed",
      "Air conditioning",
      "Attached bathroom"
    ],
    image: imgClassicDeluxe,
    tag: "Classic",
    popular: false,
  },
  {
    id: "large-family",
    name: "Large Family Room",
    price: "Rs. 2,800",
    description: "Wide family room with multiple beds.",
    imageContext: "Ideal for groups and families.",
    features: [
      "Multiple beds",
      "Family seating",
      "Attached bathroom"
    ],
    image: imgClassicFamily,
    tag: "Large Room",
    popular: false,
  },
];

const RoomCard = ({ room, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-brand-gold-500/10 flex flex-col group premium-card-border cursor-pointer"
    >
      {/* Image container */}
      <div className="relative h-64 overflow-hidden bg-brand-burgundy-900">
        <img
          src={room.image}
          alt={`${room.name} at dharamshala near Mahakaleshwar Temple, Ujjain — ${room.price}/night`}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 opacity-100 scale-100"
        />
        {/* Top Badges */}
        <div className="absolute top-4 left-4 flex gap-2">
          <span className="bg-brand-burgundy-850/85 backdrop-blur-sm text-brand-gold-300 text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full border border-brand-gold-500/20">
            {room.tag}
          </span>
          {room.popular && (
            <span className="bg-brand-gold-500 text-white text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full shadow-sm">
              Most Booked
            </span>
          )}
        </div>
      </div>

      {/* Room Details */}
      <div className="p-6 md:p-8 flex-grow flex flex-col justify-between">
        <div className="space-y-4">
          <div className="flex justify-between items-start gap-2">
            <h3 className="text-xl md:text-2xl font-serif font-bold text-brand-burgundy-800 leading-tight">
              {room.name}
            </h3>
            <div className="text-right">
              <span className="text-2xl font-bold text-brand-gold-600 block leading-none">{room.price}</span>
              <span className="text-[10px] font-semibold text-brand-dark-light uppercase tracking-widest block mt-1">Per Night</span>
            </div>
          </div>

          <p className="text-sm text-brand-dark-light font-light leading-relaxed">
            {room.description}
          </p>

          <p className="text-xs text-brand-gold-600 font-semibold leading-relaxed">
            {room.imageContext}
          </p>

          <div className="h-[1px] bg-brand-gold-500/10 w-full my-4" />

          {/* Features list */}
          <ul className="space-y-2.5">
            {room.features.map((feature) => (
              <li key={feature} className="flex items-center gap-2.5 text-xs text-brand-dark font-medium">
                <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-brand-gold-500" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Buttons */}
        <div className="mt-8 flex gap-3" onClick={(e) => e.stopPropagation()}>
          <a
            href={`https://wa.me/918969891496?text=Hello%2C%20I%20would%20like%20to%20book%20the%20${encodeURIComponent(room.name)}%20at%20Shri%20Mahakaleshwar%20Bhakta%20Niwas.`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-grow btn-premium-gold py-3 rounded-xl flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest shadow-sm"
          >
            <MessageSquare size={14} />
            Book on WhatsApp
          </a>
          <a
            href="tel:+918969891496"
            className="border border-brand-gold-500/30 text-brand-gold-600 hover:text-white hover:bg-brand-gold-500 p-3 rounded-xl transition-all duration-300 flex items-center justify-center"
            title="Call Reception"
          >
            <Phone size={16} />
          </a>
        </div>
      </div>
    </div>
  );
};

const RoomDetailModal = ({ room, onClose }) => {
  if (!room) return null;

  return (
    <div
      className="fixed inset-0 bg-brand-burgundy-900/80 backdrop-blur-md z-50 flex items-center justify-center p-4 md:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl overflow-hidden shadow-2xl max-w-4xl w-full border border-brand-gold-500/20 relative z-50 flex flex-col md:flex-row max-h-[90vh] md:max-h-[85vh] premium-card-border"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-brand-burgundy-900/60 hover:bg-brand-gold-500 text-white hover:text-brand-burgundy-900 p-2.5 rounded-full transition-all duration-300 z-20 shadow-md backdrop-blur-sm border border-brand-gold-500/20"
          aria-label="Close Details"
        >
          <X size={18} />
        </button>

        {/* Image Section */}
        <div className="w-full md:w-1/2 h-64 md:h-auto relative overflow-hidden bg-brand-burgundy-900 flex-shrink-0">
          <img
            src={room.image}
            alt={`${room.name} at dharamshala near Mahakaleshwar Temple, Ujjain — ${room.price}/night`}
            className="w-full h-full object-cover transition-all duration-700 opacity-100 scale-100"
          />
          {/* Top Badges */}
          <div className="absolute top-4 left-4 flex gap-2">
            <span className="bg-brand-burgundy-850/85 backdrop-blur-sm text-brand-gold-300 text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full border border-brand-gold-500/20">
              {room.tag}
            </span>
            {room.popular && (
              <span className="bg-brand-gold-500 text-white text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full shadow-sm">
                Most Booked
              </span>
            )}
          </div>
        </div>

        {/* Details Section */}
        <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-between overflow-y-auto max-h-[50vh] md:max-h-[85vh] bg-brand-cream-50">
          <div className="space-y-6">
            <div className="flex justify-between items-start gap-4">
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-brand-burgundy-800 leading-tight">
                {room.name}
              </h3>
              <div className="text-right flex-shrink-0">
                <span className="text-2xl md:text-3xl font-bold text-brand-gold-600 block leading-none">{room.price}</span>
                <span className="text-[9px] font-semibold text-brand-dark-light uppercase tracking-widest block mt-1">Per Night</span>
              </div>
            </div>

            <p className="text-sm text-brand-dark-light font-light leading-relaxed font-sans">
              {room.description}
            </p>

            <div className="bg-brand-gold-500/5 border border-brand-gold-500/10 rounded-xl p-4">
              <p className="text-xs text-brand-gold-600 font-semibold leading-relaxed font-sans">
                {room.imageContext}
              </p>
            </div>

            <div className="h-[1px] bg-brand-gold-500/10 w-full" />

            {/* Amenities / Features */}
            <div>
              <h4 className="text-xs font-bold text-brand-burgundy-800 uppercase tracking-wider mb-3">Room Amenities</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {room.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2.5 text-xs text-brand-dark font-medium font-sans">
                    <span className="flex-shrink-0 w-2 h-2 rounded-full bg-brand-gold-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="h-[1px] bg-brand-gold-500/10 w-full" />

            {/* Standard features text */}
            <p className="text-[11px] text-brand-dark-light/80 italic leading-relaxed font-sans">
              * Includes 24-hour hot water backed by solar heating, daily housekeeping, and free Wi-Fi access.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 flex gap-3">
            <a
              href={`https://wa.me/918969891496?text=Hello%2C%20I%20would%20like%20to%20book%20the%20${encodeURIComponent(room.name)}%20at%20Shri%20Mahakaleshwar%20Bhakta%20Niwas.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-grow btn-premium-gold py-3.5 rounded-xl flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest shadow-sm font-sans"
            >
              <MessageSquare size={14} />
              Book on WhatsApp
            </a>
            <a
              href="tel:+918969891496"
              className="border border-brand-gold-500/30 text-brand-gold-600 hover:text-white hover:bg-brand-gold-500 p-3.5 rounded-xl transition-all duration-300 flex items-center justify-center"
              title="Call Reception"
            >
              <Phone size={16} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const Rooms = ({ limit }) => {
  const displayedRooms = limit ? roomTypes.slice(0, limit) : roomTypes;
  const [selectedRoom, setSelectedRoom] = useState(null);

  useEffect(() => {
    if (selectedRoom) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedRoom]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setSelectedRoom(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section className="sacred-pattern-bg om-watermark py-20 bg-brand-cream-50">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <ScrollReveal className="text-center space-y-4 max-w-2xl mx-auto">
          <p className="text-xs font-semibold tracking-widest text-brand-gold-600 uppercase">
            Our Rooms
          </p>
          <h2 className="premium-heading-shine text-3xl md:text-5xl font-serif font-bold text-brand-burgundy-800 leading-tight">
            Rooms kept simple, clean and calm
          </h2>
          <p className="text-sm md:text-base text-brand-dark-light font-light leading-relaxed">
            Every room is cleaned daily, features an attached bathroom with solar-backed 24-hour hot water, and comes with absolute transparency - no hidden fees.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-12 md:mt-16">
          {displayedRooms.map((room, idx) => (
            <ScrollReveal key={room.id} delay={idx * 150}>
              <RoomCard room={room} onClick={() => setSelectedRoom(room)} />
            </ScrollReveal>
          ))}
        </div>

        {limit && (
          <ScrollReveal className="text-center mt-12 md:mt-16">
            <Link
              to="/rooms"
              className="inline-flex btn-premium-gold px-8 py-4 rounded-xl items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest shadow-sm font-sans"
            >
              View All Rooms
            </Link>
          </ScrollReveal>
        )}
      </div>

      <RoomDetailModal room={selectedRoom} onClose={() => setSelectedRoom(null)} />
    </section>
  );
};

export default Rooms;
