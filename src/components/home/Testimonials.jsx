import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { Star, Quote } from "lucide-react";

const PRIMARY_COLOR = "#023270"; // deep blue
const SECONDARY_COLOR = "#796202"; // gold

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } },
};

const testimonials = [
  {
    quote:
      "Data Gurukul's Generative AI course was a game-changer. The hands-on project with LLMs directly landed me a role as an AI Developer. The curriculum is truly industry-aligned.",
    name: "Subransu Senapati",
    // title: "AI Developer at TechCorp",
    course: "Generative AI Bootcamp",
    rating: 5,
    avatarUrl: "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png",
  },
  {
    quote:
      "Machine Learning re byaktigata mentorship adbhuta thila. Mo mentor, Google re senior engineer, mo portfolio ku fine-tune karibare sahajya kale, ja mo placement safalata pai key thila.",
    name: "Rajesh Barik",
    // title: "Data Scientist at Fintech Solutions",
    course: "Machine Learning Deep Dive",
    rating: 5,
    avatarUrl: "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png",
  },
  {
    quote:
      "I moved from an analyst role to a data engineer role thanks to the Python and SQL mastery courses. The project-based approach means you learn real, marketable skills.",
    name: "Priyadarsani Panda",
    // title: "Data Engineer at Ecom Inc.",
    course: "Python & SQL Mastery",
    rating: 4,
    avatarUrl: "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png",
  },
  {
    quote:
      "PowerBI au Tableau training mu ku data visualization re confidence dile. Mu ebar compelling data stories create karipari je gote business decision ku influence kare.",
    name: "Madana Kumar",
    // title: "BI Consultant at Global Analytics",
    course: "BI & Visualization Track",
    rating: 5,
    avatarUrl: "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png",
  },
];

const StarRating = ({ rating }) => (
  <div className="flex space-x-0.5" style={{ color: SECONDARY_COLOR }}>
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`h-5 w-5 ${i < rating ? "fill-current" : "stroke-current"}`}
        strokeWidth={2}
      />
    ))}
  </div>
);

const TestimonialSection = () => (
  <section
    id="testimonials"
    className="py-18 sm:py-18 bg-gradient-to-tr from-[#fdf6e3] via-white to-[#eef4fb] overflow-hidden"
  >
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <motion.div
        className="text-center mb-12"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <p
          className="text-lg font-semibold uppercase tracking-widest"
          style={{ color: PRIMARY_COLOR, letterSpacing: "0.18em" }}
        >
          Student Success
        </p>
        <h2 className="mt-2 text-4xl font-extrabold text-gray-900 sm:text-5xl">
          What Our <span style={{ color: PRIMARY_COLOR }}>Alumni Say</span>
        </h2>
      </motion.div>

      {/* Swiper Carousel */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 4500, disableOnInteraction: false }}
        //   pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1.5, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 30 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
          }}
          className="pb-16"
          style={{
            "--swiper-pagination-color": SECONDARY_COLOR,
            "--swiper-pagination-bullet-inactive-color": "#cfcfcf",
            "--swiper-pagination-bullet-inactive-opacity": 0.7,
            "--swiper-pagination-bullet-size": "12px",
            "--swiper-pagination-bullet-horizontal-gap": "8px",
          }}
        >
          {testimonials.map((testi, index) => (
            <SwiperSlide key={index} className="h-full">
              <motion.div
                className="bg-white rounded-xl m-4 shadow-lg border border-gray-100 h-full flex flex-col justify-between p-8 cursor-pointer"
                whileHover={{
                  y: -6,
                  boxShadow: `0 12px 24px -6px rgba(121, 98, 2, 0.25), 0 8px 16px -4px rgba(2, 50, 112, 0.15)`,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <div className="flex flex-col">
                  <StarRating rating={testi.rating} />
                  <Quote
                    className="h-8 w-8 text-[#796202] mt-4 opacity-40"
                    strokeWidth={2}
                  />

                  <p className="mt-4 italic text-gray-700 text-lg leading-relaxed">
                    "{testi.quote}"
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-gray-100 flex items-center space-x-4">
                  <img
                    src={testi.avatarUrl}
                    alt={testi.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-[#023270]"
                  />
                  <div>
                    <p className="text-md font-bold text-gray-900">{testi.name}</p>
                    <p
                      className="text-sm font-medium"
                      style={{ color: PRIMARY_COLOR }}
                    >
                      {testi.title}
                    </p>
                    <p className="text-xs text-gray-500">Course: {testi.course}</p>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </div>
  </section>
);

export default TestimonialSection;
