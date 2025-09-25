import React, { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppFloatingButton() {
  const phone = "917008463002"; // Your WhatsApp number without '+'
  const defaultMessage = "Hi there! I'm interested in your Tour packages.";

  const [isMobileViewport, setIsMobileViewport] = useState(false);

  useEffect(() => {
    const checkViewport = () => {
      setIsMobileViewport(window.innerWidth < 768);
    };

    checkViewport();
    window.addEventListener("resize", checkViewport);
    return () => window.removeEventListener("resize", checkViewport);
  }, []);

  const isMobileDevice = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

  const openWhatsApp = (message = defaultMessage) => {
    const encodedMsg = encodeURIComponent(message);
    const url = isMobileDevice
      ? `https://wa.me/${phone}?text=${encodedMsg}`
      : `https://web.whatsapp.com/send?phone=${phone}&text=${encodedMsg}`;
    window.open(url, "_blank");
  };

  return (
    <div className={`fixed ${isMobileViewport ? "bottom-4" : "bottom-6"} right-6 z-50`}>
      <button
        onClick={() => openWhatsApp()}
        className="flex items-center justify-center bg-[#25D366] text-white w-14 h-14 md:w-16 md:h-16 rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
        aria-label="Contact via WhatsApp"
      >
        <FaWhatsapp size={28} />
      </button>
    </div>
  );
}
