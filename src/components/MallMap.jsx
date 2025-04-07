import { motion } from "framer-motion";

const MallMap = () => {
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
          Contact Us
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-black bg-opacity-60 border border-gray-700 backdrop-blur-lg rounded-2xl shadow-2xl p-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
         
          <div className="absolute -top-6 -left-6 w-14 h-14 bg-yellow-400 rounded-full opacity-20 blur-xl"></div>
          <div className="absolute bottom-0 right-0 w-20 h-20 bg-yellow-400 rounded-full opacity-10 blur-2xl"></div>

          
          <div className="flex flex-col justify-center">
            <h3 className="text-3xl font-semibold text-yellow-400 mb-6">
              Our Location
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed space-y-2">
              <strong className="text-yellow-400">EDUMALL</strong>
              <br />
              PLOT NO. 17-18, STREET NO. 2, SHIVAM PARK
              <br />
              NANA MAVA ROAD, NR. AJMERA SHASTRI NAGAR
              <br />
              SHASTRI NAGAR, RAJKOT, GUJARAT - 360005
            </p>
          </div>

          {/* Map */}
          <motion.div
            className="h-[400px] rounded-lg overflow-hidden shadow-lg border-4 border-yellow-400"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d18172.298207573025!2d70.7709558!3d22.2723269!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959cbb30601199b%3A0xebe3bdd57c9fbec3!2sEdumall!5e1!3m2!1sen!2sin!4v1733736124208!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default MallMap;
