import React from "react";
import { motion } from "framer-motion";
import {
  Code,
  Database,
  BarChart3,
  BrainCircuit,
  Zap,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const PRIMARY_COLOR = "#023270";
const SECONDARY_COLOR = "#796202";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const courses = [
  {
    id: "python",
    title: "Python Mastery",
    icon: Code,
    description:
      "Master Python for powerful data science, automation, and analytics with hands-on projects and expert guidance.",
    color: "text-yellow-600",
  },
  {
    id: "sql",
    title: "SQL & Database Systems",
    icon: Database,
    description:
      "Learn advanced SQL queries and database management to handle and analyze large data sets effectively.",
    color: "text-indigo-600",
  },
  {
    id: "powerbi",
    title: "PowerBI Data Visualization",
    icon: BarChart3,
    description:
      "Turn data into impactful stories and dashboards using PowerBI’s powerful visualization tools.",
    color: "text-teal-600",
  },
  {
    id: "tableau",
    title: "Tableau Data Storytelling",
    icon: BarChart3,
    description:
      "Develop professional dashboards and reports that communicate complex data simply using Tableau.",
    color: "text-purple-600",
  },
  {
    id: "ml",
    title: "Machine Learning Fundamentals",
    icon: BrainCircuit,
    description:
      "Build predictive models and understand algorithms through real-world examples with scikit-learn and TensorFlow.",
    color: "text-red-600",
  },
  {
    id: "genai",
    title: "Generative AI & LLMs Bootcamp",
    icon: Zap,
    description:
      "Dive into the future of AI with generative models, transformers, and prompt engineering.",
    color: "text-orange-600",
  },
];

const HeroBanner = () => (
  <motion.section
    className="text-white py-28 px-6 text-center"
    style={{ backgroundColor: PRIMARY_COLOR }}
    initial="hidden"
    animate="visible"
    variants={fadeInUp}
  >
    <h1 className="text-5xl font-extrabold max-w-4xl mx-auto">
      Explore Our{" "}
      <span className="underline decoration-yellow-400">
        In-Demand Data Science Courses
      </span>
    </h1>
    <p className="mt-6 max-w-3xl mx-auto text-lg font-medium text-yellow-300">
      Build skills, master projects, and prepare for a high-growth data career.
    </p>
  </motion.section>
);

const CourseCard = ({ course }) => {
  const Icon = course.icon;
  return (
    <motion.div
      className="bg-white rounded-xl shadow-lg p-8 flex flex-col hover:shadow-2xl transition cursor-pointer"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
      }}
    >
      <Icon className={`w-12 h-12 ${course.color} mb-5`} />
      <h3 className="text-xl font-semibold text-gray-900 mb-3">
        {course.title}
      </h3>
      <p className="text-gray-700 flex-grow">{course.description}</p>
      <motion.div> 
      {/* course info */}
      <Link
        to={`/courses/${course.id}`}
        className={`mt-6 inline-flex items-center text-sm font-semibold text-${course.color.replace(
          "text-",
          ""
        )} hover:text-${course.color.replace("text-", "")}-dark transition`}
      >
        View Details →
      </Link>
    </motion.div>
    </motion.div>
  );
};

const CoursesPage = () => {
  return (
    <main className="bg-gray-50 min-h-screen">
      <HeroBanner />

      <section className="max-w-7xl mx-auto px-6 sm:px-12 py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {courses.map((course) => (
          <CourseCard key={course.title} course={course} />
        ))}
      </section>
    </main>
  );
};

export default CoursesPage;
