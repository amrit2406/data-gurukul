import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Target,
  TrendingUp,
  Users,
  Sparkles,
  ArrowRight,
  Code,
} from "lucide-react";
import KeyFeatures from "../components/home/KeyFeatures";
import FAQSection from "../components/home/Faq";

// Brand Colors
const PRIMARY_COLOR = "#023270"; // Deep Blue
const SECONDARY_COLOR = "#796202"; // Gold

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1, delay: 0.4 } },
};

const AboutPage = () => {
  return (
    <main className="bg-white text-gray-900">
      {/* Hero Banner */}
      <motion.section
        className="relative text-white py-28 px-6 sm:px-12 text-center"
        style={{ backgroundColor: PRIMARY_COLOR }}
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight max-w-4xl mx-auto">
          Discover the Data Gurukul<span className="text-yellow-600"></span>{" "}
          Advantage
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg sm:text-xl text-yellow-300 font-medium">
          Empowering future-ready Data Scientists and AI specialists with
          practical skills & industry mentorship.
        </p>
      </motion.section>

      {/* About The Company */}
      <motion.section
        className="max-w-7xl mx-auto py-18"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <h2
          className="text-3xl font-bold mb-6 text-center text-primary-700"
          style={{ color: PRIMARY_COLOR }}
        >
          About Data Gurukul
        </h2>
        <p className="text-lg max-w-4xl mx-auto text-gray-700">
          Data Gurukul is a pioneering academy dedicated to closing the gap
          between academic theory and industry demands. Founded by seasoned Data
          Scientists, we focus on project-based learning, real-world tools, and
          mentorship from top professionals at leading technology firms. Our
          mission is to equip aspirants with skills that accelerate their
          careers in Data Science and AI.
        </p>
      </motion.section>

      {/* Mission & Vision */}
      <motion.section
        className="bg-yellow-50 py-18 px-6 sm:px-12 mt-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="flex flex-col items-center text-center md:text-left">
            <Target className="w-12 h-12 text-yellow-600 mb-4" />
            <h3
              className="text-2xl font-semibold mb-2 text-primary-800"
              style={{ color: PRIMARY_COLOR }}
            >
              Our Mission
            </h3>
            <p className="max-w-md text-gray-700 leading-relaxed">
              To provide the highest quality education in Data Science and
              Artificial Intelligence, bridging the gap between academic theory
              and industry demand through rigorous, project-focused training,
              and ensuring every student is prepared for meaningful employment
              in the AI-driven world.
            </p>
          </div>
          <div className="flex flex-col items-center text-center md:text-left">
            <TrendingUp className="w-12 h-12 text-yellow-600 mb-4" />
            <h3
              className="text-2xl font-semibold mb-2 text-primary-800"
              style={{ color: PRIMARY_COLOR }}
            >
              Our Vision
            </h3>
            <p className="max-w-md text-gray-700 leading-relaxed">
              To establish our own AI-based company in Bhubaneswar, where our
              students will not only design and deliver innovative business
              solutions for clients but also drive research, entrepreneurship,
              and industry collaboration, positioning Bhubaneswar as a hub for
              AI innovation.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Core Values */}
      <motion.section
        className="py-18 px-6 sm:px-12 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <h2
          className="text-3xl font-bold mb-12 text-center"
          style={{ color: PRIMARY_COLOR }}
        >
          Core Values
        </h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 text-center">
          <div className="p-6 rounded-lg shadow-lg border border-yellow-200 hover:shadow-yellow-400 transition">
            <Users className="mx-auto mb-4 text-yellow-600 w-12 h-12" />
            <h4 className="font-semibold mb-2 text-gray-900">Excellence</h4>
            <p className="text-gray-700 text-sm">
              We deliver only the highest quality training and mentorship.
            </p>
          </div>
          <div className="p-6 rounded-lg shadow-lg border border-yellow-200 hover:shadow-yellow-400 transition">
            <Sparkles className="mx-auto mb-4 text-yellow-600 w-12 h-12" />
            <h4 className="font-semibold mb-2 text-gray-900">Innovation</h4>
            <p className="text-gray-700 text-sm">
              Stay ahead with the latest tools and cutting-edge AI research.
            </p>
          </div>
          <div className="p-6 rounded-lg shadow-lg border border-yellow-200 hover:shadow-yellow-400 transition">
            <Code className="mx-auto mb-4 text-yellow-600 w-12 h-12" />
            <h4 className="font-semibold mb-2 text-gray-900">Mentorship</h4>
            <p className="text-gray-700 text-sm">
              Learn directly from senior industry professionals and researchers.
            </p>
          </div>
          <div className="p-6 rounded-lg shadow-lg border border-yellow-200 hover:shadow-yellow-400 transition">
            <Users className="mx-auto mb-4 text-yellow-600 w-12 h-12" />
            <h4 className="font-semibold mb-2 text-gray-900">Impact</h4>
            <p className="text-gray-700 text-sm">
              Empower real-world change through data-driven projects and
              careers.
            </p>
          </div>
        </div>
      </motion.section>

      <KeyFeatures />
      <FAQSection />

      {/* CTA Section */}
      <motion.section
        className="bg-gradient-to-r from-yellow-600 to-yellow-400 py-20 px-6 sm:px-12 my-20 text-white text-center rounded-tl-3xl rounded-br-3xl mx-6 sm:mx-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h2 className="text-4xl font-extrabold mb-4 max-w-4xl mx-auto">
          Ready to Start Your Career Journey with{" "}
          <span className="underline decoration-white/70">Data Gurukul?</span>
        </h2>
        <p className="text-lg max-w-3xl mx-auto mb-8 font-semibold">
          Join thousands of successful graduates creating impact in Data Science
          and AI.
        </p>
        <Link
          to="/contact"
          className="inline-block bg-white text-yellow-600 px-12 py-4 font-bold rounded-full shadow-lg hover:shadow-yellow-600/40 transition"
        >
          Get Started Now
        </Link>
      </motion.section>
    </main>
  );
};

export default AboutPage;
