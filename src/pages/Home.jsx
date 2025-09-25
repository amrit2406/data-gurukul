import React from 'react';
import { motion } from 'framer-motion';

// Import your modular components
import HeroSection from '../components/home/HeroSection';
import FeaturesOverview from '../components/home/FeaturesOverview';
import Testimonials from '../components/home/Testimonials';
import CTASection from '../components/home/CTASection';
import AboutUs from '../components/home/AboutUs';
import CourseFilter from '../components/home/CourseFilter';
import CourseHighlight from '../components/home/CourseHighlight';
import KeyFeatures from '../components/home/KeyFeatures';
// import TestSeries from '../components/home/TestSeries';
import StudyMaterial from '../components/home/StudyMaterial';
import ContactForm from '../components/home/ContactForm';
import FAQSection from '../components/home/Faq';
import WhatsAppFloatingButton from '../components/WhatsAppFloatButton';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <HeroSection />

      <AboutUs />
      {/* <CourseFilter /> */}
      <CourseHighlight />
      <KeyFeatures />
      {/* <TestSeries /> */}
      {/* <StudyMaterial /> */}

      {/* Features Overview Section */}
      {/* <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.15 }}
        className=""
      >
        <FeaturesOverview />
      </motion.section> */}
      
      {/* Testimonials and Success Stories */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="bg-white "
      >
        <div className="">
          <Testimonials />
        </div>
      </motion.section>
      <FAQSection />

      <ContactForm />

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className=""
      >
        <CTASection />
      </motion.section>
      <WhatsAppFloatingButton />
    </div>
  );
}
