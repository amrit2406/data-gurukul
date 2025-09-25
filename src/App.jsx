import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Page imports
import Home from './pages/Home';
import ScrollToTop from './components/ScrollToTop';
import AboutPage from './pages/About';
import CoursesPage from './pages/Courses';
import ContactPage from './pages/Contact';
import CourseDetailsPage from './components/CourseDetails';
import SyllabusPage from './pages/Syllabus';
import SyllabusDetailsPage from './components/SyllabusDetails';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-[#eff6fd]">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/courses/:courseId" element={<CourseDetailsPage />} />
          <Route path="/syllabus" element={<SyllabusPage />} />
          <Route path="/syllabus/:courseId" element={<SyllabusDetailsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:id" element={<CourseDetails />} /> */}
          {/* <Route path="/why-jpa" element={<WhyIconic />} /> */}
          {/* <Route path="/test-series" element={<TestSeries />} />
          <Route path="/study-material" element={<StudyMaterial />} />
          <Route path="/study-material/:id" element={<StudyMaterialPage />} /> */}
          {/* <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/career" element={<CourseExtraPage />} />
          <Route path="/teacher" element={<CourseExtraPage />} /> */}
          {/* 404 fallback */}
          <Route path="*" element={
            <div className="flex flex-col items-center py-20 text-accent">
              <h1 className="text-4xl font-bold mb-4">404</h1>
              <p className="text-lg">Sorry, the page you're looking for doesn't exist.</p>
            </div>
          } />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
