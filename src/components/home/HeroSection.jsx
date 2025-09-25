import React from "react";
import { motion } from "framer-motion";
import {
  Code,
  Database,
  BarChart3,
  BrainCircuit,
  Sparkles,
  Star,
  Users,
  Target,
  ShieldCheck,
} from "lucide-react";
import { FaGraduationCap } from "react-icons/fa";
import { Link } from "react-router-dom";
import home from "../../assets/home.png";

// --- Color Constants ---
const PRIMARY_COLOR = "#023270"; // Deep blue
const SECONDARY_COLOR = "#796202"; // Muted gold
const PRIMARY_LIGHT = "#02327020"; // Light blue with opacity
const SECONDARY_LIGHT = "#79620220"; // Light gold with opacity

// --- Framer Motion Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const textItemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
      duration: 0.8,
    },
  },
};

const ctaVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 15,
    },
  },
  hover: {
    scale: 1.05,
    y: -2,
    transition: { duration: 0.3 },
  },
};

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 20 },
  },
  hover: {
    scale: 1.1,
    y: -3,
    transition: { type: "spring", stiffness: 400 },
  },
};

const visualVariants = {
  hidden: { opacity: 0, scale: 0.8, rotate: -5 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      duration: 1.2,
    },
  },
};

// --- Course Data ---
const courseFeatures = [
  { name: "Python", icon: Code, color: SECONDARY_COLOR },
  { name: "SQL", icon: Database, color: PRIMARY_COLOR },
  { name: "PowerBI/Tableau", icon: BarChart3, color: SECONDARY_COLOR },
  { name: "Machine Learning", icon: BrainCircuit, color: PRIMARY_COLOR },
  { name: "Generative AI", icon: Sparkles, color: SECONDARY_COLOR },
];

const stats = [
  {
    icon: Users,
    value: "1500+",
    label: "Successful Graduates",
    color: SECONDARY_COLOR,
  },
  {
    icon: Star,
    value: "4.8/5",
    label: "Student Rating",
    color: SECONDARY_COLOR,
  },
  {
    icon: Target,
    value: "100%",
    label: "Placement Assistance",
    color: PRIMARY_COLOR,
  },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50/30 py-18 sm:py-18">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100/20 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-100/20 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{
              background: i % 2 === 0 ? PRIMARY_COLOR : SECONDARY_COLOR,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: 0.3,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="lg:grid lg:grid-cols-12 lg:gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* LEFT COLUMN: Text Content */}
          <div className="lg:col-span-7 xl:col-span-7">
            {/* Badge */}
            {/* <motion.div
              className="inline-flex items-center px-4 py-2 rounded-full bg-white shadow-lg border border-gray-100 mb-6"
              variants={textItemVariants}
            >
              <ShieldCheck
                className="w-4 h-4 mr-2"
                style={{ color: SECONDARY_COLOR }}
              />
              <span
                className="text-sm font-semibold"
                style={{ color: PRIMARY_COLOR }}
              >
                🎯 Most Comprehensive Data Science Program
              </span>
            </motion.div> */}

            {/* H1 Headline */}
            <motion.h1
              className="text-4xl sm:text-3xl md:text-5xl font-bold tracking-tight text-gray-900 leading-tight"
              variants={textItemVariants}
            >
              Future-Proof Your{" "}
              <span
                className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent"
                style={{
                  backgroundImage: `linear-gradient(135deg, ${PRIMARY_COLOR}, #001a3d)`,
                }}
              >
                Career
              </span>
              <br />
              Master Data Science{" "}
              <span
                className="bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent"
                style={{
                  backgroundImage: `linear-gradient(135deg, ${SECONDARY_COLOR}, #5a4a00)`,
                }}
              >
                & AI
              </span>
            </motion.h1>

            {/* Sub-Headline */}
            <motion.p
              className="mt-8 text-xl text-gray-600 sm:text-2xl max-w-2xl leading-relaxed"
              variants={textItemVariants}
            >
              Accelerate your journey in <strong>Python</strong>,{" "}
              <strong>Machine Learning</strong>, and{" "}
              <strong>Generative AI</strong>. Learn from industry experts and
              secure your dream data role with hands-on projects.
            </motion.p>

            {/* Feature Badges */}
            <motion.div
              className="mt-10 flex flex-wrap gap-4"
              variants={containerVariants}
            >
              {courseFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-3 rounded-2xl px-4 py-2 font-medium bg-white shadow-lg border border-gray-100 cursor-pointer group hover:shadow-xl transition-all duration-300"
                  style={{
                    borderLeft: `4px solid ${feature.color}`,
                    transform: "translateY(0)",
                  }}
                  variants={badgeVariants}
                  whileHover="hover"
                >
                  <feature.icon
                    className="w-5 h-5 transition-transform duration-300 group-hover:scale-110"
                    style={{ color: feature.color }}
                  />
                  <span className="text-gray-800 font-semibold">
                    {feature.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              className="mt-12 flex flex-col sm:flex-row gap-4"
              variants={textItemVariants}
            >
              {/* 🚀 Explore Our Courses */}
              <motion.div variants={ctaVariants} whileHover="hover">
                <Link
                  to="/courses"
                  className="rounded-xl px-8 py-4 text-lg font-semibold text-white shadow-lg relative overflow-hidden group block text-center"
                  style={{
                    background: `linear-gradient(135deg, ${PRIMARY_COLOR}, #001a3d)`,
                    border: `2px solid ${PRIMARY_COLOR}`,
                  }}
                >
                  <span className="relative z-10 flex items-center justify-center">
                    🚀 Explore Our Courses
                  </span>
                  <div className="absolute inset-0 bg-white/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </Link>
              </motion.div>

              {/* 📞 Contact Us */}
              <motion.div variants={ctaVariants} whileHover="hover">
                <Link
                  to="/contact"
                  className="rounded-xl border-2 px-8 py-4 text-lg font-semibold shadow-lg relative overflow-hidden group block text-center"
                  style={{
                    borderColor: SECONDARY_COLOR,
                    color: SECONDARY_COLOR,
                    background: "white",
                  }}
                >
                  <span className="relative z-10 flex items-center justify-center">
                    Contact Us
                  </span>
                  <div
                    className="absolute inset-0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                    style={{ backgroundColor: SECONDARY_LIGHT }}
                  ></div>
                </Link>
              </motion.div>
            </motion.div>

            {/* Social Proof Bar */}
            {/* <motion.div 
              className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6"
              variants={textItemVariants}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-4 p-4 rounded-2xl bg-white/80 backdrop-blur-sm shadow-lg border border-gray-100"
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div 
                    className="p-3 rounded-xl"
                    style={{ backgroundColor: `${stat.color}15` }}
                  >
                    <stat.icon className="w-6 h-6" style={{ color: stat.color }} />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div> */}
          </div>

          {/* RIGHT COLUMN: Visual Section */}
          <div className="hidden lg:col-span-5 lg:block xl:col-span-5 self-center mt-10 lg:mt-0">
            <motion.div
              variants={visualVariants}
              className="relative w-full h-96"
            >
              {/* Central img */}
              <div className="flex items-center justify-center">
                <img
                  src={home}
                  alt="Background Logo"
                  className="w-full h-full object-contain"
                  // style={{ color: PRIMARY_COLOR }}
                />
              </div>

              {/* Main visual container */}
              <div className="absolute inset-0 overflow-hidden">
                {/* Animated background pattern */}
                <div className="absolute inset-0 opacity-[0.03]">
                  <div
                    className="absolute w-full h-full"
                    style={{
                      backgroundImage: `radial-gradient(circle at 25% 25%, ${PRIMARY_COLOR} 2px, transparent 2px)`,
                      backgroundSize: "50px 50px",
                    }}
                  ></div>
                </div>

                {/* Central icon with gradient */}
                <div className="flex items-center justify-center">
                  <motion.div
                    className="relative"
                    animate={{
                      y: [0, -10, 0],
                      rotate: [0, 5, 0, -5, 0],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <div className="relative w-full h-full">
                      {/* Outer ring */}
                      <motion.div
                        className="absolute inset-0 rounded-full border-4 opacity-20"
                        style={{ borderColor: PRIMARY_COLOR }}
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 20,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      />

                      {/* Middle ring */}
                      <motion.div
                        className="absolute inset-4 rounded-full border-4 opacity-30"
                        style={{ borderColor: SECONDARY_COLOR }}
                        animate={{ rotate: -360 }}
                        transition={{
                          duration: 15,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      />
                    </div>
                  </motion.div>
                </div>

                {/* Floating elements */}
                <motion.div
                  className="absolute top-8 left-8 w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center"
                  animate={{
                    y: [0, -15, 0],
                    rotate: [0, 10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: 0.5,
                  }}
                >
                  <Code className="w-8 h-8" style={{ color: PRIMARY_COLOR }} />
                </motion.div>

                <motion.div
                  className="absolute bottom-8 right-8 w-14 h-14 bg-white rounded-2xl shadow-lg flex items-center justify-center"
                  animate={{
                    y: [0, 15, 0],
                    rotate: [0, -10, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    delay: 1,
                  }}
                >
                  <Sparkles
                    className="w-7 h-7"
                    style={{ color: SECONDARY_COLOR }}
                  />
                </motion.div>

                {/* Bottom text */}
                {/* <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
                  <div className="bg-white/90 backdrop-blur-sm px-6 py-2 rounded-full shadow-lg">
                    <span
                      className="font-bold text-lg"
                      style={{ color: PRIMARY_COLOR }}
                    >
                      Data Gurukul
                    </span>
                  </div>
                </div> */}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
