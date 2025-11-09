import React from 'react';
import { Sparkles, TrendingUp, DollarSign, Brain, Code, Eye, Database } from 'lucide-react';

// --- Career Path Data ---
const careerPaths = [
  {
    title: "Data Scientist",
    icon: Brain,
    description: "The complete package: analyzing complex data, developing models, and communicating actionable insights to drive business strategy.",
    color: "text-red-600",
    bg: "bg-red-50",
  },
  {
    title: "Machine Learning Engineer",
    icon: Code,
    description: "Designing, building, and deploying scalable machine learning systems in production environments. Focuses on robust code and MLOps.",
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    title: "AI Engineer",
    icon: Sparkles,
    description: "Focuses on the broader application of AI principles, building intelligent agents and core AI infrastructure for various products.",
    color: "text-yellow-600",
    bg: "bg-yellow-50",
  },
  {
    title: "Deep Learning Specialist",
    icon: TrendingUp,
    description: "Working with neural networks, complex algorithms, and large datasets to solve the most challenging problems like generative AI.",
    color: "text-purple-600",
    bg: "bg-purple-50",
  },
  {
    title: "NLP Engineer",
    icon: DollarSign,
    description: "Building systems to understand, interpret, and generate human language. Critical for chatbots, sentiment analysis, and smart assistants.",
    color: "text-green-600",
    bg: "bg-green-50",
  },
  {
    title: "Computer Vision Engineer",
    icon: Eye,
    description: "Developing algorithms that allow computers to 'see' and interpret visual data (images and videos). Used in autonomous vehicles and facial recognition.",
    color: "text-indigo-600",
    bg: "bg-indigo-50",
  },
  {
    title: "Big Data Engineer",
    icon: Database,
    description: "Designing and managing the large-scale data architecture (pipelines, warehouses, and lakes) required for all analytics and ML tasks.",
    color: "text-orange-600",
    bg: "bg-orange-50",
  },
  {
    title: "Business Intelligence (BI) Developer",
    icon: DollarSign, // Reusing DollarSign as a symbol for business value/profit
    description: "Transforming raw data into meaningful business reports and dashboards, helping stakeholders make data-driven decisions.",
    color: "text-teal-600",
    bg: "bg-teal-50",
  },
  {
    title: "Data Engineer",
    icon: Database, // Reusing Database for clarity
    description: "Creating robust and optimized infrastructure for data extraction, transformation, and loading (ETL) to ensure data quality and availability.",
    color: "text-pink-600",
    bg: "bg-pink-50",
  },
];

// --- Component Styles ---
const PRIMARY_COLOR = "#023270"; // Deep Blue

// --- Career Card Component ---
const CareerCard = ({ path }) => {
  const Icon = path.icon;
  return (
    <div
      className={`p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 h-full flex flex-col ${path.bg}`}
    >
      <div className="flex items-center mb-4">
        <div className={`p-3 rounded-full ${path.color} bg-white shadow-md`}>
          <Icon className="w-6 h-6" />
        </div>
        <h3 className="ml-4 text-xl font-bold" style={{ color: PRIMARY_COLOR }}>
          {path.title}
        </h3>
      </div>
      <p className="text-gray-700 mt-2 flex-grow">{path.description}</p>
      <div className="mt-4">
        <span className={`text-sm font-semibold p-1.5 rounded-full ${path.color} bg-white`}>
          High Demand
        </span>
      </div>
    </div>
  );
};

// --- Main Component ---
const CareerPathShowcase = () => {
  return (
    <section className="py-18 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2
          className="text-4xl sm:text-5xl font-extrabold mb-4 tracking-tight"
          style={{ color: PRIMARY_COLOR }}
        >
          Highest-Paying Career Paths
        </h2>
        <p className="text-xl text-gray-600 mb-16 max-w-3xl mx-auto">
          Equip yourself with the skills for these high-demand, high-impact roles after completing our specialized AI/Data Science course.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {careerPaths.map((path, index) => (
            <CareerCard key={path.title} path={path} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareerPathShowcase;