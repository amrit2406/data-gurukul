import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Users, Gem, GraduationCap, Video, FileText, Headphones } from "lucide-react";

const PRIMARY_COLOR = "#023270";
const SECONDARY_COLOR = "#796202";
const SECONDARY_BG = "rgba(121, 98, 2, 0.1)";
const PRIMARY_BG = "rgba(2, 50, 112, 0.1)";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, type: "tween" } },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8, rotate: -5 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { type: "spring", stiffness: 150, damping: 12 },
  },
  hover: {
    scale: 1.05,
    boxShadow: `0 6px 18px ${SECONDARY_COLOR}66, 0 12px 40px ${PRIMARY_COLOR}44`,
    transition: { duration: 0.3 },
  },
};

const KSPs = [
  {
    icon: Briefcase,
    title: "Industry-Ready Curriculum",
    description:
      "Focus on practical projects, real-world case studies, and tools demanded by top companies.",
    color: SECONDARY_COLOR,
    bg: SECONDARY_BG,
  },
  {
    icon: Users,
    title: "Expert Mentor Network",
    description:
      "Learn directly from senior Data Scientists and AI Engineers working at FAANG and major firms.",
    color: PRIMARY_COLOR,
    bg: PRIMARY_BG,
  },
  {
    icon: Gem,
    title: "Guaranteed Placement Support",
    description:
      "Personalized resume building, mock interviews, and exclusive job portal access.",
    color: SECONDARY_COLOR,
    bg: SECONDARY_BG,
  },
  {
    icon: GraduationCap,
    title: "Generative AI Focus",
    description:
      "Dedicated modules on LLMs, Stable Diffusion, and prompt engineering.",
    color: "#7c3aed",
    bg: "rgba(124, 58, 237, 0.12)",
  },
  {
    icon: Video,
    title: "Live Training",
    description: "Interactive live sessions with hands-on exercises and Q&A.",
    color: "#16a34a", // green
    bg: "rgba(22, 163, 74, 0.12)",
  },
  {
    icon: FileText,
    title: "Resume Building",
    description:
      "Craft professional resumes tailored for data science and AI roles.",
    color: "#f59e0b", // amber
    bg: "rgba(245, 158, 11, 0.12)",
  },
  {
    icon: Users,
    title: "Soft Skills Training",
    description:
      "Improve communication, teamwork, and presentation skills for professional success.",
    color: "#0ea5e9", // sky blue
    bg: "rgba(14, 165, 233, 0.12)",
  },
  {
    icon: Headphones,
    title: "Mock Interviews",
    description:
      "Practice real-world interview scenarios with mentors and get actionable feedback.",
    color: "#ef4444", // red
    bg: "rgba(239, 68, 68, 0.12)",
  },
];


const KeyFeatures = () => (
  <section
    id="about"
    className="py-18 bg-gradient-to-br from-white via-[#f7f7f5] to-[#f1f3f7]"
  >
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <motion.div
        className="text-center max-w-5xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.p
          className="text-lg font-semibold uppercase tracking-widest"
          style={{ color: PRIMARY_COLOR, letterSpacing: 2 }}
          variants={textVariants}
        >
          Why Choose Data Gurukul?
        </motion.p>

        <motion.h2
          className="mt-2 text-4xl font-extrabold text-gray-900 sm:text-5xl "
          variants={textVariants}
        >
          Your Accelerated Path to Data Mastery{" "}
          {/* <span style={{ color: PRIMARY_COLOR }}>Data Mastery</span> */}
        </motion.h2>

        <motion.p
          className="mt-6 mx-auto max-w-4xl text-xl text-gray-600"
          variants={textVariants}
        >
          We are more than just an institute. Data Gurukul is an intensive,
          project-based academy transforming aspirants into professional Data
          Scientists and AI specialists ready for the modern workplace.
        </motion.p>
        <motion.p
          className="mt-6 mx-auto max-w-3xl text-xl text-gray-600"
          variants={textVariants}
        >
          Along with core concepts, you’ll gain hands-on experience with major cloud
          platforms like AWS, Azure, and GCP — a must-have skill for modern data
          pipelines and scalable AI solutions.
        </motion.p>
      </motion.div>

      <motion.div
      className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {KSPs.map((ksp, idx) => {
        const Icon = ksp.icon;
        return (
          <motion.div
            key={idx}
            className="rounded-3xl p-6 shadow-xl bg-white/90 backdrop-blur-sm border border-gray-100 cursor-pointer"
            style={{ backgroundColor: ksp.bg, borderColor: ksp.color }}
            variants={cardVariants}
            whileHover="hover"
          >
            <div className="flex items-center space-x-4">
              <Icon
                className="p-2 bg-white rounded-full"
                style={{
                  color: ksp.color,
                  boxShadow: `0 0 15px ${ksp.color}55`,
                  width: 44,
                  height: 44,
                }}
              />
              <h3 className="text-lg sm:text-xl font-extrabold text-gray-900">
                {ksp.title}
              </h3>
            </div>
            <p className="mt-4 text-gray-700 text-sm sm:text-base leading-relaxed">
              {ksp.description}
            </p>
          </motion.div>
        );
      })}
    </motion.div>
    </div>
  </section>
);

export default KeyFeatures;
