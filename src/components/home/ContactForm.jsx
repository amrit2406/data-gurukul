import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const PRIMARY_COLOR = "#023270";
const SECONDARY_COLOR = "#796202";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { when: "beforeChildren", staggerChildren: 0.12, delayChildren: 0.25 },
  },
};

const itemSlideUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const formVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7, delay: 0.4 } },
};

const contactDetails = [
  {
    icon: Phone,
    title: "Call Us",
    detail: "+91 7008463002",
    link: "tel:+917008463002",
  },
  {
    icon: Mail,
    title: "Email Support",
    detail: "info@datagurukul.in",
    link: "info@datagurukul.in",
  },
  {
    icon: MapPin,
    title: "Our Location",
    detail: "Niladri Vihar, Bhubaneswar, Odisha",
    // link: "#map",
  },
];

const ContactSection = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your inquiry! We'll be in touch shortly.");
  };

  return (
    <section
      id="contact"
      className="py-20 sm:py-28 bg-gradient-to-br from-[#fefcf8] via-[#f5f7ff] to-[#f0faff]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <motion.p
            className="text-lg font-semibold uppercase tracking-widest"
            style={{ color: SECONDARY_COLOR, letterSpacing: "0.16em" }}
            variants={itemSlideUp}
          >
            Get In Touch
          </motion.p>
          <motion.h2
            className="mt-2 text-4xl font-extrabold text-gray-900 sm:text-5xl"
            variants={itemSlideUp}
          >
            Start Your Data Journey Today.
          </motion.h2>
        </motion.div>

        <div className="mt-16 lg:grid lg:grid-cols-2 lg:gap-16">
          {/* LEFT COLUMN - Contact Form */}
          <motion.div
            className={`p-10 rounded-3xl shadow-2xl bg-white`}
            variants={formVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Send Us a Quick Message</h3>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="block w-full rounded-lg border border-gray-300 bg-white p-3 shadow-sm placeholder-gray-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="block w-full rounded-lg border border-gray-300 bg-white p-3 shadow-sm placeholder-gray-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject / Course Interest
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="block w-full rounded-lg border border-gray-300 bg-white p-3 shadow-sm placeholder-gray-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
                  placeholder="Inquiry about Generative AI course"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  className="block w-full rounded-lg border border-gray-300 bg-white p-3 shadow-sm placeholder-gray-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
                  placeholder="Tell us a little about your career goals..."
                />
              </div>

              <motion.button
                type="submit"
                className="w-full rounded-lg bg-gradient-to-r from-[#796202] to-[#b38f09] px-8 py-4 text-lg font-semibold text-white shadow-xl transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#796202aa] flex items-center justify-center gap-2"
                whileHover={{ scale: 1.03, rotate: 1 }}
                whileTap={{ scale: 0.97, rotate: 0 }}
              >
                Send Message <Send className="w-5 h-5" />
              </motion.button>
            </form>
          </motion.div>

          {/* RIGHT COLUMN - Stylish Contact Info & Map */}
          <div className="mt-12 lg:mt-0 space-y-8">
            <motion.h3
              className="text-3xl font-bold text-gray-900 mb-8"
              variants={itemSlideUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.35 }}
            >
              Or Reach Us Directly
            </motion.h3>

            {contactDetails.map((item, idx) => (
              <motion.div
                key={idx}
                className="flex items-center space-x-5 p-6 rounded-3xl bg-gradient-to-tr from-[#796202] to-[#b38f09] text-white shadow-lg"
                variants={itemSlideUp}
              >
                <item.icon className="w-8 h-8 flex-shrink-0" strokeWidth={2} />
                <div>
                  <h4 className="text-xl font-semibold">{item.title}</h4>
                  <a
                    href={item.link}
                    className=" font-medium transition hover:text-gray-200"
                  >
                    {item.detail}
                  </a>
                </div>
              </motion.div>
            ))}

            {/* <motion.div
              className="h-72 rounded-3xl bg-gradient-to-tr from-[#796202cc] to-[#b38f09cc] shadow-2xl flex flex-col items-center justify-center p-10 text-white text-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.9, delay: 0.3 }}
            >
              <MapPin className="w-14 h-14 mb-4" strokeWidth={2} />
              <p className="text-lg font-semibold max-w-xs">
                Tech Hub, Silicon Valley, Bangalore, India
              </p>
            </motion.div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
