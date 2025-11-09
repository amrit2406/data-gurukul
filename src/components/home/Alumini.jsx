import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

// Company logos (use official brand logos or link to CDN)
const companies = [
  { name: "Impetus", img: "https://blog.ipleaders.in/wp-content/uploads/2016/08/Impetus-Logo.png" },
  { name: "Cognizant", img: "https://www.drupal.org/files/cognizant%20logo.jpg" },
  { name: "Ganit", img: "https://images.jdmagicbox.com/v2/comp/chennai/g1/044pxx44.xx44.220611053053.r3g1/catalogue/ganit-business-solutions-pvt-ltd-perungudi-chennai-business-management-consultants-g4udt52ktx.jpg" },
  { name: "HSBC", img: "https://1000logos.net/wp-content/uploads/2017/02/HSBC-Logo.png" },
  { name: "iQuanti", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSf2umipUGXgf1z9Mpl6SlYKTid1DqwN_BlQ&s" },
  { name: "DataRPM", img: "https://images.crunchbase.com/image/upload/c_pad,f_auto,q_auto:eco,dpr_1/v1457925757/krinie1yhdkpvtcc4imp.jpg" },
  { name: "HCL", img: "https://download.logo.wine/logo/HCL_Technologies/HCL_Technologies-Logo.wine.png" },
  { name: "IBM", img: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
  { name: "Redwood", img: "	https://mma.prnewswire.com/media/2671984/Redwood_Software_Logo.jpg?p=facebook" },
  { name: "Citi", img: "https://www.logo.wine/a/logo/Citigroup/Citigroup-Logo.wine.svg" },
  { name: "Tech Mahindra", img: "https://insights.techmahindra.com/styles/text_and_image_desktop/s3/images/logo_wgraypng.png.webp" },
  { name: "Bristlecone", img: "https://www.supplychain247.com/images/logos/bristlecone_logo_600.png" },
  { name: "InnoDataTics", img: "https://innodatatics.ai/assets/innologo.png" },
];

const OurAlumniWorkAt = () => {
  return (
    <section className="bg-gradient-to-tr from-white via-[#fdf9e5] to-[#f2faff] py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#023270] mb-12">
          Our Alumni Work At
        </h2>

        {/* Row 1 – Right to Left */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={6}
          loop={true}
          speed={3500}
          autoplay={{ delay: 0, disableOnInteraction: false, reverseDirection: false }}
          className="mb-10"
          breakpoints={{
            320: { slidesPerView: 2 },
            640: { slidesPerView: 4 },
            1024: { slidesPerView: 6 },
          }}
        >
          {[...companies].map((company, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <img
                src={company.img}
                alt={company.name}
                className="h-14 sm:h-16 w-auto object-contain hover:scale-110 transition-transform duration-300"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Row 2 – Left to Right */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={6}
          loop={true}
          speed={3500}
          autoplay={{ delay: 0, disableOnInteraction: false, reverseDirection: true }}
          breakpoints={{
            320: { slidesPerView: 2 },
            640: { slidesPerView: 4 },
            1024: { slidesPerView: 6 },
          }}
        >
          {companies.reverse().map((company, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <img
                src={company.img}
                alt={company.name}
                className="h-14 sm:h-16 w-auto object-contain hover:scale-110 transition-transform duration-300"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default OurAlumniWorkAt;
