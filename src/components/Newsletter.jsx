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
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800 opacity-90"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Heading */}
        <motion.h2
          className="text-4xl sm:text-5xl font-extrabold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Subscribe to Our Newsletter
        </motion.h2>

        <p className="text-center text-base sm:text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
          Stay ahead with exclusive updates, latest offers, and insider news!
        </p>

        {/* Form */}
        <motion.form
          onSubmit={handleSubscribe}
          className="flex flex-col sm:flex-row items-center gap-4 sm:gap-0 bg-black bg-opacity-40 border border-gray-700 backdrop-blur-lg rounded-full px-4 py-3 shadow-2xl w-full max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full sm:flex-1 px-4 py-3 text-sm sm:text-base bg-transparent text-white placeholder-gray-400 focus:outline-none"
            required
          />

          {/* Desktop Button */}
          <button
            type="submit"
            className="hidden sm:inline-block bg-yellow-500 hover:bg-yellow-400 transition text-black font-bold px-6 py-3 rounded-full shadow-lg"
          >
            Subscribe
          </button>
        </motion.form>

        {/* Mobile Button */}
        <motion.div
          className="mt-4 sm:hidden w-full max-w-xs mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <button
            type="submit"
            onClick={handleSubscribe}
            className="w-full bg-yellow-500 hover:bg-yellow-400 transition text-black font-bold px-6 py-3 rounded-full shadow-lg"
          >
            Subscribe
          </button>
        </motion.div>

        {/* Subscription Feedback */}
        {subscribed && (
          <motion.p
            className="text-green-400 text-center mt-6 text-base sm:text-lg font-semibold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            ✅ Thank you for subscribing!
          </motion.p>
        )}

        {/* Social Icons */}
        <div className="mt-12 flex justify-center space-x-6">
          {[
            { icon: <FaFacebook size={28} />, url: "https://facebook.com", color: "hover:text-blue-500" },
            { icon: <FaTwitter size={28} />, url: "https://twitter.com", color: "hover:text-blue-400" },
            { icon: <FaInstagram size={28} />, url: "https://instagram.com", color: "hover:text-pink-500" },
            { icon: <FaLinkedin size={28} />, url: "https://linkedin.com", color: "hover:text-blue-700" },
          ].map(({ icon, url, color }, i) => (
            <motion.a
              key={i}
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
