import SEO from "../components/SEO";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import OurStory from "../components/OurStory";
import Rooms from "../components/Rooms";
import Destinations from "../components/Destinations";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import BookingForm from "../components/BookingForm";
import FAQ from "../components/FAQ";
import LocationBooking from "../components/LocationBooking";

const Home = () => {
  return (
    <div className="home-premium-effects">
      <SEO
        title="Shri Mahakaleshwar Bhakta Niwas | Dharamshala at Ujjain"
        description="Book peaceful dharamshala at Ujjain near Mahakal temple. Shri Mahakaleshwar Bhakta Niwas offers clean AC rooms, 24hr hot water & Bhasma Aarti guidance."
        canonicalPath="/"
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
      <LocationBooking />
      <BookingForm />
      <FAQ />
    </div>
  );
};

export default Home;
