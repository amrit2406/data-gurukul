import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const WA_NUMBER = "918917236682"; // Your WhatsApp number with country code (no '+' or spaces)

// List of courses
const courses = [
  // "Python Mastery",
  // "SQL & Database Systems",
  // "PowerBI",
  // "Tableau",
  // "Machine Learning",
  // "Generative AI",
  "Data Science",
  "Data Analytics",
  "Gen AI",
];

// Animation variants for the overlay
const popupVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

const PopupFormResponsive = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    course: "",
  });
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Open popup after a slight delay
    const timer = setTimeout(() => setShow(true), 800);
    return () => clearTimeout(timer);
  }, []);

  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleClose = () => setShow(false);

  // WhatsApp message template
  function getWhatsAppLink() {
    const message = encodeURIComponent(
      `Hello, I am interested in a course:\n\n` +
      `Name: ${form.name}\n` +
      `Phone: ${form.phone}\n` +
      `Email: ${form.email}\n` +
      `Course: ${form.course}\n`
    );
    return `https://wa.me/${WA_NUMBER}?text=${message}`;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name && form.phone && form.email && form.course) {
      // Simple validation check (added for robustness)
      if (!form.phone.match(/^\d{10,15}$/)) {
        alert("Please enter a valid phone number (10 to 15 digits).");
        return;
      }
      
      window.open(getWhatsAppLink(), "_blank");
      setShow(false);
    }
  };

  return (
    <AnimatePresence>
      {show && (
        // RETAINED DESIGN: Fixed overlay, but added mobile-friendly padding (p-4)
        <motion.div
          className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-4"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={popupVariants}
          onClick={(e) => {
            if (e.target === e.currentTarget) handleClose();
          }}
        >
          {/* RETAINED DESIGN: Form container styling, but improved mobile sizing and scrollability */}
          <motion.div
            className="relative bg-white w-full max-w-sm sm:max-w-md p-6 sm:p-8 rounded-2xl shadow-2xl border-4 border-yellow-100 max-h-[90vh] overflow-y-auto"
            initial={{ opacity: 0, y: "100vh" }} // Responsive start position
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100vh" }}
            transition={{ type: "spring", stiffness: 180, damping: 22 }}
          >
            {/* RETAINED DESIGN: Close button */}
            <button
              onClick={handleClose}
              className="absolute right-5 top-5 text-gray-400 hover:text-red-500 font-bold text-lg"
              aria-label="Close"
            >
              ×
            </button>
            
            {/* RETAINED DESIGN: Header */}
            <h2 className="text-2xl font-bold text-center text-yellow-700 mb-6">
              Quick Enquiry
            </h2>
            
            <form className="space-y-5" onSubmit={handleSubmit}>
              {/* Input: Full Name */}
              <div>
                <label className="font-medium text-gray-600">Full Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={onChange}
                  placeholder="Your Name"
                  // RETAINED DESIGN: Input styling
                  className="w-full mt-1 p-2 rounded-md border border-gray-300 focus:outline-yellow-500"
                />
              </div>
              
              {/* Input: Phone Number */}
              <div>
                <label className="font-medium text-gray-600">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={form.phone}
                  onChange={onChange}
                  maxLength={15}
                  placeholder="10-digit Number"
                  // RETAINED DESIGN: Input styling
                  className="w-full mt-1 p-2 rounded-md border border-gray-300 focus:outline-yellow-500"
                  inputMode="numeric" // Added for mobile keyboard optimization
                />
              </div>
              
              {/* Input: Email */}
              <div>
                <label className="font-medium text-gray-600">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={onChange}
                  placeholder="you@example.com"
                  // RETAINED DESIGN: Input styling
                  className="w-full mt-1 p-2 rounded-md border border-gray-300 focus:outline-yellow-500"
                />
              </div>
              
              {/* Input: Course Select */}
              <div>
                <label className="font-medium text-gray-600">Course Interested In</label>
                <select
                  name="course"
                  required
                  value={form.course}
                  onChange={onChange}
                  // RETAINED DESIGN: Input styling
                  className="w-full mt-1 p-2 rounded-md border border-gray-300 focus:outline-yellow-500 bg-white"
                >
                  <option value="">Select a course</option>
                  {courses.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>
              
              {/* RETAINED DESIGN: Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-yellow-700 to-yellow-500 text-white font-bold py-2 px-4 rounded-lg shadow-lg hover:from-yellow-800 hover:to-yellow-600 transition"
              >
                Submit on WhatsApp
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PopupFormResponsive;