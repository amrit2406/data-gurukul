import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Code,
  Twitter,
  Linkedin,
  Youtube,
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // ✅ Import Link
import logo from "../assets/ilp.png";

const PRIMARY_COLOR = "#023270";
const SECONDARY_COLOR = "#796202";

const companyLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  // { name: "Why Data Gurukul?", path: "/why-us" },
  { name: "Courses", path: "/courses" },
  { name: "Contact", path: "/contact" },
];

const courseLinks = [
  { name: "Python & SQL", path: "/courses/python" },
  { name: "PowerBI", path: "/courses/powerbi" },
  { name: "Machine Learning", path: "/courses/ml" },
  { name: "Generative AI", path: "/courses/genai" },
];

// const legalLinks = [
//   { name: "Privacy Policy", path: "/privacy" },
//   { name: "Terms & Conditions", path: "/terms" },
//   { name: "Refund Policy", path: "/refund" },
// ];

const footerVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 1, delay: 0.2 } },
};

const Footer = () => {
  return (
    <motion.footer
      className="bg-gray-900 text-gray-100"
      variants={footerVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 py-18">
        {/* Top Section */}
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-4 border-b border-[#796202aa] pb-14">
          {/* Logo & Mission */}
          <div>
            <Link
              to="/"
              className="flex items-center gap-2 text-3xl font-extrabold text-white select-none"
            >
              <img
                src={logo} 
                alt="Data Gurukul Logo"
                className="bg-white rounded-full rounded h-20 w-auto drop-shadow-md"
              />
              {/* <span>
                Data <span className="text-yellow-500">Gurukul</span>
              </span> */}
            </Link>

            <p className="mt-5 text-yellow-100 text-sm leading-relaxed max-w-xs">
              The academy dedicated to building the next generation of
              industry-ready Data Scientists and AI specialists.
            </p>
            <div className="flex space-x-6 mt-8 text-yellow-400">
              <a
                href="#"
                aria-label="LinkedIn"
                className="hover:text-yellow-500 transition"
              >
                <Linkedin className="h-6 w-6 drop-shadow" />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="hover:text-yellow-500 transition"
              >
                <Twitter className="h-6 w-6 drop-shadow" />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="hover:text-yellow-500 transition"
              >
                <Youtube className="h-6 w-6 drop-shadow" />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <nav aria-label="Company" className="text-yellow-100 select-none">
            <h3 className="text-lg font-semibold uppercase tracking-wider mb-6 text-yellow-300">
              Company
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="hover:text-yellow-500 transition duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Courses Links */}
          <nav
            aria-label="Popular Courses"
            className="text-yellow-100 select-none"
          >
            <h3 className="text-lg font-semibold uppercase tracking-wider mb-6 text-yellow-300">
              Popular Courses
            </h3>
            <ul className="space-y-3">
              {courseLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="hover:text-yellow-500 transition duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact Info */}
          <section
            aria-label="Contact Info"
            className="text-yellow-100 select-none"
          >
            <h3 className="text-lg font-semibold uppercase tracking-wider mb-6 text-yellow-300">
              Contact Info
            </h3>
            <ul className="space-y-5 text-sm">
              <li className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-yellow-400 flex-shrink-0 mt-1 drop-shadow" />
                <div>
                  <p className="text-yellow-200">Email:</p>
                  <a
                    href="mailto:info@datagurukul.in"
                    className="hover:text-yellow-400 transition "
                  >
                    info@datagurukul.in
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-yellow-400 flex-shrink-0 mt-1 drop-shadow" />
                <div>
                  <p className="text-yellow-200">Phone:</p>
                  <a
                    href="tel:+918917236682"
                    className="hover:text-yellow-400 transition "
                  >
                    +91 8917236682
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-yellow-400 flex-shrink-0 mt-1 drop-shadow" />
                <p className="text-yellow-200">
                  Niladri Vihar, Bhubaneswar, Odisha
                </p>
              </li>
            </ul>
          </section>
        </div>

        {/* Bottom Section */}
        <div className="mt-4 pt-4 flex flex-col md:flex-row justify-center items-center gap-4 text-yellow-300 text-sm select-none">
          <p className="text-center">
            &copy; {new Date().getFullYear()} Data Gurukul. All rights reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
