import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring, useAnimation } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-creative";
import { Autoplay, EffectCreative } from "swiper/modules";

const HeroSection = () => {
  const sectionRef = useRef(null);
  const controls = useAnimation();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const yBackground = useSpring(useTransform(scrollYProgress, [0, 1], [0, -250]), {
    stiffness: 130,
    damping: 25,
  });
  const yContent = useSpring(useTransform(scrollYProgress, [0, 1], [0, -80]), {
    stiffness: 160,
    damping: 20,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
        delayChildren: 0.7,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 100, rotateX: -25 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 1.8,
        ease: [0.83, 0, 0.17, 1],
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.6, rotate: -20 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { duration: 1.2, ease: "easeOut", delay: 1.2 },
    },
    hover: {
      scale: 1.25,
      boxShadow: "0 0 50px rgba(255, 215, 0, 0.8), 0 0 80px rgba(138, 43, 226, 0.6)",
      transition: { duration: 0.5, yoyo: Infinity },
    },
  };

  const glowVariants = {
    animate: {
      scale: [1, 1.4, 1],
      opacity: [0.25, 0.75, 0.25],
      rotate: [0, 20, 0],
      transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="relative h-screen overflow-hidden"
    >
      <motion.div
        className="absolute inset-0 z-0 bg-[#0B0F19]"
      >
        <motion.div
          className="absolute inset-0 bg-[url('/assets/textures/nebula.png')] bg-cover opacity-20"
          animate={{ scale: [1, 1.05, 1], rotate: [0, 5, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      <motion.div
        style={{ y: yBackground }}
        className="absolute inset-0 z-10"
        initial={{ scale: 1.3 }}
        animate={{ scale: 1 }}
        transition={{ duration: 15, ease: "easeOut" }}
      >
        <Swiper
          modules={[Autoplay, EffectCreative]}
          effect="creative"
          loop={true}
          autoplay={{ delay: 8000, disableOnInteraction: false }}
          creativeEffect={{
            prev: { shadow: true, translate: ["-120%", 0, -500], rotate: [0, 90, 0] },
            next: { translate: ["120%", 0, 0], rotate: [0, -90, 0] },
          }}
          className="w-full h-full"
        >
          <SwiperSlide>
            <img
              src="/assets/images/mall-interior.jpg"
              alt="Luxury Mall Interior"
              className="w-full h-full object-cover brightness-70 contrast-130"
            />
          </SwiperSlide>
          <SwiperSlide>
            <video
              src="/assets/videos/promo.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover brightness-70 contrast-130"
            />
          </SwiperSlide>
        </Swiper>
      </motion.div>

      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/40 to-black/80 z-20"
        animate={{ opacity: [0.8, 0.5, 0.8] }}
        transition={{ duration: 6, repeat: Infinity, repeatType: "reverse" }}
      />

      <motion.div
        style={{ y: yContent }}
        className="relative z-30 flex flex-col items-center justify-center h-full text-center px-8 md:px-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="absolute top-1/3 w-[500px] h-[500px] bg-gradient-to-br from-[#FFD700]/40 to-[#8A2BE2]/30 rounded-full blur-3xl z-0"
          variants={glowVariants}
          animate="animate"
        />

        <motion.h1
          variants={textVariants}
          className="text-7xl md:text-10xl font-extrabold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-[#FFD700] via-[#D8BFD8] to-[#8A2BE2] drop-shadow-[0_8px_20px_rgba(255,215,0,0.6)]"
        >
          Enter the Realm of Elevated Living
        </motion.h1>
        <motion.p
          variants={textVariants}
          className="mt-8 text-2xl md:text-4xl font-light text-[#E6E0FA] max-w-5xl leading-relaxed tracking-wide"
        >
         Edu Mall isn't just a destination — it's a curated experience of avant-garde elegance, immersive technology, and timeless grandeur.
        </motion.p>
        <motion.button
          variants={buttonVariants}
          whileHover="hover"
          className="mt-12 px-14 py-6 bg-gradient-to-r from-[#FFD700] to-[#8A2BE2] rounded-xl text-xl font-bold text-gray-900 shadow-[0_0_30px_rgba(255,215,0,0.7)] relative overflow-hidden group"
        >
          <span className="relative z-10">Ascend to Majesty</span>
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-[#8A2BE2]/70 to-[#FFD700]/70"
            initial={{ x: "-100%" }}
            whileHover={{ x: "100%" }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-[radial-gradient(circle,rgba(255,215,0,0.4),transparent)]"
            initial={{ scale: 0 }}
            whileHover={{ scale: 2.5 }}
            transition={{ duration: 0.6 }}
          />
        </motion.button>
      </motion.div>

      <motion.div
        className="absolute bottom-17 left-1/2 transform -translate-x-1/2 z-30"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 2 }}
      >
        <div className="w-14 h-24 border-3 border-[#FFD700]/80 rounded-full flex items-start justify-center relative overflow-hidden">
          <motion.div
            className="w-4 h-4 bg-gradient-to-br from-[#FFD700] to-[#8A2BE2] rounded-full shadow-[0_0_20px_#FFD700]"
            animate={{ y: [0, 50, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className=" absolute inset-0 bg-gradient-to-b from-[#FFD700]/30 to-[#8A2BE2]/20 rounded-full blur-md"
            animate={{ scale: [1, 1.4, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
