import React from "react";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import {
  FiClock,
  FiZap,
  FiBookOpen,
  FiStar,
  FiCheckCircle,
   FiTrendingUp,
} from "react-icons/fi"; // Icons for visual appeal

// --- Styling Constants ---
const PRIMARY_COLOR = "#023270"; // Deep Blue
const SECONDARY_COLOR = "#796202"; // Gold/Ochre
const ACCENT_COLOR = "#ff6b6b"; // A modern accent color for key features

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
    title: "Python",
    subtitle:
      "Master Python programming, essential libraries, and best practices for data science and automation.",
    overview:
      "This course helps you learn Python from the ground up. You’ll start with the basics of programming and move on to object-oriented concepts, file handling, and data structures. You’ll also explore data analysis and visualization using Pandas, NumPy, Matplotlib, and Seaborn. With hands-on labs, projects, and expert guidance, you’ll gain the skills needed to write clean code and solve real-world problems confidently.",
    duration: "30 hrs",
    difficulty: "Intermediate",
    prerequisites: "Basic programming concepts.",
    keyFeatures: [
      "Strong understanding of Python programming fundamentals",
      "Hands-on coding through labs and real-world assignments",
      "Confidence to build your own Python projects from scratch",
      "Certificate of Completion to validate your learning",
      "Certificate of Completion",
    ],
    syllabus: [
      "Module 1: Introduction to Python Programming (Overview, Environment Setup, Basic Syntax)",
      "Module 2: Data Types, Variables, and Operators (Numbers, Strings, Lists, Tuples, Sets, Dictionaries, Operators)",
      "Module 3: Conditional Statements & Loops (if-else, for, while, break/continue/pass)",
      "Module 4: Functions in Python (Function Arguments, Lambda, Scope, Recursion)",
      "Module 5: OOPs Concept in Python (Classes, Objects, Inheritance, Polymorphism, Abstraction)",
      "Module 6: Exception Handling and File Handling (Errors vs Exceptions, try-except-finally, File I/O, CSV & JSON)",
      "Module 7: Regular Expressions (Meta Characters, Searching, Matching, re Module)",
      "Module 8: Data Analytics using Python (NumPy, Pandas, Matplotlib, Seaborn, Mini Project: EDA)",
    ],
  },
  sql: {
    title: "SQL",
    subtitle:
      "Master SQL for complex querying, database design, and performance optimization in real-world scenarios.",
    overview:
      "This course helps you learn SQL from the basics to advanced concepts. You’ll understand how to create, manage, and query databases using real-world examples. Topics include joins, subqueries, window functions, indexing, and query optimization. You’ll also learn database design, normalization, and transactions through practical exercises and projects that build your confidence in working with large datasets.",
    duration: "30 hrs",
    difficulty: "Intermediate",
    prerequisites: "Familiarity with basic SQL queries.",
    keyFeatures: [
      "Strong foundation in SQL query writing and database managemen",
      "Skills to design and normalize databases for real-world use",
      "Hands-on experience in optimizing and tuning SQL queries",
      "Practical exposure through enterprise-level projects and labs",
      "Certificate of Completion showcasing your SQL expertis",
    ],
    syllabus: [
      "Module 1: Advanced Joins and Set Operations (INNER, OUTER, CROSS JOIN, UNION, INTERSECT, EXCEPT)",
      "Module 2: Subqueries and Common Table Expressions (CTEs)",
      "Module 3: Database Design & Normalization (1NF, 2NF, 3NF, BCNF)",
      "Module 4: Advanced Querying with Window Functions (ROW_NUMBER, RANK, PARTITION BY)",
      "Module 5: Stored Procedures, Functions, Triggers, and Views",
      "Module 6: Indexing Strategies and Query Optimization Techniques",
      "Module 7: Transactions, Concurrency Control, and Security Best Practices",
      "Module 8: Capstone Project — Build, Optimize, and Query a Scalable Relational Database",
    ],
  },
  powerbi: {
    title: "Power BI",
    subtitle:
      "Create dynamic, impactful dashboards and reports to transform raw data into actionable business insights.",
    overview:
      "This course equips you with the skills to connect and transform data, build relationships, create custom calculations using DAX, and design visually compelling dashboards. You will also explore advanced Power BI features like Q&A, direct connectivity, and report servers, with hands-on projects simulating real-world business cases.",
    duration: "20 hrs",
    difficulty: "Beginner to Intermediate",
    prerequisites:
      "No prior BI tool experience required. Familiarity with Excel or databases is helpful.",
    keyFeatures: [
      "Hands-on Practice with Power Query for Data Transformation",
      "Mastery of DAX for Business Calculations",
      "Interactive Dashboard and Report Design Best Practices",
      "Exposure to Advanced Power BI Features (Q&A, Direct Connectivity, Report Server)",
      "Guided Capstone Project for Business Reporting",
    ],
    syllabus: [
      "Module 1: Introduction to Power BI (Overview of BI, Power BI Ecosystem, Desktop vs Service)",
      "Module 2: Power BI Desktop (Data Import, Power Query Transformation, Building Data Models)",
      "Module 3: DAX (Calculated Columns, Measures, KPIs, Advanced DAX Functions)",
      "Module 4: Data Visualization (Interactive Reports, Custom Visuals, Dashboard Design Best Practices)",
      "Module 5: Power BI Q&A (Natural Language Queries, Configuration & Optimization)",
      "Module 6: Direct Connectivity (SQL, Azure, APIs, DirectQuery vs Import Mode)",
      "Module 7: Report Servers (Publishing Reports, On-Premises Power BI, Comparing with Power BI Service)",
      "Module 8: Advanced Analytics (Integrating R/Python, Forecasting, Advanced Data Modeling)",
      "Capstone Project: Design and Deploy a Business Dashboard with Advanced DAX & Visuals",
    ],
  },
  tableau: {
    title: "Tableau",
    subtitle:
      "Design powerful visual stories and compelling dashboards that communicate data clearly and drive decisions.",
    overview:
      "Master Tableau’s interface, explore best practices for data storytelling, learn to use calculated fields and parameters, and publish highly interactive, professional dashboards for an audience.",
    duration: "5 Weeks",
    difficulty: "Beginner",
    prerequisites: "Familiarity with data analysis concepts.",
    keyFeatures: [
      "Focus on Visual Best Practices and Design",
      "Custom Geocoding and Mapping",
      "Creating High-Impact Story Points",
      "Peer Feedback and Review Sessions",
    ],
    syllabus: [
      "Connecting and Preparing Data in Tableau",
      "Creating Basic and Advanced Charts and Visualizations (LOD Expressions)",
      "Calculated Fields, Parameters, and Sets",
      "Building Interactive Dashboards and Actions",
      "Data Storytelling Techniques and Publishing",
      "Project: Data Storytelling with Tableau Public",
    ],
  },
  ml: {
    title: "Machine Learning",
    subtitle:
      "Build and deploy robust predictive models using essential ML algorithms and Python frameworks.",
    overview:
      "This course provides a complete journey through machine learning, covering mathematical foundations, supervised and unsupervised algorithms, ensemble methods, natural language processing, forecasting, and deep learning. You will gain hands-on experience with Python libraries like Scikit-learn, TensorFlow, and PyTorch, and build end-to-end ML projects including deployment.",
    duration: "100 hrs",
    difficulty: "Advanced",
    prerequisites:
      "Strong Python programming skills and understanding of linear algebra, probability, and calculus.",
    keyFeatures: [
      "21 Structured Modules Covering Full ML Spectrum",
      "Hands-on Labs with Scikit-learn, TensorFlow, and PyTorch",
      "Capstone Project: End-to-End ML Pipeline with Deployment",
      "Private Git Repository Access for Project Code",
      "Expert Mentorship and Weekly Code Reviews",
    ],
    syllabus: [
      "Module 1: Mathematical Foundations (Probability, Linear Algebra, Statistics)",
      "Module 2: Clustering (K-Means, DBSCAN, Hierarchical)",
      "Module 3: Dimension Reduction (PCA, t-SNE, Feature Selection)",
      "Module 4: Association Rules (Apriori, FP-Growth, Market Basket Analysis)",
      "Module 5: Network Analytics (Graph Theory, Centrality, Community Detection)",
      "Module 6: Text Mining (Preprocessing, TF-IDF, Topic Modeling)",
      "Module 7: Natural Language Processing (Tokenization, Embeddings, Sentiment Analysis)",
      "Module 8: Naive Bayes (Gaussian, Multinomial, Applications)",
      "Module 9: k-Nearest Neighbors (Classification & Regression, Distance Metrics)",
      "Module 10: Decision Tree (Entropy, Gini, Pruning, Regression Trees)",
      "Module 11: Ensemble Techniques (Bagging, Random Forests, Boosting, Stacking)",
      "Module 12: Confidence Interval (Standard Error, Intervals, Interpretation)",
      "Module 13: Hypothesis Testing (p-values, t-tests, Chi-Square, ANOVA)",
      "Module 14: Simple Linear Regression (Model Assumptions, Evaluation Metrics)",
      "Module 15: Multiple Linear Regression (Multicollinearity, Feature Selection, R²)",
      "Module 16: Logistic Regression (Binary, ROC Curve, AUC)",
      "Module 17: Multinomial Regression (Softmax, Multiclass Applications)",
      "Module 18: Lasso and Ridge Regression (Regularization, ElasticNet)",
      "Module 19: Blackbox-SVM",
      // "Module 19: Support Vector Machines (Linear, Kernel, Hyperparameter Tuning)",
      "Module 20: Forecasting (Time Series, ARIMA, Prophet Models)",
      "Module 21: Deep Learning (Neural Networks, Backpropagation, TensorFlow/Keras Applications)",
      "Capstone Project: End-to-End ML Pipeline (Data Preprocessing → Modeling → Deployment with Flask/Streamlit)",
    ],
  },
  genai: {
    title: "Generative AI",
    subtitle:
      "Explore large language models (LLMs), transformer architecture, and advanced prompt engineering techniques.",
    overview:
      "This course provides a cutting-edge exploration of generative AI. You will learn the foundations of generative models, master transformer architecture, understand how LLMs work, and gain hands-on experience with frameworks like Hugging Face, LangChain, and vector databases. The course also covers prompt engineering, fine-tuning, multimodal AI, and ethical considerations, with a capstone project to build your own AI-powered application.",
    duration: "30 hrs",
    difficulty: "Advanced",
    prerequisites: "Intermediate Python and ML knowledge.",
    keyFeatures: [
      "Hands-on Labs with Hugging Face, OpenAI, and LangChain",
      "Deep Dive into Transformer Architecture and LLM Workflows",
      "Practical Training in Prompt Engineering & Retrieval-Augmented Generation (RAG)",
      "Exploration of Multimodal Generative Models (Text, Image, Code)",
      "Capstone Project: Build and Deploy a Generative AI Application",
    ],
    syllabus: [
      "Module 1: Introduction to Generative AI (History, Applications, Ethical Considerations)",
      "Module 2: Mathematical & ML Foundations (Linear Algebra, Probability, Neural Networks, Attention Mechanism)",
      "Module 3: Large Language Models (GPT, LLaMA, PaLM, Tokenization, Embeddings, Fine-tuning & PEFT)",
      "Module 4: Tools & Frameworks (Hugging Face, LangChain, Vector Databases, RAG Systems)",
      "Module 5: Generative Models in Other Domains (Diffusion Models, Stable Diffusion, DALL·E, Code Generation, Multimodal AI)",
      "Capstone Project: Design, Build, and Deploy a Chatbot or Generative AI Solution",
    ],
  },
  analytics: {
    title: "Professional Data Analytics",
    subtitle:
      "Become an industry-ready Data Analyst by mastering tools, techniques, and visualization platforms.",
    overview:
      "This course prepares you for real-world analytics roles with hands-on training in Excel, SQL, Power BI, and Tableau. You will learn data cleaning, data wrangling, business intelligence reporting, and visualization best practices. Through guided labs and projects, you will develop the ability to analyze business problems and communicate actionable insights.",
    duration: "60 hrs",
    difficulty: "Beginner to Intermediate",
    prerequisites:
      "Basic knowledge of spreadsheets or programming concepts is helpful but not mandatory.",
    keyFeatures: [
      "Hands-on Training with Excel, SQL, Power BI, and Tableau",
      "Practical Projects with Business Case Studies",
      "Visualization and Storytelling Best Practices",
      "Capstone Project for Real-World Analytics Problem",
      "Industry-Oriented Curriculum with Placement Support",
    ],
    syllabus: [
      "Module 1: Introduction to Data Analytics (Overview, Career Paths, Tools)",
      "Module 2: Excel for Analytics (Formulas, Pivot Tables, Dashboards)",
      "Module 3: SQL for Data Analysis (Joins, Aggregations, Subqueries, Case Studies)",
      "Module 4: Power BI (Data Cleaning, DAX, Building Interactive Dashboards)",
      "Module 5: Tableau (Visualizations, Storytelling, Advanced Charts)",
      "Module 6: Statistics for Analytics (Descriptive Stats, Hypothesis Testing, Correlations)",
      "Module 7: Business Problem Solving (Case Studies, KPI Design, Insights Communication)",
      "Capstone Project: End-to-End Business Analytics Dashboard",
    ],
    learningPath: [
      {
        title: "Python for Data Analysis",
        description: "Learn Python basics, data types, and libraries like Pandas, NumPy, and Matplotlib",
        details: "Perform data cleaning, transformation, and visualization using real-world datasets."
      },
      {
        title: "SQL for Data Handling",
        description: "Understand relational databases and learn to write queries, joins, subqueries, and aggregations.",
        details: "Extract and manage data efficiently to support analytics and reporting."
      },
      {
        title: "Power BI",
        description: "Build interactive dashboards and visual reports using Power BI.",
        details: "Learn data modeling, DAX formulas, and KPI visualization for business insights"
      },
      {
        title: "Tableau",
        description: "Create dynamic visualizations and storyboards for business presentations.",
        details: "Learn data blending, calculated fields, and dashboard design techniques."
      },
      {
        title: "Advanced Excel",
        description: "Master formulas, pivot tables, and data cleaning tools.",
        details: "Learn Power Query, Power Pivot, and advanced charting for business analysis. Automate reports using macros and visualization best practices."
      },
      // {
      //   title: "Business Problem Solving",
      //   description: "Analyze business cases and define KPIs.",
      //   details: "Communicate insights effectively to stakeholders. Develop data-driven decision-making skills."
      // },
      {
        title: "LIVE PROJECTS",
        description: "Apply your skills in real-world business case studies.",
        details: "Analyze and present insights using a combination of Python, SQL, and BI tools. Gain confidence to handle end-to-end data analysis tasks."
      }
    ]
  },
  datascience: {
    title: "Professional Data Science",
    subtitle:
      "Master statistics, machine learning, and advanced modeling to become a skilled Data Scientist.",
    overview:
      "This Professional Data Science Program is designed to build complete industry-ready data professionals. The course covers Python, SQL, Power BI, Exploratory Data Analysis (EDA), Machine Learning, Deep Learning, and Generative AI. You will learn how to collect, analyze, visualize, and model data to make data-driven decisions. Through hands-on projects and real-world case studies, you will gain the technical and analytical skills needed to solve practical business problems and succeed in the AI-driven world. ",
    duration: "160 hrs",
    difficulty: "Intermediate to Advanced",
    prerequisites:
      "Good knowledge of Python and basic statistics. Familiarity with linear algebra and probability is recommended.",
    keyFeatures: [
      "Comprehensive Curriculum Covering Statistics, ML, and AI",
      "Hands-on Training with Python Libraries (Pandas, NumPy, Scikit-learn, TensorFlow, PyTorch)",
      "Multiple Real-World Projects and Case Studies",
      "Capstone Project: End-to-End Data Science Workflow",
      "Mentorship from Industry Experts with Placement Assistance",
    ],
    syllabus: [
      "Module 1: Python for Data Science (NumPy, Pandas, Matplotlib, Seaborn)",
      "Module 2: Statistics & Probability for Data Science (Distributions, Hypothesis Testing, Confidence Intervals)",
      "Module 3: Exploratory Data Analysis (EDA, Data Cleaning, Feature Engineering)",
      "Module 4: Machine Learning (Supervised & Unsupervised Learning, Model Evaluation)",
      "Module 5: Advanced ML (Ensemble Models, Hyperparameter Tuning, Cross-Validation)",
      "Module 6: Deep Learning (Neural Networks, CNNs, RNNs with TensorFlow & PyTorch)",
      "Module 7: Natural Language Processing (Text Cleaning, Embeddings, Transformers)",
      "Module 8: Model Deployment & MLOps (Flask/Streamlit, APIs, CI/CD Basics)",
      "Capstone Project: Full Data Science Project from Data Collection to Deployment",
    ],
    learningPath: [
      {
        title: "Python for Data Science",
        description: "Learn programming basics, data types, loops, and functions.",
        details: "Work with data using Pandas, NumPy, Matplotlib, and Seaborn. Build a strong foundation for analytical problem-solving and automation."
      },
      {
        title: "SQL for Data Analysis",
        description: "Understand how databases work and learn to write queries, joins, subqueries, and window functions.",
        details: "Perform data extraction, manipulation, and aggregation for analytics. Gain confidence in handling large datasets efficiently."
      },
      {
        title: "Exploratory Data Analysis (EDA)",
        description: "Clean, process, and visualize real-world data.",
        details: "Identify trends, patterns, and outliers using Python visualization libraries. Prepare data for predictive modeling and reporting."
      },
      {
        title: "Machine Learning (ML)",
        description: "Learn supervised and unsupervised algorithms such as Regression, Classification, Clustering, and Ensemble Models.",
        details: "Understand feature selection, model evaluation, and optimization. Work on predictive modeling case studies."
      },
      {
        title: "Deep Learning (DL)",
        description: "Understand neural networks, CNNs, and RNNs.",
        details: "Work with frameworks like TensorFlow and Keras. Build projects involving image and text data."
      },
      {
        title: "Generative AI (GenAI)",
        description: "Explore Large Language Models (LLMs) like GPT and LLaMA.",
        details: "Learn prompt engineering, RAG (Retrieval Augmented Generation), and AI chatbot development. Understand how to integrate AI models into real-world applications."
      },
      {
        title: "Power BI / Tableau / Excel (Business Intelligence)",
        description: "Create interactive dashboards and visual reports.",
        details: "Perform advanced data modeling, DAX calculations, and KPI tracking. Learn storytelling with data for better decision-making."
      },
      {
        title: "LIVE PROJECTS",
        description: "Apply all your skills in real-world, end-to-end projects.",
        details: "Work on domains like retail, finance, and healthcare. Present your project outcomes and gain a Certificate of Completion."
      }
    ]
  },
};

// --- COMPONENTS ---

const HeroBanner = ({ title, subtitle }) => (
  <motion.section
    className="text-white py-18 px-6 sm:px-12 text-center shadow-2xl"
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
  className="max-w-6xl mx-auto -mt-12 mb-6 flex justify-center px-6"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={staggerContainer}
>
  <motion.div
    className="w-[22rem] bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border-t-4 border-t-yellow-400 flex items-center space-x-5"
    whileHover={{ scale: 1.03 }}
    variants={fadeInUp}
  >
    <FiClock size={36} style={{ color: SECONDARY_COLOR }} />
    <div>
      <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
        Duration
      </h3>
      <p className="text-2xl font-bold text-gray-800 mt-1">{duration}</p>
    </div>
  </motion.div>
</motion.div>

  // <motion.div
  //   className="max-w-6xl mx-auto -mt-12 mb-6 grid grid-cols-1 sm:grid-cols-3 gap-6 px-6"
  //   initial="hidden"
  //   whileInView="visible"
  //   viewport={{ once: true }}
  //   variants={staggerContainer}
  // >
  //   <motion.div
  //     className="bg-white p-6 rounded-lg shadow-xl border-t-4 border-t-yellow-400 flex items-center space-x-4"
  //     variants={fadeInUp}
  //   >
  //     <FiClock size={30} style={{ color: SECONDARY_COLOR }} />
  //     <div>
  //       <h3 className="text-sm font-semibold text-gray-500 uppercase">
  //         Duration
  //       </h3>
  //       <p className="text-xl font-bold text-gray-800">{duration}</p>
  //     </div>
  //   </motion.div>
  //   <motion.div
  //     className="bg-white p-6 rounded-lg shadow-xl border-t-4 border-t-red-400 flex items-center space-x-4"
  //     variants={fadeInUp}
  //   >
  //     <FiZap size={30} style={{ color: ACCENT_COLOR }} />
  //     <div>
  //       <h3 className="text-sm font-semibold text-gray-500 uppercase">
  //         Difficulty
  //       </h3>
  //       <p className="text-xl font-bold text-gray-800">{difficulty}</p>
  //     </div>
  //   </motion.div>
  //   <motion.div
  //     className="bg-white p-6 rounded-lg shadow-xl border-t-4 border-t-blue-400 flex items-center space-x-4"
  //     variants={fadeInUp}
  //   >
  //     <FiBookOpen size={30} style={{ color: PRIMARY_COLOR }} />
  //     <div>
  //       <h3 className="text-sm font-semibold text-gray-500 uppercase">
  //         Prerequisites
  //       </h3>
  //       <p className="text-xl font-bold text-gray-800">{prerequisites}</p>
  //     </div>
  //   </motion.div>
  // </motion.div>
);

const CourseOverview = ({ overview }) => (
  <motion.section
    className="max-w-6xl mx-auto px-6 sm:px-12 py-6 text-gray-900"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    variants={fadeInUp}
  >
    <h2
      className="text-3xl font-bold mb-6 border-b-2 pb-2 inline-block"
      style={{ borderColor: SECONDARY_COLOR, color: PRIMARY_COLOR }}
    >
      Course Overview
    </h2>
    <p className="text-lg leading-relaxed text-gray-700">{overview}</p>
  </motion.section>
);

const KeyFeatures = ({ keyFeatures }) => (
  <motion.section
    className="max-w-6xl mx-auto px-6 sm:px-12 py-18"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    variants={staggerContainer}
  >
    <h2
      className="text-3xl font-bold mb-8 text-center"
      style={{ color: PRIMARY_COLOR }}
    >
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

// NEW COMPONENT: Path of Learning
const PathOfLearning = ({ learningPath }) => (
  <motion.section
    className="max-w-6xl mx-auto px-6 sm:px-12 py-18"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    variants={staggerContainer}
  >
    <div className="text-center mb-12">
      <h2
        className="text-3xl font-bold mb-4"
        style={{ color: PRIMARY_COLOR }}
      >
        Path of Learning
      </h2>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto">
        Our structured learning path ensures you build skills progressively, from fundamentals to advanced applications.
      </p>
    </div>
    
    <div className="relative">
      {/* Vertical line connector */}
      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200 transform -translate-x-1/2 hidden md:block"></div>
      
      <div className="space-y-12">
        {learningPath.map((item, idx) => (
          <motion.div
            key={idx}
            className="flex flex-col md:flex-row items-start"
            variants={fadeInUp}
          >
            {/* Icon and connector */}
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white border-2 border-blue-500 z-10 mb-4 md:mb-0 md:mr-6">
              <FiTrendingUp className="text-blue-500" />
            </div>
            
            {/* Content */}
            <div className="bg-white p-6 rounded-xl shadow-lg flex-1 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold mb-2" style={{ color: PRIMARY_COLOR }}>
                {item.title}
              </h3>
              <p className="text-gray-700 font-medium mb-2">
                {item.description}
              </p>
              <p className="text-gray-600">
                {item.details}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </motion.section>
);

const DetailedSyllabus = ({ syllabus }) => (
  <motion.section
    className="bg-white max-w-6xl mx-auto px-6 sm:px-12 py-18 rounded-xl shadow-2xl"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    variants={fadeInUp}
  >
    <h2
      className="text-3xl font-bold mb-10 text-center"
      style={{ color: PRIMARY_COLOR }}
    >
      Detailed Syllabus
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
      {syllabus.map((item, idx) => (
        <motion.div
          key={idx}
          className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition duration-300"
          variants={fadeInUp}
        >
          <FiCheckCircle
            size={20}
            className="mt-1 flex-shrink-0"
            style={{ color: SECONDARY_COLOR }}
          />
          <div className="text-lg text-gray-800">
            <span className="font-semibold" style={{ color: PRIMARY_COLOR }}>
              Module {idx + 1}:
            </span>{" "}
            {item}
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
    learningPath, 
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

       {/* Conditionally render PathOfLearning only for datascience and analytics */}
      {(courseId === 'datascience' || courseId === 'analytics') && learningPath && (
        <PathOfLearning learningPath={learningPath} />
      )}

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
