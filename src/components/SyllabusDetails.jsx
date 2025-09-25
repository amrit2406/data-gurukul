import React, { useState } from "react";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import {
  FiClock,
  FiCode,
  FiDatabase,
  FiCpu,
  FiChevronDown,
  FiBookOpen,
  FiBarChart2 ,
  FiPieChart,
} from "react-icons/fi"; // Icons for visual appeal

// --- Styling Constants ---
const PRIMARY_COLOR = "#023270"; // Deep Blue
const SECONDARY_COLOR = "#796202"; // Gold/Ochre
const ACCENT_COLOR = "#3b82f6"; // A modern accent for buttons/details

// --- Framer Motion Variants ---
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerContainer = {
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// --- ENRICHED SYLLABUS DATA ---
const allSyllabusData = {
  python: {
    courseTitle: "Python",
    icon: FiCode,
    description:
      "A comprehensive course to master Python programming, focusing on core concepts and the essential libraries for data manipulation and analysis.",
    duration: "4 Months (Full-Time)",
    difficulty: "Intermediate",
    modules: [
      {
        title: "Module 1: Python Fundamentals (Weeks 1-4)",
        topics: [
          "Introduction, Setup, and Environment",
          "Variables, Data Types, and Operators",
          "Control Structures (if/else, loops) and Functions",
          "Object-Oriented Programming (OOP) Essentials",
        ],
      },
      {
        title: "Module 2: Data Manipulation & I/O (Weeks 5-8)",
        topics: [
          "Lists, Tuples, Sets, and Dictionaries",
          "File Handling (CSV, JSON, Text Files)",
          "Introduction to NumPy for Array Computing",
          "Mastering Pandas: DataFrames and Series",
        ],
      },
      {
        title: "Module 3: Advanced Topics & Projects (Weeks 9-16)",
        topics: [
          "Data Cleaning, Merging, and Reshaping with Pandas",
          "Data Visualization with Matplotlib and Seaborn",
          "Error Handling and Debugging",
          "Final Project: Exploratory Data Analysis (EDA)",
        ],
      },
    ],
  },
  sql: {
    courseTitle: "SQL",
    icon: FiDatabase,
    description:
      "Deep-dive into advanced SQL querying, database design principles, and performance tuning for professional data management.",
    duration: "3 Months (Part-Time)",
    difficulty: "Intermediate",
    modules: [
      {
        title: "Module 1: Core SQL and Normalization",
        topics: [
          "Basic SELECT, WHERE, GROUP BY, HAVING",
          "Complex Joins (Self-Join, Outer Joins) and Set Operations",
          "Database Design and Normalization (1NF, 2NF, 3NF)",
        ],
      },
      {
        title: "Module 2: Advanced Querying and Optimization",
        topics: [
          "Subqueries, Common Table Expressions (CTEs)",
          "Window Functions (ROW_NUMBER, LAG, RANK)",
          "Indexes, Execution Plans, and Query Optimization",
        ],
      },
      {
        title: "Module 3: Database Administration & Procedures",
        topics: [
          "Views, Stored Procedures, and Functions",
          "Transaction Management (ACID Properties)",
          "Security and Access Control Basics",
        ],
      },
    ],
  },
  powerbi: {
    courseTitle: "Power BI",
    icon: FiBarChart2, // You may need to import FiBarChart2 from react-icons/fi
    description:
      "Master data visualization and dashboard building using Power BI, empowering you to create impactful business insights and interactive reports.",
    duration: "2 Months (Part-Time)",
    difficulty: "Beginner to Intermediate",
    modules: [
      {
        title: "Module 1: Power BI Essentials",
        topics: [
          "Introduction to Power BI Desktop and Service",
          "Importing Data from Excel, SQL, and APIs",
          "Data Cleaning and Transformation with Power Query",
        ],
      },
      {
        title: "Module 2: Data Modeling and DAX",
        topics: [
          "Creating Relationships and Star Schema Design",
          "Calculated Columns, Measures, and KPIs",
          "Introduction to DAX Functions (SUMX, CALCULATE, FILTER)",
        ],
      },
      {
        title: "Module 3: Visualization and Dashboards",
        topics: [
          "Designing Interactive Reports and Dashboards",
          "Custom Visuals and Advanced Charts",
          "Publishing and Sharing Reports in Power BI Service",
        ],
      },
    ],
  },
  tableau: {
    courseTitle: "Tableau",
    icon: FiPieChart, // You may need to import FiPieChart from react-icons/fi
    description:
      "Gain expertise in Tableau to create powerful dashboards, perform visual analytics, and deliver compelling data-driven stories.",
    duration: "2 Months (Part-Time)",
    difficulty: "Beginner to Intermediate",
    modules: [
      {
        title: "Module 1: Tableau Basics",
        topics: [
          "Getting Started with Tableau Interface",
          "Connecting to Data Sources",
          "Data Preparation and Cleaning",
        ],
      },
      {
        title: "Module 2: Visual Analytics",
        topics: [
          "Working with Dimensions, Measures, and Hierarchies",
          "Filters, Groups, and Sets",
          "Calculated Fields and Table Calculations",
        ],
      },
      {
        title: "Module 3: Dashboards and Advanced Features",
        topics: [
          "Building Interactive Dashboards",
          "Storytelling with Data",
          "Advanced Charts and Maps",
          "Publishing and Sharing Workbooks on Tableau Server/Public",
        ],
      },
    ],
  },
  ml: {
    courseTitle: "Machine Learning",
    icon: FiCpu,
    description:
      "Build and deploy robust predictive models using essential ML algorithms and Python frameworks like Scikit-learn and TensorFlow.",
    duration: "6 Months (Part-Time)",
    difficulty: "Advanced",
    modules: [
      {
        title: "Module 1: Foundations and Preprocessing",
        topics: [
          "ML Workflow and Types (Supervised, Unsupervised)",
          "Data Preprocessing, Scaling, and Feature Engineering",
          "Model Evaluation and Cross-Validation",
        ],
      },
      {
        title: "Module 2: Supervised and Ensemble Learning",
        topics: [
          "Linear Regression and Logistic Regression",
          "Decision Trees, Random Forests, and Boosting Algorithms",
          "Support Vector Machines (SVM) and K-Nearest Neighbors (KNN)",
        ],
      },
      {
        title: "Module 3: Unsupervised Learning & Neural Networks",
        topics: [
          "Clustering (K-Means, DBSCAN) and Dimensionality Reduction (PCA)",
          "Introduction to Neural Networks and Deep Learning",
          "Building a Simple Perceptron Model",
        ],
      },
      {
        title: "Module 4: Deployment and Capstone Project",
        topics: [
          "Model Persistence and Deployment (Flask/Streamlit)",
          "Ethical Considerations in ML",
          "Capstone Project: End-to-End Predictive Model",
        ],
      },
    ],
  },
  genai: {
    courseTitle: "Generative AI",
    icon: FiCpu,
    description:
      "Explore large language models (LLMs), transformer architecture, and advanced prompt engineering techniques for real-world AI applications.",
    duration: "1.5 Months (Intensive)",
    difficulty: "Advanced",
    modules: [
      {
        title: "Module 1: LLM Architecture and Basics",
        topics: [
          "Introduction to Generative Models (GPT, LLaMA)",
          "The Transformer Architecture Explained",
          "Tokenization, Embeddings, and Vector Stores",
        ],
      },
      {
        title: "Module 2: Advanced Prompt Engineering & Frameworks",
        topics: [
          "Zero-shot, Few-shot, and Chain-of-Thought Prompting",
          "Working with Popular Frameworks (e.g., LangChain)",
          "Retrieval-Augmented Generation (RAG) Systems",
        ],
      },
      {
        title: "Module 3: Fine-Tuning and Deployment",
        topics: [
          "Parameter-Efficient Fine-Tuning (PEFT) Techniques",
          "Building and Deploying Chatbots",
          "Image and Code Generation Models Overview",
        ],
      },
    ],
  },
};

// --- COMPONENTS ---

const HeroBanner = ({ title, Icon }) => (
  <motion.section
    className="text-white pt-24 pb-16 px-6 sm:px-12 text-center shadow-2xl relative overflow-hidden"
    style={{ backgroundColor: PRIMARY_COLOR }}
    initial="hidden"
    animate="visible"
    variants={fadeInUp}
  >
    <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
      {/* Decorative background icon */}
      <Icon size={300} className="mx-auto mt-[-50px]" />
    </div>
    <div className="relative z-10">
      <Icon size={48} className="mx-auto mb-4 p-2 bg-white/20 rounded-full" />
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold max-w-5xl mx-auto mb-4 tracking-tight">
        {title}
      </h1>
      <p className="text-xl font-light opacity-90">
        Course Syllabus & Detailed Breakdown
      </p>
    </div>
  </motion.section>
);

const CourseInfoBar = ({ duration, difficulty, description }) => (
  <motion.div
    className="relative z-20 max-w-6xl mx-auto -mt-8 mb-12 grid grid-cols-1 sm:grid-cols-3 gap-6 px-6"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    variants={staggerContainer}
  >
    <motion.div
      className="bg-white p-6 rounded-xl shadow-2xl border-t-4 border-t-yellow-400"
      variants={fadeInUp}
    >
      <FiClock size={24} style={{ color: SECONDARY_COLOR }} className="mb-2" />
      <h3 className="text-sm font-semibold text-gray-500 uppercase">
        Duration
      </h3>
      <p className="text-xl font-bold text-gray-800">{duration}</p>
    </motion.div>
    <motion.div
      className="bg-white p-6 rounded-xl shadow-2xl border-t-4 border-t-red-400"
      variants={fadeInUp}
    >
      <FiBookOpen size={24} style={{ color: ACCENT_COLOR }} className="mb-2" />
      <h3 className="text-sm font-semibold text-gray-500 uppercase">
        Difficulty
      </h3>
      <p className="text-xl font-bold text-gray-800">{difficulty}</p>
    </motion.div>
    <motion.div
      className="bg-white p-6 rounded-xl shadow-2xl sm:col-span-1 border-t-4 border-t-blue-400"
      variants={fadeInUp}
    >
      <FiCpu size={24} style={{ color: PRIMARY_COLOR }} className="mb-2" />
      <h3 className="text-sm font-semibold text-gray-500 uppercase">
        Description
      </h3>
      <p className="text-base text-gray-700">{description}</p>
    </motion.div>
  </motion.div>
);

// New Component for collapsible modules
const CollapsibleModule = ({ module, index }) => {
  const [isOpen, setIsOpen] = useState(index === 0); // Open the first module by default

  const ModuleIcon = allSyllabusData[useParams().courseId]?.icon || FiBookOpen;

  return (
    <motion.div
      className="border border-gray-200 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={fadeInUp}
    >
      <button
        className="flex justify-between items-center w-full p-5 text-left transition duration-300"
        style={{
          backgroundColor: isOpen ? PRIMARY_COLOR : "white",
          color: isOpen ? "white" : PRIMARY_COLOR,
        }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="flex items-center space-x-3 text-lg sm:text-xl font-bold">
          <ModuleIcon
            size={24}
            className="flex-shrink-0"
            style={{ color: isOpen ? SECONDARY_COLOR : ACCENT_COLOR }}
          />
          <span>{module.title}</span>
        </span>
        <FiChevronDown
          size={24}
          className={`transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
          style={{ color: isOpen ? SECONDARY_COLOR : PRIMARY_COLOR }}
        />
      </button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.4 }}
          className="p-5 bg-gray-50"
        >
          <h4 className="text-md font-semibold mb-3 text-gray-600 border-b pb-2">
            Key Topics:
          </h4>
          <ul className="list-inside space-y-3 text-gray-800">
            {module.topics.map((topic, idx) => (
              <motion.li
                key={idx}
                className="flex items-start text-base before:content-['•'] before:mr-2 before:text-lg"
                style={{ color: PRIMARY_COLOR }}
              >
                <span className="text-gray-700">{topic}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.div>
  );
};

// --- MAIN PAGE COMPONENT ---
const SyllabusDetailsPage = () => {
  const { courseId } = useParams();

  const syllabus = allSyllabusData[courseId];

  if (!syllabus) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50 p-12">
        <div className="p-8 bg-white rounded-lg shadow-xl text-center text-red-600 font-bold text-2xl">
          ⚠️ Course syllabus for "{courseId}" not found.
        </div>
      </div>
    );
  }

  const {
    courseTitle,
    icon: CourseIcon,
    description,
    duration,
    difficulty,
    modules,
  } = syllabus;

  return (
    <main className="bg-gray-50 min-h-screen pb-20 font-sans">
      <HeroBanner title={courseTitle} Icon={CourseIcon} />

      {/* Course Info Bar with Description */}
      <CourseInfoBar
        duration={duration}
        difficulty={difficulty}
        description={description}
      />

      {/* Detailed Module Breakdown */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 mt-10">
        <motion.h2
          className="text-4xl font-extrabold mb-8 text-center"
          style={{ color: PRIMARY_COLOR }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          Curriculum Breakdown
        </motion.h2>

        <div className="space-y-4">
          {modules.map((module, idx) => (
            <CollapsibleModule key={idx} module={module} index={idx} />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      {/* <motion.section
        className="max-w-4xl mx-auto px-6 sm:px-12 py-16 text-center mt-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h3 className="text-2xl font-bold mb-4" style={{ color: PRIMARY_COLOR }}>
          Ready to Deepen Your Skills?
        </h3>
        <p className="text-lg text-gray-700 mb-8">
          Click below to start your enrollment process now.
        </p>
        <motion.button
          className="py-4 px-10 text-xl font-bold rounded-full text-white transition duration-300 transform hover:scale-[1.03] shadow-lg"
          style={{ backgroundColor: ACCENT_COLOR }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
        >
          Start Learning
        </motion.button>
      </motion.section> */}
    </main>
  );
};

export default SyllabusDetailsPage;
