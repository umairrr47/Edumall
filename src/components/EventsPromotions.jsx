import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectCreative } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-creative";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import spring from '../../src/assets/spring.avif'
import bookstore from '../../src/assets/bookstore.avif'
import sports from '../../src/assets/sports.avif'
import food from '../../src/assets/food.avif'
import tech from '../../src/assets/tech.avif'

const events = [
  {
    id: 1,
    name: "Spring Sale Extravaganza",
    date: "March 15, 2025",
    location: "Main Atrium",
    description: "Up to 50% off on selected brands with exclusive deals!",
    image: spring,
  },
  {
    id: 2,
    name: "Grand Book Fair",
    date: "March 20, 2025",
    location: "Level 2, Event Hall",
    description: "Meet renowned authors and grab exclusive book deals.",
    image: bookstore,
  },
  {
    id: 3,
    name: "Fitness Workshop Series",
    date: "March 25, 2025",
    location: "Sports Zone",
    description: "Free sessions with top trainers and fitness experts.",
    image: sports,
  },
  {
    id: 4,
    name: "Luxury Food Festival",
    date: "March 30, 2025",
    location: "VIP Lounge",
    description: "Indulge in a world-class culinary experience with gourmet dishes.",
    image: food,
  },
  {
    id: 5,
    name: "Elite Tech Expo",
    date: "April 5, 2025",
    location: "Innovation Center",
    description: "Experience the future with cutting-edge technology and AI showcases.",
    image: tech,
  },
];

const EventsPromotions = () => {
  return (
    <section className="relative py-20 bg-black text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800 opacity-70"></div>
      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          className="text-5xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-gold to-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Exclusive Events & Promotions
        </motion.h2>

        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectCreative]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          effect="creative"
          creativeEffect={{
            prev: { shadow: true, translate: ["-120%", 0, -500] },
            next: { translate: ["120%", 0, -500] },
          }}
          className="px-4"
        >
          {events.map((event) => (
            <SwiperSlide key={event.id}>
              <motion.div
                className="relative bg-gradient-to-br from-gray-800 to-black rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 hover:shadow-3xl w-full max-w-lg mx-auto group"
                whileHover={{ scale: 1.08 }}
              >
                <img src={event.image} alt={event.name} className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="p-8 text-center">
                  <h3 className="text-4xl font-bold text-white mb-3">
                    {event.name}
                  </h3>
                  <div className="flex items-center justify-center text-gray-400 mb-2 animate-bounce">
                    <FaCalendarAlt className="mr-2 text-gold transform transition-all duration-500 hover:scale-125" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center justify-center text-gray-400 mb-4 animate-pulse">
                    <FaMapMarkerAlt className="mr-2 text-red-500 transform transition-all duration-500 hover:scale-125" />
                    <span>{event.location}</span>
                  </div>
                  <p className="text-gray-300 mb-6 px-4">
                    {event.description}
                  </p>
                  <motion.button
                    className="px-10 py-4 bg-gradient-to-r from-gold to-red-500 text-black font-bold rounded-lg hover:from-gold hover:to-yellow-400 transition-all duration-300 shadow-lg group-hover:shadow-2xl"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Discover More
                  </motion.button>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default EventsPromotions;