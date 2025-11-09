import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Code, Database, BarChart3, BrainCircuit, Zap, TrendingUp, Cpu } from "lucide-react";

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
      "Master Python programming for data science and automation with guided projects and exercises.",
    color: "text-yellow-600",
  },
  {
    id: "sql",
    title: "SQL & Database Systems",
    icon: Database,
    description:
      "Advanced SQL queries and database design taught through real-world examples and scenarios.",
    color: "text-indigo-600",
  },
  {
    id: "powerbi",
    title: "PowerBI Data Visualization",
    icon: BarChart3,
    description:
      "Learn to turn raw data into compelling reports and dashboards with PowerBI.",
    color: "text-teal-600",
  },
  {
    id: "tableau",
    title: "Tableau Data Storytelling",
    icon: BarChart3,
    description:
      "Create interactive visualizations and data stories using Tableau’s powerful platform.",
    color: "text-purple-600",
  },
  {
    id: "ml",
    title: "Machine Learning Fundamentals",
    icon: BrainCircuit,
    description:
      "Understand and build ML models with hands-on experience using sklearn and TensorFlow.",
    color: "text-red-600",
  },
  {
    id: "genai",
    title: "Generative AI & LLMs Bootcamp",
    icon: Zap,
    description:
      "Explore the exciting world of generative AI and large language models with practical projects.",
    color: "text-orange-600",
  },
  {
    id: "analytics",
    title: "Professional Data Analytics",
    icon: TrendingUp,
    description:
      "Develop expertise in data analysis, visualization, and storytelling using Excel, SQL, Power BI, and Tableau.",
    color: "text-green-600",
  },
  {
    id: "datascience",
    title: "Professional Data Science",
    icon: Cpu,
    description:
      "Master statistics, machine learning, and deep learning with end-to-end real-world projects.",
    color: "text-pink-600",
  },
];

const HeroBanner = () => (
  <motion.section
    className="text-white py-28 px-6 sm:px-12 text-center"
    style={{ backgroundColor: PRIMARY_COLOR }}
    initial="hidden"
    animate="visible"
    variants={fadeInUp}
  >
    <h1 className="text-5xl sm:text-6xl font-extrabold max-w-4xl mx-auto">
      Explore Our{" "}
      <span className="underline decoration-yellow-400">
        Syllabus and Courses
      </span>
    </h1>
    <p className="mt-6 max-w-3xl mx-auto text-lg sm:text-xl text-yellow-300 font-semibold">
      Choose a course to dive into detailed syllabus and start learning
      effectively.
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
      <Link
        to={`/syllabus/${course.id}`}
        className={`mt-6 inline-block text-${course.color.replace(
          "text-",
          ""
        )} font-semibold hover:underline`}
      >
        View Syllabus →
      </Link>
    </motion.div>
  );
};

const SyllabusPage = () => {
  return (
    <main className="bg-gray-50 min-h-screen">
      <HeroBanner />
      <section className="max-w-7xl mx-auto px-6 sm:px-12 py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </section>
    </main>
  );
};

export default SyllabusPage;
