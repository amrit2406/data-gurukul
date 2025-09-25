import React from "react";
import { motion } from "framer-motion";
import { FaFilePdf, FaStickyNote } from "react-icons/fa";

const materials = [
  { id: 1, title: "Past 5 Years Board Papers", icon: <FaFilePdf />, link: "/resources/board-papers.pdf" },
  { id: 2, title: "Mind Maps Collection", icon: <FaStickyNote />, link: "/resources/mind-maps.zip" },
];

export default function StudyMaterial() {
  return (
    <motion.section
      className="max-w-5xl mx-auto px-6 mb-16"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold text-[#153b6c] mb-8 text-center">Study Material Highlights</h2>
      <div className="grid max-w-3xl mx-auto grid-cols-1 md:grid-cols-2 gap-8">
        {materials.map(({ id, title, icon, link }) => (
          <motion.a
            key={id}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-white shadow-md rounded-xl px-6 py-5 cursor-pointer hover:shadow-xl transition"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <div className="text-4xl text-[#67b0e3]">{icon}</div>
            <span className="font-semibold text-[#153b6c]">{title}</span>
          </motion.a>
        ))}
      </div>
    </motion.section>
  );
}
