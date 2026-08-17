import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import SplashLoader from "./SplashLoader";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-brand-cream-50 selection:bg-brand-gold-500 selection:text-white">
      <SplashLoader />
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;