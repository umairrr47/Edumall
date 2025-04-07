import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Clock, Award, Users } from 'lucide-react';

const features = [
  {
    icon: <Shield className="w-12 h-12" />,
    title: "Premium Security",
    description: "24/7 surveillance and trained security personnel for your safety"
  },
  {
    icon: <Clock className="w-12 h-12" />,
    title: "Extended Hours",
    description: "Convenient shopping hours to fit your busy schedule"
  },
  {
    icon: <Award className="w-12 h-12" />,
    title: "Premium Brands",
    description: "Host to world-renowned brands and exclusive collections"
  },
  {
    icon: <Users className="w-12 h-12" />,
    title: "Customer First",
    description: "Dedicated customer service and premium shopping experience"
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gold to-yellow-500 mb-6">
            Why Choose Us
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience luxury shopping redefined with our world-class amenities and services
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-gold transition-all duration-300"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="text-gold mb-6"
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-2xl font-semibold text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-400">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;