import React from "react";
import { motion } from "framer-motion";
import { Target, Users, TrendingUp } from "lucide-react";
import abt from "../../assets/about.png";

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
      staggerChildren: 0.12,
      delayChildren: 0.18,
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
    text: "To bridge the gap between academic theory and industry demand by delivering rigorous, project-focused training.",
    color: GOLD,
    bg: GOLD_LIGHT,
  },
  {
    icon: TrendingUp,
    title: "Our Vision",
    text: "To become India’s leading accelerator for Data Science careers, powered by industry mentorship and cutting-edge Gen AI research.",
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
    className="relative overflow-hidden bg-gradient-to-br from-[#f6f7fa] via-[#f5f2ee] to-[#e9f0fa] py-24 sm:py-32"
  >
    {/* Decorative blurred blobs */}
    <div
      className="absolute -top-32 -left-32 w-96 h-96 rounded-full"
      style={{ background: PRIMARY_LIGHT, filter: "blur(60px)", zIndex: 0 }}
    ></div>
    <div
      className="absolute bottom-0 right-0 w-80 h-80 rounded-full"
      style={{ background: GOLD_LIGHT, filter: "blur(36px)", zIndex: 0 }}
    ></div>
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
      <motion.div
        className="lg:grid lg:grid-cols-12 lg:gap-14 items-center"
        variants={sectionContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* LEFT: Visual Block */}
        <motion.div
          className="lg:col-span-5 flex flex-col justify-center mb-12 lg:mb-0 relative"
          variants={itemSlideUp}
        >
          <motion.div
            className="rounded-3xl shadow-2xl overflow-hidden flex flex-col relative border-2 bg-white"
            style={{ borderColor: GOLD, minHeight: 340 }}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, type: "tween" }}
          >
            {/* Image wrapper — keeps whole illustration visible */}
            <div className="w-full h-64 md:h-72 lg:h-80 rounded-t-3xl overflow-hidden bg-white flex items-center justify-center">
              <img
                src={abt}
                alt="Experts illustration"
                loading="lazy"
                className="max-w-full max-h-full object-contain block"
              />
            </div>

            {/* Text section */}
            {/* <motion.h3
              className="relative z-10 text-2xl font-extrabold px-6 py-6 text-left"
              style={{ color: GOLD, textShadow: `0 4px 14px ${PRIMARY}46` }}
              variants={itemSlideUp}
            >
              Guided by Experts.
              <br /> Driven by Data.
            </motion.h3> */}
          </motion.div>
        </motion.div>

        {/* RIGHT: Story and Mission */}
        <div className="lg:col-span-7 z-10">
          <motion.span
            className="text-lg font-semibold uppercase tracking-widest px-4 py-2 rounded-full shadow bg-white/80 mb-2 inline-block"
            style={{
              color: PRIMARY,
              borderLeft: `4px solid ${GOLD}`,
              letterSpacing: 2,
            }}
            variants={itemSlideUp}
          >
            Our Story
          </motion.span>
          <motion.h2
            className="mt-2 text-4xl font-black leading-tight text-transparent bg-clip-text"
            style={{
              backgroundImage: `linear-gradient(120deg, ${PRIMARY}, ${GOLD} 70%)`,
            }}
            variants={itemSlideUp}
          >
            The Data Gurukul
            <br />
            Difference
          </motion.h2>
          <motion.p
            className="mt-6 text-xl text-gray-700 font-medium"
            style={{ borderLeft: `5px solid ${PRIMARY}`, paddingLeft: 18 }}
            variants={itemSlideUp}
          >
            <span style={{ color: PRIMARY, fontWeight: 700 }}>
              Data Gurukul
            </span>{" "}
            is an academy dedicated to building industry-ready Data Scientists
            and AI professionals. Our programs focus on hands-on projects,
            real-world tools, and the practical skills that top tech companies
            demand, ensuring learners are fully prepared for high-growth
            careers.
          </motion.p>

          <motion.p
            className="mt-5 text-xl text-gray-700 italic bg-white/70 rounded-xl px-5 py-3 shadow-lg"
            style={{ borderLeft: `3px solid ${GOLD}`, color: PRIMARY }}
            variants={itemSlideUp}
          >
            "Our philosophy:{" "}
            <span style={{ color: GOLD, fontWeight: 700 }}>Learn by Doing</span>
            . Every module—from Python basics to advanced GenAI—ends with
            projects for your portfolio and career goals."
          </motion.p>
          {/* Mission/Vision/Values Cards */}
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {focusPoints.map((point, i) => (
              <motion.div
                key={i}
                className="rounded-2xl shadow-lg bg-white border"
                style={{
                  borderColor: point.color,
                  boxShadow: `0 4px 24px 0 ${point.color}24`,
                }}
                variants={itemSlideUp}
              >
                <div
                  className="w-12 h-12 mx-auto -mt-7 flex items-center justify-center rounded-xl"
                  style={{
                    background: point.bg,
                    boxShadow: `0 1px 12px 0 ${point.color}22`,
                  }}
                >
                  <point.icon
                    className="h-7 w-7"
                    style={{ color: point.color }}
                  />
                </div>
                <h4
                  className="mt-3 text-lg font-extrabold text-center"
                  style={{ color: point.color }}
                >
                  {point.title}
                </h4>
                <p className="mt-2 text-sm text-gray-600 px-4 pb-5 text-center">
                  {point.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default MissionAboutSection;
