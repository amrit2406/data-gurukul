import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const PRIMARY_COLOR = "#023270";
const SECONDARY_COLOR = "#796202";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const ContactHero = () => (
  <motion.section
    className="text-white py-28 px-6 sm:px-12 text-center"
    style={{ backgroundColor: PRIMARY_COLOR }}
    initial="hidden"
    animate="visible"
    variants={fadeInUp}
  >
    <h1 className="text-5xl sm:text-6xl font-extrabold max-w-4xl mx-auto">
      Get in Touch with{" "}
      <span className="underline decoration-yellow-400">Data Gurukul</span>
    </h1>
    <p className="mt-6 max-w-3xl mx-auto text-lg sm:text-xl text-yellow-300 font-semibold">
      We're here to answer your questions and guide you on your data career
      journey.
    </p>
  </motion.section>
);

const ContactFormSection = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message! We'll get back to you soon.");
  };

  return (
    <motion.section
      className="max-w-7xl mx-auto px-6 sm:px-12 py-20 grid grid-cols-1 md:grid-cols-2 gap-16 bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
    >
      {/* Contact Form */}
      <div>
        <h2
          className="text-3xl font-bold text-primary mb-8"
          style={{ color: PRIMARY_COLOR }}
        >
          Send Us a Message
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block mb-2 font-semibold text-gray-700"
            >
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="John Doe"
              className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-yellow-500 focus:outline-none transition"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 font-semibold text-gray-700"
            >
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="you@example.com"
              className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-yellow-500 focus:outline-none transition"
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block mb-2 font-semibold text-gray-700"
            >
              Subject
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              placeholder="Inquiry about courses"
              className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-yellow-500 focus:outline-none transition"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block mb-2 font-semibold text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              placeholder="Write your message here..."
              className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-yellow-500 focus:outline-none transition"
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center bg-gradient-to-r from-[#796202] to-[#b38f09] text-white px-6 py-3 rounded-md font-semibold shadow-lg hover:from-[#b38f09] hover:to-[#796202] transition-transform duration-300"
          >
            Send Message <Send className="ml-2 w-5 h-5" />
          </button>
        </form>
      </div>

      {/* Contact Info */}
      <div className="space-y-8">
        <h2
          className="text-3xl font-bold text-primary"
          style={{ color: PRIMARY_COLOR }}
        >
          Contact Info
        </h2>

        {/* Phone */}
        <div className="flex items-center space-x-4">
          <Phone className="w-7 h-7 text-yellow-500" />
          <a
            href="tel:+917008463002"
            className="text-gray-700 text-lg hover:text-yellow-500 transition"
          >
            +91 7008463002
          </a>
        </div>

        {/* Email */}
        <div className="flex items-center space-x-4">
          <Mail className="w-7 h-7 text-yellow-500" />
          <a
            href="mailto:info@datagurukul.in"
            className="text-gray-700 text-lg hover:text-yellow-500 transition"
          >
            info@datagurukul.in
          </a>
        </div>

        {/* Address */}
        <div className="flex items-center space-x-4">
          <MapPin className="w-7 h-7 text-yellow-500" />
          <p className="text-gray-700 text-lg">
            Niladri Vihar, Bhubaneswar, Odisha
          </p>
        </div>

        {/* Google Maps Embed */}
        <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7482.795808429868!2d85.8003566415505!3d20.325174374615447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a190854fc68b713%3A0x329d0fc46d777cf4!2sNeeladri%20Vihar%2C%20Chandrasekharpur%2C%20Bhubaneswar%2C%20Odisha!5e0!3m2!1sen!2sin!4v1758827509417!5m2!1sen!2sin"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map - Data Gurukul"
          ></iframe>
        </div>
      </div>
    </motion.section>
  );
};

const ContactPage = () => (
  <main className="bg-gray-50 min-h-screen">
    <ContactHero />
    <ContactFormSection />
  </main>
);

export default ContactPage;
