import { useRef } from "react";
import { motion } from "framer-motion";
import edumall from "../assets/edumall.jpg";

const HeroSection = () => {
  const sectionRef = useRef(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.1,
      boxShadow: "0px 0px 15px rgba(255, 215, 0, 0.5)",
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="relative h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${edumall})` // Use the imported image variable
      }}
    >
      <div className="absolute inset-0 bg-black/60" /> {/* Dark overlay for contrast and readability */}

      <motion.div
        className="relative z-10 flex flex-col items-center justify-center text-center px-6 md:px-12 max-w-5xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={textVariants}
          className="text-5xl md:text-7xl font-serif font-bold text-white tracking-tight leading-tight"
        >
          Experience Shopping Like Never Before
        </motion.h1>
        <motion.p
          variants={textVariants}
          className="mt-6 text-lg md:text-xl font-light text-gray-200 max-w-3xl leading-relaxed"
        >
          Step into a world of luxury, innovation, and unparalleled elegance at Edu Mall.
        </motion.p>
        <motion.div
          className="mt-10 flex flex-col sm:flex-row gap-4"
          variants={textVariants}
        >
          <motion.button
            variants={buttonVariants}
            whileHover="hover"
            className="px-8 py-4 bg-transparent border-2 border-[#FFD700] text-[#FFD700] font-semibold text-lg rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 relative overflow-hidden"
          >
            <span className="relative z-10">Explore Stores</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#FFD700]/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
          </motion.button>
          <motion.button
            variants={buttonVariants}
            whileHover="hover"
            className="px-8 py-4 bg-gradient-to-r from-[#FFD700] to-[#F5F5F5] text-black font-semibold text-lg rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 relative overflow-hidden"
          >
            <span className="relative z-10">Current Offers</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#FFD700]/30 to-[#F5F5F5]/30 opacity-0 hover:opacity-100 transition-opacity duration-300" />
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;