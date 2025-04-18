import { useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { FiMenu, FiX, FiSearch } from "react-icons/fi";
import logo from "../assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

 
  const { scrollY } = useScroll();
  const headerHeight = useTransform(scrollY, [0, 150], [100, 80]);
  const headerOpacity = useTransform(scrollY, [0, 150], [1, 0.95]);

  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

 
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false); 
  };

 
  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -45 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { duration: 1.2, ease: "anticipate" },
    },
  };

  const navVariants = {
    hidden: { opacity: 0, y: -60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.15, delayChildren: 0.4 },
    },
  };

  const navItemVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const menuVariants = {
    hidden: { opacity: 0, y: "-100%", scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.7, ease: [0.6, 0, 0.1, 1] },
    },
    exit: { opacity: 0, y: "-100%", transition: { duration: 0.5 } },
  };

  
  const navItems = [
    { name: "Home", id: "home" },
    { name: "Stores", id: "stores" },
    { name: "Events", id: "events" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <motion.header
      className="sticky top-0 z-50 font-['Cinzel_Decorative'] text-white" 
      style={{ height: headerHeight }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-gray-700 via-gray-800 to-[#2A3B5A] backdrop-blur-2xl shadow-[0_8px_60px_rgba(0,0,0,0.9)]" 
        style={{ opacity: headerOpacity }}
        animate={{ opacity: [0.95, 1, 0.95] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <div
          className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/3px-tile.png')] opacity-15" 
        />
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          variants={logoVariants}
          initial="hidden"
          animate="visible"
          whileHover={{
            scale: 1.15,
            filter: "drop-shadow(0 0 30px rgba(255, 215, 0, 0.8))",
            transition: { duration: 0.5 },
          }}
        >
          <img
            src={logo}
            alt="Luxury Mall"
            className="h-12 sm:h-14 w-auto object-contain drop-shadow-[0_6px_25px_rgba(255,215,0,0.8)]"
          />
        </motion.div>

        <motion.nav
          className="hidden lg:flex items-center space-x-8 xl:space-x-12"
          variants={navVariants}
          initial="hidden"
          animate="visible"
        >
          {navItems.map((item) => (
            <motion.a
              key={item.name}
              href={`#${item.id}`}
              onClick={() => scrollToSection(item.id)}
              className="relative text-base font-semibold tracking-wider uppercase text-amber-100"
              variants={navItemVariants}
              whileHover={{
                scale: 1.1,
                color: "#FFD700",
                transition: { duration: 0.4 },
              }}
            >
              {item.name}
              <motion.span
                className="absolute left-0 bottom-[-8px] w-0 h-[2px] bg-gradient-to-r from-amber-400 to-amber-600"
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
            </motion.a>
          ))}
        </motion.nav>

       
        <div className="flex items-center space-x-4">
          
          <motion.div
            className="relative hidden sm:flex items-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <input
              type="text"
              placeholder="Search Luxury..."
              className="p-2.5 pr-10 rounded-full text-sm bg-gray-800/80 text-amber-100 placeholder-amber-200/50 border-amber-500/30 border focus:outline-none focus:ring-2 focus:ring-amber-400 w-40 md:w-52 transition-all duration-500 shadow-lg" 
            />
            <motion.div
              className="absolute right-3 text-amber-400"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <FiSearch size={18} />
            </motion.div>
          </motion.div>

         
          <motion.button
            className="lg:hidden text-amber-400"
            onClick={toggleMenu}
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1, rotate: 90 }}
          >
            {isMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </motion.button>
        </div>
      </div>

      
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            className="lg:hidden absolute top-full left-0 w-full shadow-2xl bg-gradient-to-b from-gray-700 to-[#2A3B5A]" 
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="px-6 py-8 space-y-6">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={`#${item.id}`}
                  onClick={() => scrollToSection(item.id)}
                  className="block text-lg font-semibold tracking-wide uppercase text-amber-100" 
                  variants={navItemVariants}
                  whileHover={{ x: 20, color: "#FFD700" }}
                >
                  {item.name}
                </motion.a>
              ))}
             
              <motion.div
                className="relative flex items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <input
                  type="text"
                  placeholder="Search Luxury..."
                  className="p-3 pr-10 rounded-full w-full bg-gray-800/80 text-amber-100 placeholder-amber-200/50 border-amber-500/30 border focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all duration-500 shadow-lg" 
                />
                <FiSearch className="absolute right-3 text-amber-400" size={20} />
              </motion.div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;