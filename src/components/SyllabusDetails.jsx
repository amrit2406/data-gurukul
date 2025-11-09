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
  FiBarChart2,
  FiPieChart,
  FiBarChart,
  FiTrendingUp
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
      "A comprehensive course to master Python programming, covering core concepts, OOPs, file handling, regular expressions, and data analytics.",
    duration: "30 hrs",
    difficulty: "Intermediate",
    modules: [
      {
        title: "Module 1: Introduction to Python Programming",
        topics: [
          "Overview of Python",
          "Setting up Python Environment",
          "Basic Syntax and First Program",
        ],
      },
      {
        title: "Module 2: Data Types, Variables, and Operators",
        topics: [
          "Numbers, Strings, and Booleans",
          "Lists, Tuples, Sets, and Dictionaries",
          "Type Casting and Input/Output",
          "Operators in Python",
        ],
      },
      {
        title: "Module 3: Conditional Statements",
        topics: [
          "if, elif, else Statements",
          "Nested Conditions",
          "Looping Structures (for, while)",
          "Loop Control Statements (break, continue, pass)",
        ],
      },
      {
        title: "Module 4: OOPs Concept in Python",
        topics: [
          "Classes and Objects",
          "Constructors and Destructors",
          "Inheritance and Polymorphism",
          "Encapsulation and Abstraction",
        ],
      },
      {
        title: "Module 5: Functions in Python",
        topics: [
          "Defining and Calling Functions",
          "Function Arguments and Return Values",
          "Lambda Functions",
          "Scope and Recursion",
        ],
      },
      {
        title: "Module 6: Exception Handling and File Handling",
        topics: [
          "Errors vs Exceptions",
          "try, except, finally",
          "Raising Exceptions",
          "File Operations (open, read, write, close)",
          "Handling CSV and JSON files",
        ],
      },
      {
        title: "Module 7: Regular Expressions",
        topics: [
          "Introduction to Regex",
          "Meta Characters and Special Sequences",
          "Matching and Searching",
          "Regex with Python re Module",
        ],
      },
      {
        title: "Module 8: Data Analytics using Python",
        topics: [
          "Introduction to NumPy",
          "Data Manipulation with Pandas",
          "Data Visualization with Matplotlib & Seaborn",
          "Mini Project: Exploratory Data Analysis (EDA)",
        ],
      },
    ],
  },
  sql: {
    courseTitle: "SQL",
    icon: FiDatabase,
    description:
      "A complete course to master SQL, covering database fundamentals, queries, joins, indexing, triggers, and advanced concepts like window functions and recursive queries.",
    duration: "30 hrs",
    difficulty: "Intermediate",
    modules: [
      {
        title: "Module 1: Introduction to Database",
        topics: [
          "Database Concepts and Architecture",
          "RDBMS vs DBMS",
          "Introduction to SQL",
          "Creating and Managing Databases",
        ],
      },
      {
        title: "Module 2: SQL Commands",
        topics: [
          "DDL (Data Definition Language)",
          "DML (Data Manipulation Language)",
          "DCL (Data Control Language)",
          "TCL (Transaction Control Language)",
        ],
      },
      {
        title: "Module 3: Data Types & Relational Operators",
        topics: [
          "SQL Data Types",
          "Primary and Foreign Keys",
          "Relational Operators (=, !=, >, <, etc.)",
          "NULL Handling",
        ],
      },
      {
        title: "Module 4: SQL Operators",
        topics: [
          "Arithmetic Operators",
          "Comparison Operators",
          "Logical Operators (AND, OR, NOT)",
          "LIKE, IN, BETWEEN",
        ],
      },
      {
        title: "Module 5: SQL SubQuery and Joins",
        topics: [
          "Introduction to Subqueries",
          "Single-row and Multi-row Subqueries",
          "INNER JOIN, LEFT JOIN, RIGHT JOIN, FULL JOIN",
          "Self Join and Cross Join",
        ],
      },
      {
        title: "Module 6: Indexes",
        topics: [
          "Introduction to Indexing",
          "Clustered vs Non-Clustered Indexes",
          "Creating and Dropping Indexes",
          "Performance Considerations",
        ],
      },
      {
        title: "Module 7: Triggers, Union & Union All",
        topics: [
          "Introduction to Triggers",
          "AFTER and BEFORE Triggers",
          "Union vs Union All",
          "Use Cases and Examples",
        ],
      },
      {
        title:
          "Module 8: Advanced SQL (Window Functions, CTEs, Recursive Queries)",
        topics: [
          "Window Functions (ROW_NUMBER, RANK, DENSE_RANK, etc.)",
          "Common Table Expressions (CTEs)",
          "Recursive Queries",
          "Complex Query Optimization",
        ],
      },
    ],
  },
  powerbi: {
    courseTitle: "Power BI",
    icon: FiBarChart2, // You may need to import FiBarChart2 from react-icons/fi
    description:
      "Master data visualization and dashboard building using Power BI, empowering you to create impactful business insights and interactive reports.",
    duration: "20 hrs",
    difficulty: "Beginner to Intermediate",
    modules: [
      {
        title: "Module 1: Introduction",
        topics: [
          "Overview of Business Intelligence",
          "Role of Power BI in Data Analytics",
          "Power BI Ecosystem (Desktop, Service, Mobile)",
        ],
      },
      {
        title: "Module 2: Introduction to Power BI",
        topics: [
          "Installing and Setting up Power BI Desktop",
          "Navigating Power BI Interface",
          "Connecting to Data Sources",
        ],
      },
      {
        title: "Module 3: Power BI Desktop",
        topics: [
          "Data Loading and Transformation using Power Query",
          "Data Modeling and Relationships",
          "Calculated Columns and Measures",
        ],
      },
      {
        title: "Module 4: DAX",
        topics: [
          "Introduction to DAX Syntax",
          "Common Functions (SUM, AVERAGE, COUNTROWS)",
          "Advanced Functions (CALCULATE, FILTER, ALL)",
        ],
      },
      {
        title: "Module 5: Data Visualisation",
        topics: [
          "Creating and Customizing Visuals",
          "Interactive Dashboards and Reports",
          "Custom Visuals and Best Practices",
        ],
      },
      {
        title: "Module 6: Power BI Q&A",
        topics: [
          "Using Natural Language Queries",
          "Configuring and Optimizing Q&A",
          "Integrating Q&A in Dashboards",
        ],
      },
      {
        title: "Module 7: Direct Connectivity",
        topics: [
          "Connecting to Live Databases (SQL, Azure, etc.)",
          "DirectQuery vs Import Mode",
          "Performance Considerations",
        ],
      },
      {
        title: "Module 8: Report Servers",
        topics: [
          "Introduction to Power BI Report Server",
          "Publishing and Managing Reports On-Premises",
          "Comparing Power BI Service vs Report Server",
        ],
      },
      {
        title: "Module 9: Advanced Analytics",
        topics: [
          "Integrating R and Python with Power BI",
          "Forecasting and Trend Analysis",
          "Advanced Data Modeling Techniques",
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
    icon: FiCpu, // import from react-icons/fi
    description:
      "Build and deploy robust predictive models using essential ML algorithms, statistical foundations, and Python frameworks like Scikit-learn and TensorFlow.",
    duration: "100 hrs",
    difficulty: "Advanced",
    modules: [
      {
        title: "Module 1: Mathematical Foundations",
        topics: [
          "Probability Basics",
          "Linear Algebra Essentials",
          "Statistics Overview",
        ],
      },
      {
        title: "Module 2: Clustering",
        topics: ["K-Means Clustering", "Hierarchical Clustering", "DBSCAN"],
      },
      {
        title: "Module 3: Dimension Reduction",
        topics: [
          "Principal Component Analysis (PCA)",
          "t-SNE",
          "Feature Selection Methods",
        ],
      },
      {
        title: "Module 4: Association Rules",
        topics: ["Apriori Algorithm", "FP-Growth", "Market Basket Analysis"],
      },
      {
        title: "Module 5: Network Analytics",
        topics: [
          "Graph Theory Basics",
          "Centrality Measures",
          "Community Detection",
        ],
      },
      {
        title: "Module 6: Text Mining",
        topics: [
          "Text Preprocessing",
          "Bag of Words & TF-IDF",
          "Topic Modeling (LDA)",
        ],
      },
      {
        title: "Module 7: Natural Language Processing",
        topics: [
          "Tokenization and Lemmatization",
          "Word Embeddings (Word2Vec, GloVe)",
          "Sequence Models",
        ],
      },
      {
        title: "Module 8: Naive Bayes",
        topics: [
          "Bayes Theorem",
          "Gaussian Naive Bayes",
          "Multinomial Naive Bayes",
        ],
      },
      {
        title: "Module 9: kNN",
        topics: [
          "Distance Metrics",
          "k-Nearest Neighbors for Classification",
          "kNN for Regression",
        ],
      },
      {
        title: "Module 10: Decision Tree",
        topics: ["Gini Index & Entropy", "Tree Pruning", "Regression Trees"],
      },
      {
        title: "Module 11: Ensemble Techniques",
        topics: [
          "Bagging & Random Forests",
          "Boosting (AdaBoost, Gradient Boosting, XGBoost)",
          "Stacking Models",
        ],
      },
      {
        title: "Module 12: Confidence Interval",
        topics: [
          "Standard Error",
          "Z-Interval & T-Interval",
          "Interpreting Confidence Levels",
        ],
      },
      {
        title: "Module 13: Hypothesis Testing",
        topics: [
          "Null & Alternative Hypothesis",
          "p-values & Significance Levels",
          "ANOVA & Chi-Square Tests",
        ],
      },
      {
        title: "Module 14: Simple Linear Regression",
        topics: [
          "Model Assumptions",
          "Correlation vs Regression",
          "Evaluation Metrics",
        ],
      },
      {
        title: "Module 15: Multiple Linear Regression",
        topics: ["Multicollinearity", "Feature Selection", "Adjusted R-Square"],
      },
      {
        title: "Module 16: Logistic Regression",
        topics: [
          "Sigmoid Function",
          "Binary Classification",
          "ROC Curve & AUC",
        ],
      },
      {
        title: "Module 17: Multinomial Regression",
        topics: [
          "Softmax Function",
          "Multiclass Classification",
          "Applications",
        ],
      },
      {
        title: "Module 18: Lasso and Ridge Regression",
        topics: [
          "Regularization Concepts",
          "Bias-Variance Tradeoff",
          "ElasticNet",
        ],
      },
      {
        title: "Module 19: Blackbox-SVM",
        topics: ["Linear SVM", "Kernel Methods", "Hyperparameter Tuning"],
      },
      {
        title: "Module 20: Forecasting",
        topics: [
          "Time Series Decomposition",
          "ARIMA Models",
          "Forecasting with Prophet",
        ],
      },
      {
        title: "Module 21: Deep Learning",
        topics: [
          "Neural Network Basics",
          "Backpropagation",
          "Applications with TensorFlow/Keras",
        ],
      },
    ],
  },
  genai: {
    courseTitle: "Generative AI",
    icon: FiCpu, // import from react-icons/fi
    description:
      "Explore large language models (LLMs), transformer architecture, and advanced prompt engineering techniques for real-world AI applications.",
    duration: "30 hrs",
    difficulty: "Advanced",
    modules: [
      {
        title: "Module 1: Introduction to Generative AI",
        topics: [
          "Overview of Generative AI and Use Cases",
          "History and Evolution of Generative Models",
          "Ethical Considerations and AI Safety",
        ],
      },
      {
        title: "Module 2: Mathematical & ML Foundations",
        topics: [
          "Linear Algebra and Probability Refresher",
          "Neural Networks and Backpropagation",
          "Attention Mechanisms and Transformers",
        ],
      },
      {
        title: "Module 3: Large Language Models (LLMs)",
        topics: [
          "Understanding LLMs (GPT, LLaMA, PaLM, etc.)",
          "Tokenization, Embeddings, and Vector Representations",
          "Prompt Engineering: Zero-shot, Few-shot, Chain-of-Thought",
        ],
      },
      {
        title: "Module 4: Tools & Frameworks",
        topics: [
          "LangChain for LLM Applications",
          "Retrieval-Augmented Generation (RAG)",
          "Fine-tuning & Parameter-Efficient Training (PEFT)",
        ],
      },
      {
        title: "Module 5: Generative Models in Other Domains",
        topics: [
          "Image Generation (Diffusion Models, Stable Diffusion, DALL·E)",
          "Code Generation with LLMs",
          "Multimodal AI (Text + Image + Audio)",
        ],
      },
    ],
  },
  analytics: {
    courseTitle: "Professional Data Analytics",
    icon: FiBarChart, // import from react-icons/fi
    description:
      "Master the tools and techniques of modern data analytics, including Excel, SQL, Power BI, and Tableau, to analyze, visualize, and present data effectively.",
    duration: "60 hrs",
    difficulty: "Intermediate",
    modules: [
      {
        title: "Module 1: Foundations of Data Analytics",
        topics: [
          "Role of Data Analytics in Business",
          "Types of Analytics: Descriptive, Diagnostic, Predictive, Prescriptive",
          "Excel for Data Analysis",
        ],
      },
      {
        title: "Module 2: Data Management with SQL",
        topics: [
          "SQL Refresher",
          "Advanced Queries, Joins, and Aggregations",
          "Window Functions and CTEs",
          "Mini Project: Business Queries",
        ],
      },
      {
        title: "Module 3: Data Visualization with Power BI",
        topics: [
          "Power BI Basics",
          "Data Modeling and DAX",
          "Building Interactive Dashboards",
          "Business Case Dashboard Project",
        ],
      },
      {
        title: "Module 4: Visualization & Storytelling with Tableau",
        topics: [
          "Tableau Fundamentals",
          "Calculated Fields and Parameters",
          "Building Interactive Dashboards",
          "Storytelling with Data",
        ],
      },
      {
        title: "Module 5: Statistics for Data Analytics",
        topics: [
          "Descriptive Statistics",
          "Probability Basics",
          "Hypothesis Testing",
          "Correlation & Regression Analysis",
        ],
      },
      {
        title: "Capstone Project",
        topics: [
          "End-to-End Data Analysis on a Real-World Dataset",
          "Combine SQL, Power BI, and Tableau to present insights",
        ],
      },
    ],
  },
  datascience: {
    courseTitle: "Professional Data Science",
    icon: FiTrendingUp, // import from react-icons/fi
    description:
      "A comprehensive program to train as a full-fledged Data Scientist. Covers statistics, machine learning, and AI with end-to-end projects.",
    duration: "100 hrs",
    difficulty: "Advanced",
    modules: [
      {
        title: "Module 1: Statistics & Mathematics for Data Science",
        topics: [
          "Descriptive & Inferential Statistics",
          "Linear Algebra for Machine Learning",
          "Probability & Distributions",
          "Hypothesis Testing & ANOVA",
        ],
      },
      {
        title: "Module 2: Python for Data Science",
        topics: [
          "NumPy & Pandas for Data Handling",
          "Matplotlib & Seaborn for Visualization",
          "EDA (Exploratory Data Analysis)",
        ],
      },
      {
        title: "Module 3: Machine Learning Foundations",
        topics: [
          "Supervised Learning (Regression & Classification)",
          "Unsupervised Learning (Clustering, PCA)",
          "Model Evaluation Metrics",
          "Feature Engineering & Selection",
        ],
      },
      {
        title: "Module 4: Advanced Machine Learning",
        topics: [
          "Ensemble Learning (Random Forests, Gradient Boosting, XGBoost)",
          "Support Vector Machines",
          "Time Series Forecasting",
        ],
      },
      {
        title: "Module 5: Deep Learning",
        topics: [
          "Neural Networks & Backpropagation",
          "CNNs for Image Data",
          "RNNs and LSTMs for Sequential Data",
          "Introduction to Transformers",
        ],
      },
      {
        title: "Module 6: Natural Language Processing",
        topics: [
          "Text Preprocessing & Embeddings",
          "Sentiment Analysis",
          "Topic Modeling",
          "LLMs Introduction",
        ],
      },
      {
        title: "Capstone Project",
        topics: [
          "End-to-End Data Science Solution",
          "Data Cleaning → Feature Engineering → Modeling → Deployment",
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
  // <motion.div
  //   className="relative z-20 max-w-6xl mx-auto -mt-8 mb-12 grid grid-cols-1 sm:grid-cols-3 gap-6 px-6"
  //   initial="hidden"
  //   whileInView="visible"
  //   viewport={{ once: true, amount: 0.2 }}
  //   variants={staggerContainer}
  // >
  //   <motion.div
  //     className="bg-white p-6 rounded-xl shadow-2xl border-t-4 border-t-yellow-400"
  //     variants={fadeInUp}
  //   >
  //     <FiClock size={24} style={{ color: SECONDARY_COLOR }} className="mb-2" />
  //     <h3 className="text-sm font-semibold text-gray-500 uppercase">
  //       Duration
  //     </h3>
  //     <p className="text-xl font-bold text-gray-800">{duration}</p>
  //   </motion.div>
  //   <motion.div
  //     className="bg-white p-6 rounded-xl shadow-2xl border-t-4 border-t-red-400"
  //     variants={fadeInUp}
  //   >
  //     <FiBookOpen size={24} style={{ color: ACCENT_COLOR }} className="mb-2" />
  //     <h3 className="text-sm font-semibold text-gray-500 uppercase">
  //       Difficulty
  //     </h3>
  //     <p className="text-xl font-bold text-gray-800">{difficulty}</p>
  //   </motion.div>
  //   <motion.div
  //     className="bg-white p-6 rounded-xl shadow-2xl sm:col-span-1 border-t-4 border-t-blue-400"
  //     variants={fadeInUp}
  //   >
  //     <FiCpu size={24} style={{ color: PRIMARY_COLOR }} className="mb-2" />
  //     <h3 className="text-sm font-semibold text-gray-500 uppercase">
  //       Description
  //     </h3>
  //     <p className="text-base text-gray-700">{description}</p>
  //   </motion.div>
  // </motion.div>
  <motion.div
  className="flex justify-center items-center mt-10 mb-10 px-6"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={staggerContainer}
>
  <motion.div
    className="bg-white p-6 sm:p-8 rounded-xl shadow-2xl border-t-4 border-t-yellow-400 text-center w-full max-w-sm"
    variants={fadeInUp}
    whileHover={{ scale: 1.03 }}
  >
    <FiClock size={28} style={{ color: SECONDARY_COLOR }} className="mx-auto mb-3" />
    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
      Duration
    </h3>
    <p className="text-2xl font-bold text-gray-800 mt-1">{duration}</p>
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
