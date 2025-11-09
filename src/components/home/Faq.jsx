import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const PRIMARY_COLOR = "#023270"; // deep blue
const SECONDARY_COLOR = "#796202"; // gold
const FADE_BG = "rgba(121, 98, 2, 0.1)"; // soft gold translucency

const headerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const answerVariants = {
  open: { opacity: 1, height: "auto", transition: { duration: 0.4 } },
  collapsed: { opacity: 0, height: 0, transition: { duration: 0.4 } },
};

const FAQItem = ({ faq, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className="border-b border-gray-200"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <button
        className="flex justify-between items-center w-full py-5 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span
          className="text-xl font-semibold pr-4"
          style={{ color: PRIMARY_COLOR }}
        >
          {faq.question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="w-6 h-6" style={{ color: SECONDARY_COLOR }} />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={answerVariants}
            className="overflow-hidden"
          >
            <div
              className="pb-5 pt-1 text-lg leading-relaxed pr-8 pl-4 bg-white/80 rounded-lg shadow-inner"
              style={{ color: "#444", borderLeft: `4px solid ${SECONDARY_COLOR}` }}
            >
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const faqs = [
  {
    question: "What is the typical duration of a course?",
    answer:
      "Our core bootcamps typically range from 6 to 9 months, depending on whether you choose a part-time or full-time schedule. Specialized modules like Generative AI are generally 4-6 weeks long.",
  },
  {
    question: "Is prior coding experience required to enroll?",
    answer:
      "No, our **Python Mastery** course starts from the absolute fundamentals. We welcome beginners and provide extensive foundational training to ensure you are ready for advanced topics like Machine Learning.",
  },
  {
    question: "What kind of placement assistance does Data Gurukul provide?",
    answer:
      "We offer 100% placement assistance, including resume writing workshops, dedicated interview preparation (technical and HR), and direct access to our network of hiring partners through an exclusive job portal.",
  },
  {
    question: "Are the instructors industry experts?",
    answer:
      "Absolutely. All our 'Gurukuls' (Mentors) are senior Data Scientists, ML Engineers, and AI specialists currently working at leading FAANG and high-growth technology companies. They teach based on real-world experience.",
  },
  {
    question: "Can I pay the course fee in installments?",
    answer:
      "Yes, we offer flexible payment options, including interest-free monthly installments through our financial partners. Please contact our admissions team for personalized plans.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-18 sm:py-18 bg-gradient-to-tr from-white via-[#fef9f0] to-[#f9fcff]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={headerVariants}
        >
          <p
            className="text-lg font-semibold uppercase tracking-widest"
            style={{ color: PRIMARY_COLOR, letterSpacing: "0.18em" }}
          >
            Quick Answers
          </p>
          <h2 className="mt-2 text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Frequently Asked <span style={{ color: PRIMARY_COLOR }}>Questions</span>
          </h2>
        </motion.div>

        {/* FAQ List Container */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl p-8 sm:p-12">
          {faqs.map((faq, index) => (
            <FAQItem key={index} faq={faq} index={index} />
          ))}
        </div>

        {/* Footer CTA */}
        {/* <div className="mt-16 text-center">
          <p className="text-xl text-gray-600 mb-6">
            Still have questions? Our team is ready to help.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center rounded-full bg-gradient-to-r from-[#796202] to-[#b38f09] px-8 py-4 text-lg font-semibold text-white shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
          >
            Contact Admissions <HelpCircle className="w-5 h-5 ml-2" />
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default FAQSection;
