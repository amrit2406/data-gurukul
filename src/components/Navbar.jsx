import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Mail,
  Phone,
  MapPin,
  Twitter,
  Linkedin,
  Youtube,
  ChevronDown,
  User,
  MessageSquare,
} from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/ilp.png";

// --- Custom Constants ---
const PRIMARY_COLOR = "#023270"; // Deep Blue
const SECONDARY_COLOR = "#796202"; // Gold/Ochre
const whatsappPhoneNumber = "918917236682"; // Your WhatsApp number, without the '+'

// --- Framer Motion Variants ---
const dropdownVariants = {
  open: {
    opacity: 1,
    y: 0,
    scaleY: 1,
    transition: { type: "tween", duration: 0.3 },
  },
  closed: {
    opacity: 0,
    y: -10,
    scaleY: 0.9,
    transition: { duration: 0.2 },
  },
};

const mobileMenuVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: {
    opacity: 1,
    height: "auto",
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 18,
      when: "beforeChildren",
      staggerChildren: 0.08,
    },
  },
  exit: { opacity: 0, height: 0, transition: { duration: 0.3 } },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, scale: 0.9, transition: { duration: 0.2 } },
};

// --- Navigation Data ---
const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  {
    name: "Courses",
    path: "/courses",
    dropdown: [
      { name: "Python", path: "/courses/python" },
      { name: "Sql", path: "/courses/sql" },
      { name: "PowerBI", path: "/courses/powerbi" },
      // { name: "Tableau", path: "/courses/tableau" },
      { name: "Machine Learning", path: "/courses/ml" },
      { name: "Generative AI", path: "/courses/genai" },
      // { name: "Data Analytics", path: "/courses/analytics" },
      // { name: "Data Science", path: "/courses/datascience" },
    ],
  },
  {
    name: "Syllabus",
    path: "/syllabus",
    dropdown: [
      { name: "Python", path: "/syllabus/python" },
      { name: "Sql", path: "/syllabus/sql" },
      { name: "PowerBI", path: "/syllabus/powerbi" },
      // { name: "Tableau", path: "/syllabus/tableau" },
      { name: "Machine Learning", path: "/syllabus/ml" },
      { name: "Generative AI", path: "/syllabus/genai" },
      // { name: "Data Analytics", path: "/syllabus/analytics" },
      // { name: "Data Science", path: "/syllabus/datascience" },
    ],
  },
  { name: "Contact", path: "/contact" },
];

// ----------------------------------------------------------------------
// 1. Enrollment Popup Component
// ----------------------------------------------------------------------

const EnrollmentPopup = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 1. Construct the message text
    const message = `
*New Course Enrollment Inquiry*
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Message: ${formData.message || "I am interested in enrolling in your courses!"}
    `.trim();

    // 2. Encode the message for the URL
    const encodedMessage = encodeURIComponent(message);

    // 3. Create the WhatsApp link
    const whatsappLink = `https://wa.me/${whatsappPhoneNumber}?text=${encodedMessage}`;

    // 4. Open the link in a new tab
    window.open(whatsappLink, "_blank");

    // 5. Close the modal and reset form
    onClose();
    setFormData({ name: "", phone: "", email: "", message: "" });
  };

  const FormInput = ({
    icon: Icon,
    name,
    type = "text",
    placeholder,
    required = true,
  }) => (
    <div className="relative">
      <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
      <input
        type={type}
        name={name}
        value={formData[name]}
        onChange={handleChange}
        placeholder={placeholder}
        required={required}
        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition duration-150"
      />
    </div>
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[100]"
          onClick={onClose}
        >
          <motion.div
            className="bg-white rounded-xl shadow-2xl w-full max-w-md p-6 sm:p-8 relative"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-red-500 transition"
              aria-label="Close form"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="text-center mb-6">
              <h2
                className="text-3xl font-bold mb-2"
                style={{ color: PRIMARY_COLOR }}
              >
                Start Your Enrollment!
              </h2>
              <p className="text-gray-600">
                Fill out the details and we'll connect with you instantly on
                **WhatsApp**.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <FormInput icon={User} name="name" placeholder="Your Full Name" />
              <FormInput
                icon={Phone}
                name="phone"
                placeholder="Phone Number"
                type="tel"
              />
              <FormInput
                icon={Mail}
                name="email"
                placeholder="Email Address"
                type="email"
              />

              <div className="relative">
                <MessageSquare className="absolute left-3 top-4 h-5 w-5 text-gray-400" />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us which course you're interested in (optional)"
                  rows="3"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition duration-150"
                ></textarea>
              </div>

              <motion.button
                type="submit"
                className="w-full py-3 text-lg font-bold rounded-lg text-white shadow-xl transition duration-300 transform hover:scale-[1.01] hover:shadow-2xl flex items-center justify-center space-x-2"
                style={{ backgroundColor: SECONDARY_COLOR }}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Inquiry on WhatsApp
              </motion.button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

// ----------------------------------------------------------------------
// 2. Top Header Component
// ----------------------------------------------------------------------

const TopHeader = () => (
  <div className="bg-gray-900 hidden lg:block">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-8 flex justify-between items-center text-xs text-gray-400">
      <div className="flex space-x-6">
        <a
          href="tel:+918917236682"
          className="flex items-center hover:text-yellow-500 transition text-sm"
        >
          <Phone className="h-3 w-3 mr-1 stroke-yellow-500" />
          +91 8917236682
        </a>
        <a
          href="mailto:info@datagurukul.in"
          className="flex items-center hover:text-yellow-500 transition text-sm"
        >
          <Mail className="h-3 w-3 mr-1 stroke-yellow-500" />
          info@datagurukul.in
        </a>
        <span className="flex items-center text-sm">
          <MapPin className="h-3 w-3 mr-1 stroke-yellow-500" />
          Niladri Vihar, Bhubaneswar
        </span>
      </div>
      <div className="flex space-x-5 text-sm text-gray-400">
        <a
          href="#"
          aria-label="LinkedIn"
          className="hover:text-yellow-500 transition"
        >
          <Linkedin className="h-4 w-4 stroke-yellow-500" />
        </a>
        <a
          href="#"
          aria-label="Twitter"
          className="hover:text-yellow-500 transition"
        >
          <Twitter className="h-4 w-4 stroke-yellow-500" />
        </a>
        <a
          href="#"
          aria-label="YouTube"
          className="hover:text-yellow-500 transition"
        >
          <Youtube className="h-4 w-4 stroke-yellow-500" />
        </a>
      </div>
    </div>
  </div>
);

// ----------------------------------------------------------------------
// 3. Nav Item Components
// ----------------------------------------------------------------------

const NavItem = ({ item }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  if (item.dropdown) {
    return (
      <motion.div
        className="relative"
        onMouseEnter={() => setIsDropdownOpen(true)}
        onMouseLeave={() => setIsDropdownOpen(false)}
      >
        <Link
          to={item.path}
          className="flex items-center text-gray-700 hover:text-yellow-600 font-semibold transition duration-150 py-4 select-none"
        >
          {item.name}
          <motion.span
            animate={{ rotate: isDropdownOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
            className="ml-1"
          >
            <ChevronDown className="h-4 w-4 stroke-yellow-600" />
          </motion.span>
        </Link>

        <AnimatePresence>
          {isDropdownOpen && (
            <motion.div
              className="absolute left-0 mt-1 w-56 origin-top bg-white border border-yellow-200 rounded-lg shadow-lg overflow-hidden"
              variants={dropdownVariants}
              initial="closed"
              animate="open"
              exit="closed"
              style={{ zIndex: 60 }}
            >
              {item.dropdown.map((subItem) => (
                <Link
                  key={subItem.name}
                  to={subItem.path}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-yellow-50 hover:text-yellow-600 transition select-none"
                >
                  {subItem.name}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    );
  }

  return (
    <Link
      to={item.path}
      className="text-gray-700 hover:text-yellow-600 font-semibold transition duration-150 py-4 select-none"
    >
      {item.name}
    </Link>
  );
};

// Mobile Nav Item Component
const MobileNavItem = ({ item, setIsMobileOpen }) => {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

  if (item.dropdown) {
    return (
      <div className="border-b border-gray-200 last:border-b-0">
        <button
          className="flex justify-between w-full px-4 py-3 text-left font-semibold text-gray-700 hover:bg-yellow-50 hover:text-yellow-600 rounded-md transition select-none"
          onClick={() => setIsSubmenuOpen(!isSubmenuOpen)}
          aria-expanded={isSubmenuOpen}
          aria-haspopup="true"
        >
          {item.name}
          <motion.span
            animate={{ rotate: isSubmenuOpen ? 180 : 0 }}
            transition={{ duration: 0.25 }}
          >
            <ChevronDown className="w-5 h-5 stroke-yellow-600" />
          </motion.span>
        </button>

        <AnimatePresence>
          {isSubmenuOpen && (
            <motion.div
              className="pl-6 pt-2 pb-3 space-y-1"
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              {item.dropdown.map((subItem) => (
                <Link
                  key={subItem.name}
                  to={subItem.path}
                  className="block px-4 py-2 text-gray-600 hover:bg-yellow-100 hover:text-yellow-600 rounded-md transition select-none"
                  onClick={() => setIsMobileOpen(false)}
                >
                  {subItem.name}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  return (
    <Link
      to={item.path}
      className="block px-4 py-3 font-semibold text-gray-700 hover:bg-yellow-50 hover:text-yellow-600 rounded-md select-none"
      onClick={() => setIsMobileOpen(false)}
    >
      {item.name}
    </Link>
  );
};

// ----------------------------------------------------------------------
// 4. Main Navbar Component
// ----------------------------------------------------------------------

const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = (e) => {
    if (e && e.preventDefault) {
      e.preventDefault();
    }
    setIsMobileOpen(false);
    setIsPopupOpen(true);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-md">
      <TopHeader />
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="/"
              className="flex items-center space-x-3 text-2xl font-extrabold text-gray-900 select-none"
            >
              {/* Fallback text if logo image is missing */}
              {/* Replace with <img src={logo} alt="Data Gurukul Logo" className="h-16 w-auto" /> when available */}
              <img src={logo} alt="Data Gurukul Logo" className="h-20 w-auto" />
              {/* <span style={{ color: PRIMARY_COLOR }}>Data</span>
              <span style={{ color: SECONDARY_COLOR }}>Gurukul</span>  */}
            </Link>
          </motion.div>

          <div className="hidden lg:flex space-x-10">
            {navItems.map((item) => (
              <NavItem key={item.name} item={item} />
            ))}
          </div>

          {/* DESKTOP CTA BUTTON */}
          <motion.button
            onClick={openPopup}
            className="hidden lg:inline-block rounded-full bg-gradient-to-r from-yellow-600 to-yellow-400 px-6 py-2 text-sm font-semibold text-white shadow-lg hover:from-yellow-700 hover:to-yellow-500 transition select-none"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book Demo
          </motion.button>

          <button
            type="button"
            className="lg:hidden text-gray-600 hover:text-yellow-600"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-expanded={isMobileOpen}
            aria-label="Toggle navigation"
          >
            {isMobileOpen ? (
              <X className="w-7 h-7 stroke-yellow-600" />
            ) : (
              <Menu className="w-7 h-7 stroke-yellow-700" />
            )}
          </button>
        </div>

        <AnimatePresence>
          {isMobileOpen && (
            <motion.div
              className="lg:hidden bg-white border-t border-gray-200 shadow-lg overflow-hidden"
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="px-2 pt-2 pb-4 space-y-1">
                {navItems.map((item) => (
                  <MobileNavItem
                    key={item.name}
                    item={item}
                    setIsMobileOpen={setIsMobileOpen}
                  />
                ))}
                {/* MOBILE CTA BUTTON */}
                <button
                  onClick={openPopup}
                  className="block w-full text-center mt-6 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-md px-4 py-3 transition select-none"
                >
                  Enroll Now
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* GLOBAL POPUP */}
      <EnrollmentPopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
      />
    </header>
  );
};

export default Navbar;
