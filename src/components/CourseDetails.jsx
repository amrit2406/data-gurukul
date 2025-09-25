import React from "react";
import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import { FiClock, FiZap, FiBookOpen, FiStar, FiCheckCircle } from 'react-icons/fi'; // Icons for visual appeal

// --- Styling Constants ---
const PRIMARY_COLOR = '#023270'; // Deep Blue
const SECONDARY_COLOR = '#796202'; // Gold/Ochre
const ACCENT_COLOR = '#ff6b6b'; // A modern accent color for key features

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

// --- ENRICHED COURSE DATA ---
const allCourseData = {
  python: {
    title: 'Python ',
    subtitle: 'Master Python programming, essential libraries, and best practices for data science and automation.',
    overview:
      'This course provides a comprehensive deep-dive into Python fundamentals, data structures, and the powerful data science ecosystem (Pandas, NumPy, Matplotlib). You will build real-world data analysis projects and receive expert mentorship.',
    duration: '8 Weeks',
    difficulty: 'Intermediate',
    prerequisites: 'Basic programming concepts.',
    keyFeatures: [
      '12+ Hands-on Labs & Assignments',
      'Dedicated Live Q&A Sessions',
      'Final Data Analysis Project',
      'Certificate of Completion',
    ],
    syllabus: [
      'Python Basics and Data Types (Variables, Lists, Dictionaries)',
      'Control Flow, Functions, and Object-Oriented Programming (OOP)',
      'Working with Libraries: Pandas, NumPy for Data Manipulation',
      'Data Cleaning, Wrangling, and Aggregation Techniques',
      'Data Visualization with Matplotlib and Seaborn',
      'Project: Exploratory Data Analysis with Python',
    ],
  },
  sql: {
    title: 'SQL ',
    subtitle: 'Advanced SQL queries, database design, and performance optimization for enterprise-level data.',
    overview:
      'Move beyond simple SELECT statements. Cover complex SQL joins, subqueries, window functions, transactions, and the principles of database normalization and optimization techniques for real-world, large-scale data manipulation.',
    duration: '6 Weeks',
    difficulty: 'Intermediate',
    prerequisites: 'Familiarity with basic SQL queries.',
    keyFeatures: [
      'Focus on Complex Query Optimization',
      'Detailed Lessons on Database Design (Normalization)',
      'Simulated Real-World Database Scenarios',
      'Expert-Led Code Reviews',
    ],
    syllabus: [
      'SQL Joins, Set Operations (UNION, INTERSECT, EXCEPT)',
      'Database Normalization (1NF, 2NF, 3NF, BCNF)',
      'Advanced Querying with Window Functions and CTEs',
      'Stored Procedures, Views, and Indexes',
      'Transactions, Concurrency Control, and Security',
      'Project: Build, Optimize, and Query a Relational Database',
    ],
  },
  powerbi: {
    title: 'PowerBI ',
    subtitle: 'Create dynamic, impactful dashboards and reports to transform raw data into actionable business insights.',
    overview:
      'Learn to connect to diverse data sources, transform data using Power Query, master DAX formulas, and design professional, engaging reports with PowerBI visuals and data modeling techniques.',
    duration: '5 Weeks',
    difficulty: 'Beginner',
    prerequisites: 'No prior BI tool experience required.',
    keyFeatures: [
      'Master Power Query for Data Transformation',
      'Introduction to DAX for Custom Measures',
      'Best Practices for Dashboard Design',
      'Guided Capstone Project',
    ],
    syllabus: [
      'PowerBI Desktop and Service Workspace Overview',
      'Connecting to Data Sources and Power Query Editor',
      'Building Reports, Visualizations, and Interactive Filters',
      'Intro to DAX Language: Measures, Calculated Columns',
      'Data Modeling, Relationships, and Star Schema',
      'Project: Interactive Sales Dashboard with Advanced DAX',
    ],
  },
  tableau: {
    title: 'Tableau',
    subtitle: 'Design powerful visual stories and compelling dashboards that communicate data clearly and drive decisions.',
    overview:
      'Master Tableau’s interface, explore best practices for data storytelling, learn to use calculated fields and parameters, and publish highly interactive, professional dashboards for an audience.',
    duration: '5 Weeks',
    difficulty: 'Beginner',
    prerequisites: 'Familiarity with data analysis concepts.',
    keyFeatures: [
      'Focus on Visual Best Practices and Design',
      'Custom Geocoding and Mapping',
      'Creating High-Impact Story Points',
      'Peer Feedback and Review Sessions',
    ],
    syllabus: [
      'Connecting and Preparing Data in Tableau',
      'Creating Basic and Advanced Charts and Visualizations (LOD Expressions)',
      'Calculated Fields, Parameters, and Sets',
      'Building Interactive Dashboards and Actions',
      'Data Storytelling Techniques and Publishing',
      'Project: Data Storytelling with Tableau Public',
    ],
  },
  ml: {
    title: 'Machine Learning',
    subtitle: 'Build and deploy robust predictive models using essential ML algorithms and Python frameworks.',
    overview:
      'A comprehensive guide covering supervised, unsupervised learning, model evaluation, feature engineering, and deployment with hands-on projects using Scikit-learn, TensorFlow, and PyTorch.',
    duration: '10 Weeks',
    difficulty: 'Advanced',
    prerequisites: 'Strong Python and basic linear algebra/calculus.',
    keyFeatures: [
      'Focus on Model Evaluation and Optimization',
      'Introduction to Deep Learning Concepts',
      'Deployment Strategies (e.g., Flask/Streamlit)',
      'Access to a Private ML Project Repository',
    ],
    syllabus: [
      'Introduction to Machine Learning: Concepts and Workflow',
      'Supervised Learning Techniques (Regression, Classification)',
      'Unsupervised Learning and Clustering (K-Means, PCA)',
      'Model Evaluation, Hyperparameter Tuning, and Cross-Validation',
      'Introduction to Neural Networks and Deep Learning',
      'Project: Predictive Model Deployment with a Web Interface',
    ],
  },
  genai: {
    title: 'Generative AI ',
    subtitle: 'Explore large language models (LLMs), transformer architecture, and advanced prompt engineering techniques.',
    overview:
      'This course provides a cutting-edge exploration of generative AI concepts. Learn how to work with popular LLM frameworks (like Hugging Face), understand the transformer architecture, and master prompt engineering for real-world applications.',
    duration: '8 Weeks',
    difficulty: 'Advanced',
    prerequisites: 'Intermediate Python and ML knowledge.',
    keyFeatures: [
      'Deep Dive into Transformer Architecture',
      'Hands-on with Popular LLM APIs (OpenAI, Gemini)',
      'Focus on Ethical AI and Model Biases',
      'Build Your Own AI Application (Chatbot)',
    ],
    syllabus: [
      'Introduction to Generative Models and Foundational Models',
      'The Transformer Architecture Explained (Attention Mechanism)',
      'Training, Fine-tuning, and Adaptation of LLMs',
      'Advanced Prompt Engineering Techniques (CoT, Tool-Use)',
      'Working with Vector Databases and RAG Architectures',
      'Project: Build and Deploy a Chatbot with GPT/LLaMA',
    ],
  },
};

// --- COMPONENTS ---

const HeroBanner = ({ title, subtitle }) => (
  <motion.section
    className="text-white pt-32 pb-20 px-6 sm:px-12 text-center shadow-2xl"
    style={{ backgroundColor: PRIMARY_COLOR }}
    initial="hidden"
    animate="visible"
    variants={fadeInUp}
  >
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold max-w-5xl mx-auto mb-4 tracking-tight">
      {title}
    </h1>
    <p className="text-xl md:text-2xl font-light opacity-80 max-w-4xl mx-auto">
      {subtitle}
    </p>
  </motion.section>
);

const CourseInfoBar = ({ duration, difficulty, prerequisites }) => (
  <motion.div
    className="max-w-6xl mx-auto -mt-12 mb-16 grid grid-cols-1 sm:grid-cols-3 gap-6 px-6"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={staggerContainer}
  >
    <motion.div
      className="bg-white p-6 rounded-lg shadow-xl border-t-4 border-t-yellow-400 flex items-center space-x-4"
      variants={fadeInUp}
    >
      <FiClock size={30} style={{ color: SECONDARY_COLOR }} />
      <div>
        <h3 className="text-sm font-semibold text-gray-500 uppercase">Duration</h3>
        <p className="text-xl font-bold text-gray-800">{duration}</p>
      </div>
    </motion.div>
    <motion.div
      className="bg-white p-6 rounded-lg shadow-xl border-t-4 border-t-red-400 flex items-center space-x-4"
      variants={fadeInUp}
    >
      <FiZap size={30} style={{ color: ACCENT_COLOR }} />
      <div>
        <h3 className="text-sm font-semibold text-gray-500 uppercase">Difficulty</h3>
        <p className="text-xl font-bold text-gray-800">{difficulty}</p>
      </div>
    </motion.div>
    <motion.div
      className="bg-white p-6 rounded-lg shadow-xl border-t-4 border-t-blue-400 flex items-center space-x-4"
      variants={fadeInUp}
    >
      <FiBookOpen size={30} style={{ color: PRIMARY_COLOR }} />
      <div>
        <h3 className="text-sm font-semibold text-gray-500 uppercase">Prerequisites</h3>
        <p className="text-xl font-bold text-gray-800">{prerequisites}</p>
      </div>
    </motion.div>
  </motion.div>
);

const CourseOverview = ({ overview }) => (
  <motion.section
    className="max-w-6xl mx-auto px-6 sm:px-12 py-8 md:py-16 text-gray-900"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    variants={fadeInUp}
  >
    <h2 className="text-3xl font-bold mb-6 border-b-2 pb-2 inline-block" style={{ borderColor: SECONDARY_COLOR, color: PRIMARY_COLOR }}>
      Course Overview
    </h2>
    <p className="text-lg leading-relaxed text-gray-700">{overview}</p>
  </motion.section>
);

const KeyFeatures = ({ keyFeatures }) => (
  <motion.section
    className="max-w-6xl mx-auto px-6 sm:px-12 py-8 md:py-16"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    variants={staggerContainer}
  >
    <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: PRIMARY_COLOR }}>
      What You Will Gain
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {keyFeatures.map((feature, idx) => (
        <motion.div
          key={idx}
          className="p-5 bg-white rounded-lg shadow-lg border-l-4"
          style={{ borderColor: ACCENT_COLOR }}
          variants={fadeInUp}
        >
          <FiStar size={24} className="mb-3" style={{ color: ACCENT_COLOR }} />
          <p className="text-md font-semibold text-gray-800">{feature}</p>
        </motion.div>
      ))}
    </div>
  </motion.section>
);

const DetailedSyllabus = ({ syllabus }) => (
  <motion.section
    className="bg-white max-w-6xl mx-auto px-6 sm:px-12 py-16 rounded-xl shadow-2xl my-16"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    variants={fadeInUp}
  >
    <h2 className="text-3xl font-bold mb-10 text-center" style={{ color: PRIMARY_COLOR }}>
      Detailed Syllabus
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
      {syllabus.map((item, idx) => (
        <motion.div
          key={idx}
          className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition duration-300"
          variants={fadeInUp}
        >
          <FiCheckCircle size={20} className="mt-1 flex-shrink-0" style={{ color: SECONDARY_COLOR }} />
          <div className="text-lg text-gray-800">
            <span className="font-semibold" style={{ color: PRIMARY_COLOR }}>Module {idx + 1}:</span> {item}
          </div>
        </motion.div>
      ))}
    </div>
  </motion.section>
);

// --- MAIN PAGE COMPONENT ---
const CourseDetailsPage = () => {
  const { courseId } = useParams();

  const course = allCourseData[courseId];

  if (!course) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50 p-12">
        <div className="p-8 bg-white rounded-lg shadow-xl text-center text-red-600 font-bold text-2xl">
          ⚠️ Course "{courseId}" not found. Please check the URL.
        </div>
      </div>
    );
  }

  // Destructure for cleaner component props
  const {
    title,
    subtitle,
    overview,
    duration,
    difficulty,
    prerequisites,
    keyFeatures,
    syllabus,
  } = course;

  return (
    <main className="bg-gray-50 min-h-screen font-sans">
      <HeroBanner title={title} subtitle={subtitle} />
      
      {/* Course Info Bar: Mobile stacks, Desktop in a row, using negative margin for visual overlap */}
      <CourseInfoBar 
        duration={duration}
        difficulty={difficulty}
        prerequisites={prerequisites}
      />
      
      {/* Main Content Container for better readability */}
      <div className="max-w-6xl mx-auto p-6 md:p-12">
        <CourseOverview overview={overview} />
      </div>

      <KeyFeatures keyFeatures={keyFeatures} />

      <DetailedSyllabus syllabus={syllabus} />

      {/* Simple CTA Section */}
      {/* <motion.section
        className="max-w-6xl mx-auto px-6 sm:px-12 py-16 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h2 className="text-3xl font-bold mb-4" style={{ color: PRIMARY_COLOR }}>
          Ready to Start Your Journey?
        </h2>
        <p className="text-lg text-gray-700 mb-8">
          Enroll now to gain lifetime access to all course materials and expert support.
        </p>
        <motion.button
          className="py-4 px-10 text-xl font-bold rounded-full text-white transition duration-300 transform hover:scale-105 shadow-xl"
          style={{ backgroundColor: ACCENT_COLOR }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Enroll Now!
        </motion.button>
      </motion.section> */}

      {/* <footer className="bg-gray-800 text-white text-center py-6 mt-12">
        <p className="text-sm">© 2025 Data Academy. All Rights Reserved.</p>
      </footer> */}
    </main>
  );
};

export default CourseDetailsPage;