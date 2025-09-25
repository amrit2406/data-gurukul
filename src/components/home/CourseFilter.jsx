import React, { useState } from "react";
import { motion } from "framer-motion";

const grades = ["6", "7", "8", "9", "10"];
const boards = ["CBSE", "ICSE", "CHSE", "State Board"];
const courseTypes = ["Regular", "Crash", "NEET", "JEE"];

export default function CourseFilter({ onFilterChange }) {
  const [selectedGrade, setSelectedGrade] = useState("");
  const [selectedBoard, setSelectedBoard] = useState("");
  const [selectedType, setSelectedType] = useState("");

  function handleFilterChange() {
    onFilterChange({ grade: selectedGrade, board: selectedBoard, type: selectedType });
  }

  return (
    <motion.section 
      initial={{ opacity: 0, y: 40 }} 
      animate={{ opacity: 1, y: 0 }}
      className="max-w-5xl mx-auto bg-white rounded-xl shadow-md p-8 mb-16"
    >
      <h2 className="text-2xl font-bold text-[#153b6c] mb-6">Find Your Course</h2>
      <form 
        className="flex flex-col sm:flex-row gap-6"
        onChange={handleFilterChange}
      >
        <select
          value={selectedGrade}
          onChange={(e) => setSelectedGrade(e.target.value)}
          className="flex-1 border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#67b0e3] transition"
        >
          <option value="">Select Grade</option>
          {grades.map((g) => (
            <option key={g} value={g}>{`Grade ${g}`}</option>
          ))}
        </select>

        <select
          value={selectedBoard}
          onChange={(e) => setSelectedBoard(e.target.value)}
          className="flex-1 border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#67b0e3] transition"
        >
          <option value="">Select Board</option>
          {boards.map((b) => (
            <option key={b} value={b}>{b}</option>
          ))}
        </select>

        <select
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
          className="flex-1 border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#67b0e3] transition"
        >
          <option value="">Select Course Type</option>
          {courseTypes.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </form>
    </motion.section>
  );
}
