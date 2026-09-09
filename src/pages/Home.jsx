import SEO from "../components/SEO";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import OurStory from "../components/OurStory";
import Rooms from "../components/Rooms";
import Destinations from "../components/Destinations";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import BlogTeaser from "../components/BlogTeaser";
import BookingForm from "../components/BookingForm";
import FAQ from "../components/FAQ";
import LocationBooking from "../components/LocationBooking";
import { PHONE_NUMBER_SCHEMA } from "../config";

const Home = () => {
  const homeSchema = [
    {
      "@context": "https://schema.org",
      "@type": "LodgingBusiness",
      "name": "Shri Mahakaleshwar Bhakta Niwas",
      "description": "Clean, peaceful accommodation for families and pilgrims in Ujjain near Shri Mahakaleshwar Jyotirlinga Temple.",
      "url": "https://www.mahakalbhaktanivasujjain.com/",
      "telephone": PHONE_NUMBER_SCHEMA,
      "email": "Mahakalmaharajsanstan@gmail.com",
      "priceRange": "₹900 - ₹2,800",
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
      "amenityFeature": [
        { "@type": "LocationFeatureSpecification", "name": "3 Min Walk to Darshan (200m)", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "24-Hour Reception", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "24-Hour Solar Hot Water", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Pure Veg Bhojanalaya", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Secure Gated Parking", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Bhasm Aarti Guidance", "value": true }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Shri Mahakaleshwar Bhakta Niwas Ujjain",
      "url": "https://www.mahakalbhaktanivasujjain.com/"
    }
  ];

  return (
    <div className="home-premium-effects">
      <SEO
        title="Shri Mahakaleshwar Bhakta Niwas | Dharamshala at Ujjain near Mahakal Temple"
        description="Clean, peaceful dharamshala rooms near Shri Mahakaleshwar Temple, Ujjain. 24-hour reception, pure veg bhojanalaya, solar hot water, and Bhasma Aarti guidance."
        canonicalPath="/"
        schemaData={homeSchema}
      />
      <Hero />
      <Stats />
      <div id="our-story">
        <OurStory />
      </div>
      <div id="rooms-section">
        <Rooms limit={3} />
      </div>
      <div id="destinations">
        <Destinations />
      </div>
      <Features />
      <Testimonials />
      <BlogTeaser />
      <LocationBooking />
      <BookingForm />
      <FAQ />
    </div>
  );
};

export default Home;

