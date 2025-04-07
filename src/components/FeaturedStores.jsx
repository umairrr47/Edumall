import { motion } from "framer-motion";
import {
  FaTshirt,
  FaPen,
  FaPaintBrush,
  FaGift,
  FaBook,
  FaBasketballBall,
} from "react-icons/fa";
import uniform from '../../src/assets/uniform.avif'
import Stationeries from '../../src/assets/stationary.avif'
import Art from '../../src/assets/art.avif'
import Gifts from '../../src/assets/gifts.avif'
import Books from '../../src/assets/books.avif'
import Sports from '../../src/assets/sports.avif'
const stores = [
  {
    name: "Educational & Corporate Uniforms",
    category: "Fashion & Uniforms",
    icon: <FaTshirt size={50} />,
    description: "Premium uniforms for schools and businesses.",
    image: uniform,
  },
  {
    name: "Stationeries",
    category: "Office & School Supplies",
    icon: <FaPen size={50} />,
    description: "Everything from pens to planners.",
    image: Stationeries,
  },
  {
    name: "Art Studio",
    category: "Creative Arts",
    icon: <FaPaintBrush size={50} />,
    description: "Unleash your creativity with top art supplies.",
    image: Art,
  },
  {
    name: "Gifting Delights",
    category: "Gifts & Accessories",
    icon: <FaGift size={50} />,
    description: "Unique gifts for every occasion.",
    image: Gifts,
  },
  {
    name: "Book Collection",
    category: "Books",
    icon: <FaBook size={50} />,
    description: "Dive into a world of stories and knowledge.",
    image: Books,
  },
  {
    name: "Sports Goods",
    category: "Sports & Fitness",
    icon: <FaBasketballBall size={50} />,
    description: "Gear up for your active lifestyle.",
    image: Sports,
  },
];

const FeaturedStores = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
      <motion.h2
        className="text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-white to-yellow-300 drop-shadow-lg"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Explore Our Featured Stores
      </motion.h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 px-6">
        {stores.map((store) => (
          <motion.div
            key={store.name}
            className="relative bg-gray-850 rounded-3xl shadow-2xl overflow-hidden border border-gray-700 group hover:border-yellow-400 transition-all duration-300 hover:scale-105"
            whileHover={{ scale: 1.05 }}
          >
            <div className="relative h-56 w-full overflow-hidden">
              <img
                src={store.image}
                alt={store.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <motion.div 
                className="absolute top-4 left-4 text-yellow-300 text-4xl drop-shadow-md"
                whileHover={{ rotate: 10 }}
              >
                {store.icon}
              </motion.div>
              <motion.span className="absolute top-4 right-4 px-4 py-1 bg-white text-gray-900 text-sm font-semibold rounded-full shadow-md">
                {store.category}
              </motion.span>
            </div>
            <div className="p-8 text-center">
              <h3 className="text-2xl font-semibold mb-3 text-white drop-shadow-md">{store.name}</h3>
              <p className="text-yellow-200 mb-6 text-lg leading-relaxed">{store.description}</p>
              <motion.button
                className="px-6 py-2 bg-gradient-to-r from-gold to-red-500 text-gray-900 rounded-lg font-medium shadow-lg hover:scale-105 hover:from-yellow-200 hover:to-yellow-400 transition-transform"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                Visit Store
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedStores;