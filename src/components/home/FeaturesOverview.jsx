import React from "react";
import { motion } from "framer-motion";
import {
  FaChalkboardTeacher, // For Live Sessions
  FaLaptopCode, // For Real-world Projects
  FaUserTie, // For Career Mentorship
  FaSyncAlt, // For Continuous Updates
  FaCode, // For general coding/tech
  FaHandshake, // For community/networking
} from "react-icons/fa";
import { Link } from 'react-router-dom';

const features = [
  {
    icon: <FaChalkboardTeacher className="text-3xl" />,
    hoverIcon: <FaCode className="text-3xl" />,
    title: "Live Interactive Coding",
    desc: "Engage in real-time coding sessions with industry experts, fostering practical skills.",
    stats: "500+ hours of live training",
    color: "from-amber-600 to-orange-700", // Primary brand gradient
  },
  {
    icon: <FaLaptopCode className="text-3xl" />,
    hoverIcon: <FaHandshake className="text-3xl" />, // Changed for project collaboration/networking
    title: "Real-World Project Portfolio",
    desc: "Build a robust portfolio with hands-on projects, ready to showcase to potential employers.",
    stats: "5+ industry-grade projects",
    color: "from-orange-700 to-amber-600", // Inverted gradient for variety
  },
  {
    icon: <FaUserTie className="text-3xl" />,
    hoverIcon: <FaUserTie className="text-3xl" />,
    title: "Dedicated Career Mentorship",
    desc: "Receive personalized guidance on career paths, interview preparation, and job search strategies.",
    stats: "1-on-1 mentor sessions",
    color: "from-amber-500 to-orange-600", // Another shade variant
  },
  {
    icon: <FaSyncAlt className="text-3xl" />, // Changed icon for continuous updates
    hoverIcon: <FaSyncAlt className="text-3xl" />,
    title: "Continuously Updated Curriculum",
    desc: "Stay ahead with courses that evolve with the latest Java technologies and industry trends.",
    stats: "Access to future updates",
    color: "from-orange-600 to-amber-500", // Another shade variant
  },
];

export default function FeaturesOverview() {
  return (
    <section className="relative py-16 overflow-hidden">
      {/* Decorative elements - adjusted colors to match brand */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 left-1/4 w-80 h-80 bg-amber-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-10 right-1/4 w-60 h-60 bg-orange-600 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-orange-700">Core Advantages</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-amber-600 to-orange-700 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Experience the difference with a learning environment designed for your success in Java development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="relative group"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-100 rounded-2xl transition-all duration-300`}
              ></div>

              <div className="relative h-full bg-white rounded-2xl p-8 shadow-xl group-hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden">
                {/* Icon animation */}
                <motion.div
                  className="relative z-10 mb-6"
                  initial={{ rotate: 0 }}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <div
                    className={`w-20 h-20 rounded-full flex items-center justify-center bg-gradient-to-br ${feature.color} text-white mx-auto`}
                  >
                    <div className="group-hover:hidden block">
                      {feature.icon}
                    </div>
                    <div className="hidden group-hover:block">
                      {feature.hoverIcon}
                    </div>
                  </div>
                </motion.div>

                <h3 className="text-xl font-bold text-gray-800  mb-3 relative z-10">
                  {feature.title}
                </h3>
                <p className="text-gray-600  mb-4 relative z-10">
                  {feature.desc}
                </p>
                <p className="text-sm font-medium text-gray-500 relative z-10">
                  {feature.stats}
                </p>

                {/* Hover effect line */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-amber-600 to-orange-700 group-hover:w-full transition-all duration-500"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats banner - Redesigned */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-amber-600 to-orange-700 rounded-xl p-6 text-white shadow-lg"
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <h3 className="text-xl font-bold mb-2">
                Ready to elevate your Java career?
              </h3>
              <p className="opacity-90">
                Join thousands of successful Java developers.
              </p>
            </div>
            <Link
              to="/contact"
              className="bg-white text-orange-700 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors shadow-md"
            >
              Enroll Now
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}