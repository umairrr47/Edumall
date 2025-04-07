import { useState } from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      console.log("Subscribed with:", email);
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <section className="relative py-20 bg-black text-white overflow-hidden">
      
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800 opacity-90"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          className="text-5xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Subscribe to Our Newsletter
        </motion.h2>

        <p className="text-center text-lg text-gray-300 mb-8">
          Stay ahead with exclusive updates, latest offers, and news!
        </p>

        
        <motion.form
          onSubmit={handleSubscribe}
          className="flex justify-center items-center mb-10 bg-black bg-opacity-40 border border-gray-700 backdrop-blur-lg rounded-full px-6 py-4 shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="p-3 w-72 md:w-96 rounded-l-full bg-transparent border-none text-white placeholder-gray-400 focus:outline-none"
            required
          />
          <button
            type="submit"
            className="px-6 py-3 bg-yellow-500 text-black font-bold rounded-full shadow-lg hover:bg-yellow-400 transition transform hover:scale-105"
          >
            Subscribe
          </button>
        </motion.form>

      
        {subscribed && (
          <motion.p
            className="text-green-400 text-center mb-8 text-lg font-semibold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            ✅ Thank you for subscribing!
          </motion.p>
        )}

      
        <div className="flex justify-center space-x-8">
          {[
            { icon: <FaFacebook size={28} />, url: "https://facebook.com", color: "hover:text-blue-500" },
            { icon: <FaTwitter size={28} />, url: "https://twitter.com", color: "hover:text-blue-400" },
            { icon: <FaInstagram size={28} />, url: "https://instagram.com", color: "hover:text-pink-500" },
            { icon: <FaLinkedin size={28} />, url: "https://linkedin.com", color: "hover:text-blue-700" },
          ].map(({ icon, url, color }, index) => (
            <motion.a
              key={index}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-gray-400 ${color} transition transform hover:scale-110`}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              {icon}
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
