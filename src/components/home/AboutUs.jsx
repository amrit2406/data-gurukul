import React from "react";
import { motion } from "framer-motion";
import { Target, Users, TrendingUp } from "lucide-react";
import abt from "../../assets/about5.png";

// Color Constants
const PRIMARY = "#023270";
const GOLD = "#796202";
const PRIMARY_LIGHT = "#02327022";
const GOLD_LIGHT = "#79620222";

// Animation Variants
const sectionContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
};

const itemSlideUp = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, type: "spring", stiffness: 80 },
  },
};

const focusPoints = [
  {
    icon: Target,
    title: "Our Mission",
    text: "To provide the highest quality education in Data Science and Artificial Intelligence, bridging the gap between academic theory and industry demand through rigorous, project-focused training, and ensuring every student is prepared for meaningful employment in the AI-driven world.",
    color: GOLD,
    bg: GOLD_LIGHT,
  },
  {
    icon: TrendingUp,
    title: "Our Vision",
    text: "To establish our own AI-based company in Bhubaneswar, where our students will not only design and deliver innovative business solutions for clients but also drive research, entrepreneurship, and industry collaboration, positioning Bhubaneswar as a hub for AI innovation.",
    color: PRIMARY,
    bg: PRIMARY_LIGHT,
  },
  {
    icon: Users,
    title: "Our Values",
    text: "Excellence, Mentorship, and Real-World Impact. These are the pillars that define every course and every student interaction.",
    color: GOLD,
    bg: GOLD_LIGHT,
  },
];

const MissionAboutSection = () => (
  <section
    id="mission-about"
    // Adjusted py for better mobile spacing
    className="relative overflow-hidden bg-gradient-to-br from-[#f6f7fa] via-[#f5f2ee] to-[#e9f0fa] py-12 sm:py-18" 
  >
    {/* Decorative blurred blobs (Positioning fine for responsive) */}
    <div
      className="absolute -top-32 -left-32 w-96 h-96 rounded-full"
      style={{ background: PRIMARY_LIGHT, filter: "blur(60px)", zIndex: 0 }}
    ></div>
    <div
      className="absolute bottom-0 right-0 w-80 h-80 rounded-full"
      style={{ background: GOLD_LIGHT, filter: "blur(36px)", zIndex: 0 }}
    ></div>

    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 z-10">
      <motion.div
        variants={sectionContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="space-y-12 sm:space-y-16" // Adjusted space for mobile
      >
        <motion.h2
          // Added text-3xl for mobile, default is 4xl
          className="text-3xl sm:text-4xl font-black leading-tight text-center text-transparent bg-clip-text"
          style={{
            backgroundImage: `linear-gradient(120deg, ${PRIMARY}, ${GOLD} 70%)`,
          }}
          variants={itemSlideUp}
        >
          About Data Gurukul
        </motion.h2>

        {/* === BLOCK 1: VISUAL (IMAGE) === */}
        <motion.div
          className="flex justify-center"
          variants={itemSlideUp}
        >
          <div className="w-full h-64 sm:h-80 md:h-96 lg:h-[28rem] flex items-center justify-center max-w-4xl">
            <img
              src={abt}
              alt="Experts illustration"
              loading="lazy"
              className="w-full h-full object-contain block"
            />
          </div>
        </motion.div>

        {/* === BLOCK 2: DETAILS/STORY (TEXT) === */}
        <div className="space-y-6 sm:space-y-8 max-w-5xl mx-auto">

          <motion.p
            // Reduced mt for mobile, maintained text-xl
            className="mt-4 text-lg sm:text-xl text-gray-700 font-medium" 
            style={{ borderLeft: `5px solid ${PRIMARY}`, paddingLeft: 12 }} // Adjusted padding for mobile
            variants={itemSlideUp}
          >
            Founded in 2023,{" "}
            <span style={{ color: PRIMARY, fontWeight: 700 }}>
              Data Gurukul
            </span>
            {" "}began its journey through online classes, mentoring students from across India and helping them secure placements in organizations ranging from startups to established companies. We started with the intention of providing students with the best possible education—delivered in a way that is engaging, enjoyable, and impactful. True to the spirit of a Gurukul, we welcome learners from every background and ensure they gain knowledge from scratch, step by step, until they are industry-ready. Our mentors are NASSCOM-certified experts with rich experience in both industry and training, ensuring that every learner receives guidance that bridges knowledge with real-world application.
          </motion.p>

          <motion.p
            // Reduced mt and text size for mobile
            className="mt-6 text-lg sm:text-xl text-gray-700 italic bg-white/70 rounded-xl px-4 py-3 shadow-lg"
            style={{ borderLeft: `3px solid ${GOLD}`, color: PRIMARY }}
            variants={itemSlideUp}
          >
            "Our philosophy:{" "}
            <span style={{ color: GOLD, fontWeight: 700 }}>
              Learn by Doing
            </span>
            . Every module—from Python basics to advanced GenAI—ends with projects for your portfolio and career goals."
          </motion.p>
        </div>

        {/* --- BLOCK 3: MISSION/CORE PRINCIPLES (CARDS) --- */}
        <div className="border-t border-gray-300/60 pt-8 sm:pt-10">
          <motion.h3
            className="text-center text-2xl sm:text-3xl font-extrabold mb-8 sm:mb-12"
            style={{ color: PRIMARY }}
            variants={itemSlideUp}
          >
            Our Core Principles
          </motion.h3>
          
          <div className="grid grid-cols-1 gap-8 sm:gap-10 sm:grid-cols-3">
            {focusPoints.map((point, i) => (
              <motion.div
                key={i}
                // Mobile-friendly card styling
                className="rounded-2xl shadow-xl bg-white border p-6 pt-10 flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300"
                style={{
                  borderColor: point.color,
                  boxShadow: `0 8px 32px 0 ${point.color}18`,
                }}
                variants={itemSlideUp}
              >
                {/* Icon block design remains solid */}
                <div
                  className="w-14 h-14 -mt-16 flex items-center justify-center rounded-xl mb-4"
                  style={{
                    background: point.bg,
                    boxShadow: `0 2px 16px 0 ${point.color}33`,
                  }}
                >
                  <point.icon
                    className="h-8 w-8"
                    style={{ color: point.color }}
                  />
                </div>
                <h4
                  // Slightly reduced text size for mobile
                  className="mt-3 text-xl sm:text-2xl font-extrabold"
                  style={{ color: point.color }}
                >
                  {point.title}
                </h4>
                <p className="mt-3 text-sm sm:text-base text-gray-700">{point.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default MissionAboutSection;