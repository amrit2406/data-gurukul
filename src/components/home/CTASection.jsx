import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const PRIMARY_COLOR = "#023270";
const SECONDARY_COLOR = "#796202";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const ctaItemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  hover: {
    scale: 1.05,
    boxShadow: `0 15px 30px -5px ${SECONDARY_COLOR}88, 0 8px 15px -8px ${PRIMARY_COLOR}66`,
    transition: { duration: 0.3 },
  },
};

const MotionLink = motion(Link);

const CtaSection = () => {
  return (
    <section className="relative bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
        {/* Left Side: Large Text */}
        <motion.div
  initial={{ opacity: 0, x: -50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  className="flex-1 rounded-3xl text-white shadow-lg flex flex-col justify-center 
             p-6 sm:p-10 lg:p-16"
  style={{ backgroundColor: PRIMARY_COLOR }}
>
  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-snug sm:leading-tight tracking-tight mb-4 sm:mb-6">
    Ready to Launch Your{" "}
    <span className="text-yellow-500">High-Growth Career?</span>
  </h2>
  <p className="text-base sm:text-lg leading-relaxed max-w-lg font-medium">
    Don’t wait for the future. Define it with mastery in Data Science
    and Generative AI.
  </p>
</motion.div>


        {/* Right Side: Floating CTAs */}
        <motion.div
          className="flex-1 grid grid-cols-1 gap-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* CTA 1 */}
          <MotionLink
            to="/courses" // 👈 React Router uses "to"
            className="relative block rounded-3xl bg-white border-2 border-yellow-500 shadow-2xl p-10 cursor-pointer group"
            variants={ctaItemVariants}
            whileHover="hover"
          >
            <div className="flex items-center space-x-4 mb-6">
              <BookOpen className="text-yellow-500 w-10 h-10 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-yellow-600 transition-colors duration-300">
                View Detailed Programs
              </h3>
            </div>
            <p className="text-gray-700 mb-8 font-semibold">
              Explore the full curriculum, project portfolio, and pricing for
              every course we offer.
            </p>
            <span
              className="inline-flex items-center font-bold text-yellow-600 group-hover:text-yellow-800"
              aria-label="Start Learning Now"
            >
              Start Learning Now <ArrowRight className="w-5 h-5 ml-2" />
            </span>
          </MotionLink>

          {/* CTA 2 */}
          <MotionLink
            to="/contact" // 👈 use "to" instead of "href" in React Router
            className="relative block rounded-3xl bg-white border-2 border-blue-600 shadow-lg p-10 cursor-pointer group"
            variants={ctaItemVariants}
            whileHover="hover"
          >
            <div className="flex items-center space-x-4 mb-6">
              <Zap className="text-blue-600 w-10 h-10 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-2xl font-extrabold text-gray-900 group-hover:text-blue-700 transition-colors duration-300">
                Book a Free 1-on-1 Demo
              </h3>
            </div>
            <p className="text-gray-700 mb-8 font-semibold">
              Speak with an expert mentor, get personalized career advice, and
              see the platform live.
            </p>
            <span
              className="inline-flex items-center font-bold text-blue-600 group-hover:text-blue-800"
              aria-label="Schedule Consultation"
            >
              Schedule Consultation →
            </span>
          </MotionLink>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
