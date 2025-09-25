import React from "react";
import { motion } from "framer-motion";
import { Database, Code, Cpu, TrendingUp, Rocket } from "lucide-react";
import { Link } from "react-router-dom";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const headerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 12 },
  },
  hover: {
    y: -8,
    boxShadow:
      "0 25px 40px -10px rgba(121, 98, 2, 0.3), 0 15px 20px -10px rgba(2, 50, 112, 0.4)",
    transition: { duration: 0.35 },
  },
};

const PRIMARY_COLOR = "#023270";
const SECONDARY_COLOR = "#796202";

const courseDomains = [
  {
    title: "Python Programming",
    icon: Code,
    color: "text-yellow-600",
    description:
      "Learn Python from the ground up and build a strong foundation in programming for data science.",
    slug: "python",
    courses: [
      "Python for Data Science (Beginner to Advanced)",
      "Data Wrangling & Automation with Python",
    ],
    tags: ["Core", "Beginner", "Programming"],
  },
  {
    title: "SQL & Database Management",
    icon: Database,
    color: "text-indigo-600",
    description:
      "Master SQL and database concepts to efficiently store, query, and manage data for analysis.",
    slug: "sql",
    courses: [
      "Advanced SQL Queries & Optimization",
      "Database Design & Management",
    ],
    tags: ["Core", "Database", "SQL"],
  },
  {
    title: "Business Intelligence with Power BI",
    icon: TrendingUp,
    color: "text-teal-600",
    description:
      "Transform raw datasets into powerful dashboards and reports to drive business decisions.",
    slug: "powerbi",
    courses: [
      "Power BI Mastery",
      "Data Storytelling & Visualization Best Practices",
    ],
    tags: ["BI", "Analytics", "Visualization"],
  },
  {
    title: "Machine Learning",
    icon: Cpu,
    color: "text-red-600",
    description:
      "Build predictive models and gain hands-on experience with real-world machine learning applications.",
    slug: "ml",
    courses: [
      "Machine Learning with Scikit-learn",
      "Deep Learning Fundamentals with TensorFlow",
    ],
    tags: ["ML", "AI", "Applied"],
  },
];

const CoursesSection = () => (
  <section id="courses" className="py-20 sm:py-32 bg-white relative">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <motion.div
        className="text-center max-w-3xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.p
          className="text-lg font-semibold uppercase tracking-widest"
          style={{ color: PRIMARY_COLOR, letterSpacing: "0.15em" }}
          variants={headerVariants}
        >
          Our Programs
        </motion.p>
        <motion.h2
          className="mt-2 text-4xl font-extrabold text-gray-900 sm:text-5xl"
          variants={headerVariants}
        >
          In-Demand Data Science{" "}
          <span style={{ color: PRIMARY_COLOR }}>Courses.</span>
        </motion.h2>
        <motion.p
          className="mt-4 mx-auto max-w-2xl text-xl text-gray-600"
          variants={headerVariants}
        >
          Choose your path from foundational programming to the advanced
          frontiers of Generative AI.
        </motion.p>
      </motion.div>

      {/* Courses Grid */}
      <motion.div
        className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {courseDomains.map((domain, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover="hover"
            className="bg-gray-50 rounded-xl border border-gray-200 shadow-md cursor-pointer flex flex-col p-6 h-full"
          >
            <div className="flex items-center space-x-4">
              <domain.icon className={`h-8 w-8 ${domain.color}`} />
              <h3 className="text-xl font-bold text-gray-900">
                {domain.title}
              </h3>
            </div>
            <p className="mt-4 text-gray-600 italic text-sm">
              {domain.description}
            </p>

            <div className="mt-4 flex-grow">
              <h4 className="font-semibold text-md text-gray-800 mb-2">
                Featured Courses:
              </h4>
              <ul className="space-y-2">
                {domain.courses.map((course, i) => (
                  <li
                    key={i}
                    className="flex items-center space-x-2 text-gray-700 text-sm"
                  >
                    <Rocket className="h-4 w-4 text-blue-600 flex-shrink-0" />
                    <span>{course}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-100 flex flex-wrap gap-2">
              {domain.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Link to individual course page */}
            <Link
              to={`/courses/${domain.slug}`}
              className="mt-6 inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition duration-300"
            >
              View Details
              <span className="ml-1 transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
          </motion.div>
        ))}
      </motion.div>

      {/* View All Courses Button */}
      <div className="mt-20 flex flex-col sm:flex-row justify-center items-center gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.65, type: "spring", stiffness: 150 }}
          whileHover={{ scale: 1.05 }}
        >
          <Link
            to="/courses"
            className="inline-block rounded-lg border-2 border-[#796202] px-10 py-4 font-semibold text-[#796202] shadow-lg transition duration-300 hover:bg-[#796202] hover:text-white transform"
          >
            View All Courses
          </Link>
        </motion.div>
      </div>
    </div>
  </section>
);

export default CoursesSection;
