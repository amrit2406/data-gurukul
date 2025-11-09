import React from "react";
import { motion } from "framer-motion";

// Brand Colors
const PRIMARY_COLOR = "#023270";
const SECONDARY_COLOR = "#796202";

// Tools Data
const tools = [
  {
    name: "Spyder",
    img: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Spyder_logo.svg",
  },
  {
    name: "Jupyter Notebook",
    img: "https://upload.wikimedia.org/wikipedia/commons/3/38/Jupyter_logo.svg",
  },
  {
    name: "Google Colab",
    img: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Google_Colaboratory_SVG_Logo.svg",
  },
  {
    name: "AWS SageMaker",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd-GRSCsLqcrvT1Q5C7TqBPIe6CY9cYG5JfQ&s",
  },
  {
    name: "Azure Databricks",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA9evqOC59ZcPyjL2-nnMXboMeUbhr3e266w&s",
  },
  {
    name: "Git & GitHub",
    img: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg",
  },
  {
    name: "Docker",
    img: "https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png",
  },
  {
    name: "Hugging Face",
    img: "https://upload.wikimedia.org/wikipedia/commons/d/d6/Hf-logo-with-title.svg",
  },
];

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ToolsSection = () => {
  return (
    <section className="bg-gradient-to-tr from-white via-[#fdf9e5] to-[#f0faff] py-18">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          className="text-4xl sm:text-5xl font-extrabold mb-8"
          style={{ color: PRIMARY_COLOR }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          Tools You Will Learn
        </motion.h2>

        <motion.p
          className="text-gray-600 max-w-2xl mx-auto mb-16 text-lg"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          Master the most in-demand tools used by data scientists and AI 
          engineers around the world.
        </motion.p>

        {/* Tools Grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 place-items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center group hover:scale-105 transition-transform duration-300"
              whileHover={{ scale: 1.08 }}
            >
              <div className="bg-white rounded-2xl shadow-lg p-6 flex items-center justify-center w-32 h-32 transition-all duration-300 group-hover:shadow-yellow-400/50">
                <img
                  src={tool.img}
                  alt={tool.name}
                  className="w-20 h-20 object-contain"
                />
              </div>
              <p
                className="mt-4 text-lg font-semibold"
                style={{ color: SECONDARY_COLOR }}
              >
                {tool.name}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ToolsSection;
