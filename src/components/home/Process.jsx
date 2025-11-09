import React from "react";
import { ArrowRight, ArrowDown } from "lucide-react"; // Using lucide icons for clean arrows

import step1 from "../../assets/step1.png";
import step2 from "../../assets/step2.png";
import step3 from "../../assets/step3.png";
import step4 from "../../assets/step4.png";
import step5 from "../../assets/step5.png";
import step6 from "../../assets/step6.png";
import step7 from "../../assets/step7.png";


// --- Configuration and Data ---
const PRIMARY_COLOR = "#023270"; // Deep Blue
const SECONDARY_COLOR = "#796202"; // Gold/Brown for accent


const steps = [
  { label: "Admission", img: step1 },
  { label: "Study/Course", img: step2 },
  { label: "Task/Assignment", img: step3 },
  { label: "Project", img: step4 },
  { label: "Mock Interview", img: step5 },
  { label: "Interview", img: step6 },
  { label: "Job/Placement", img: step7 },
];

// NOTE: Replace placeholderImg with your actual imported image (e.g., img: step1)
// I'm using placeholder URLs as I cannot access your local files.

// --- Arrow Components ---

// Horizontal Arrow
const HorizontalArrow = () => (
  <div className="hidden lg:flex items-center justify-center h-full mx-4">
    <ArrowRight className="w-8 h-8 text-gray-300 transition-colors" />
  </div>
);

// Vertical Arrow (Connector for the turn)
const DownwardConnector = () => (
  <div className="flex items-center justify-center w-full my-6 lg:my-0">
    <ArrowDown className="w-10 h-10 text-gray-400" />
  </div>
);

// --- Step Card Component ---
const StepCard = ({ step, index }) => (
  <div className="flex flex-col items-center w-full sm:w-1/2 md:w-1/4 p-4 text-center">
    {/* Step Number Badge */}
    <div
      className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-xl mb-3 shadow-md"
      style={{ backgroundColor: PRIMARY_COLOR }}
    >
      {index + 1}
    </div>
    
    {/* Image */}
    <div className="w-44 h-44 mb-3 border-4 rounded-full overflow-hidden shadow-lg" style={{ borderColor: SECONDARY_COLOR }}>
      {/* NOTE: In your final code, replace step.placeholderImg with step.img 
        from your local imports, like the original code: 
        <img src={step.img} ... /> 
      */}
      <img
        src={step.img} // Using placeholder URL here
        alt={`Step ${step.label}`}
        className="w-full h-full object-cover"
      />
    </div>
    
    {/* Label (Fixed overlapping text) */}
    <p className="text-base font-semibold text-gray-800 leading-tight">
      {step.label}
    </p>
  </div>
);

// --- Main Component ---
const ZigZagRoadmap = () => {
  const row1 = steps.slice(0, 4);
  const row2 = steps.slice(4, 7);

  return (
    <section className="py-18 bg-gradient-to-r from-[#fdfbfa] via-[#f7f3e1] to-[#f0f5ff]">
      <div className="max-w-7xl mx-auto px-6">
        <h2
          className="text-4xl sm:text-5xl font-extrabold text-center mb-16"
          style={{ color: PRIMARY_COLOR }}
        >
          Your Journey to Excellence
        </h2>

        {/* --- Path Container (Desktop: Horizontal-Vertical-Horizontal) --- */}
        <div className="hidden lg:block">
          
          {/* First Row: Steps 1-4 */}
          <div className="flex items-start justify-center">
            {row1.map((step, idx) => (
              <React.Fragment key={step.label}>
                <StepCard step={step} index={idx} />
                {/* Horizontal Connector */}
                {idx < row1.length - 1 && <HorizontalArrow />}
              </React.Fragment>
            ))}
          </div>

          {/* Downward Connector (Turn) */}
          <div className="flex justify-end w-full max-w-5xl mx-auto pr-24">
            <DownwardConnector />
          </div>

          {/* Second Row: Steps 5-7 (Offset to the left) */}
          <div className="flex items-start justify-start w-full max-w-5xl mx-auto pl-8">
            {row2.map((step, idxOffset) => {
              const idx = idxOffset + 4; // Actual step index (4, 5, 6)
              return (
                <React.Fragment key={step.label}>
                  {/* Horizontal Connector (before the step card, except the first one in the row) */}
                  {idxOffset > 0 && <HorizontalArrow />}
                  <StepCard step={step} index={idx} />
                </React.Fragment>
              );
            })}
          </div>
        </div>

        {/* --- Path Container (Mobile: Vertical Stack) --- */}
        <div className="lg:hidden flex flex-col items-center">
          {steps.map((step, idx) => (
            <React.Fragment key={step.label}>
              <div className="w-full max-w-xs">
                 <StepCard step={step} index={idx} />
              </div>
              {/* Vertical Connector between all steps */}
              {idx < steps.length - 1 && (
                <div className="py-4">
                  <ArrowDown className="w-6 h-6 text-gray-400" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ZigZagRoadmap;