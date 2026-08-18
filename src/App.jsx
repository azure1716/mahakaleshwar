import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import RoomsPage from "./pages/RoomsPage";
import RoomPricesPage from "./pages/RoomPricesPage";
import BookingPage from "./pages/BookingPage";
import LocationPage from "./pages/LocationPage";
import FAQPage from "./pages/FAQPage";
import AboutPage from "./pages/AboutPage";
import TempleGuidePage from "./pages/TempleGuidePage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="rooms" element={<RoomsPage />} />
        <Route path="rooms/price" element={<RoomPricesPage />} />
        <Route path="booking" element={<BookingPage />} />
        <Route path="location" element={<LocationPage />} />
        <Route path="faq" element={<FAQPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="mahakaleshwar-temple-guide" element={<TempleGuidePage />} />
        <Route path="contact" element={<ContactPage />} />
      </Route>
    </Routes>
  );
}

export default App;