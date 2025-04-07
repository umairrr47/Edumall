// src/App.jsx
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import FeaturedStores from "./components/FeaturedStores";
import MallMap from "./components/MallMap";
import EventsPromotions from "./components/EventsPromotions";
import Testimonials from "./components/Testimonials";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import WhyChooseUs from "./components/WhyChooseUs";
function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <Header />
      <HeroSection />
      <FeaturedStores />
      <EventsPromotions />
      <WhyChooseUs/>
      <Testimonials />
      <MallMap />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;