import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import pic1 from "../../src/assets/pic1.avif"
import pic2 from "../../src/assets/pic2.avif"
import pic3 from "../../src/assets/pic3.avif"
import pic4 from "../../src/assets/pic4.jpg"
import pic5 from "../../src/assets/pic5.jpg"
import pic6 from "../../src/assets/pic6.jpg"

const testimonials = [
  { id: 1, name: "Sarah M.", rating: 5, photo: pic1, review: "Amazing shopping experience! The variety of stores is unbeatable." },
  { id: 2, name: "John D.", rating: 4, photo: pic2, review: "Loved the events, but parking could be better." },
  { id: 3, name: "Emily R.", rating: 5, photo: pic3, review: "The staff is super friendly, and the mall is always clean!" },
  { id: 4, name: "Mike T.", rating: 5, photo: pic4, review: "Great deals during the sales—definitely coming back!" },
  { id: 5, name: "Sophia L.", rating: 5, photo: pic5, review: "Luxury brands, great ambiance, and top-notch service!" },
  { id: 6, name: "David K.", rating: 4, photo: pic6, review: "A fantastic place for weekend shopping with family!" },
];

const Testimonials = () => {
  return (
    <section className="relative py-20 bg-black text-white overflow-hidden">
      
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800 opacity-80"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          className="text-5xl font-extrabold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          What Our Customers Say
        </motion.h2>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="px-4"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <motion.div
                className="relative bg-black bg-opacity-50 border border-gray-700 backdrop-blur-lg rounded-2xl p-8 shadow-xl transition-all duration-500 hover:shadow-3xl hover:border-yellow-400 text-center"
                whileHover={{ scale: 1.05 }}
              >
                
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-yellow-400 rounded-full opacity-25 blur-lg"></div>
                <div className="absolute bottom-0 right-0 w-16 h-16 bg-yellow-400 rounded-full opacity-10 blur-2xl"></div>

                <img src={testimonial.photo} alt={testimonial.name} className="w-16 h-16 mx-auto rounded-full mb-4 border-4 border-yellow-400 shadow-lg" />
                
                <h3 className="text-2xl font-bold text-white mb-2">{testimonial.name}</h3>

                <div className="flex justify-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className={i < testimonial.rating ? "text-yellow-400 text-xl" : "text-gray-500 text-xl"} />
                  ))}
                </div>

                <p className="text-gray-300 italic px-6 leading-relaxed">"{testimonial.review}"</p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
