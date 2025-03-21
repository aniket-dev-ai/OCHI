import { motion } from "framer-motion";
import React from "react";

const Footer = () => {
  const socialLinks = [
    { name: "Instagram", url: "#" },
    { name: "Behance", url: "#" },
    { name: "Facebook", url: "#" },
    { name: "Linkedin", url: "#" },
  ];

  const locations = [
    { address: "202-1965 W 4th Ave", city: "Vancouver, Canada", url: "#" },
    { address: "30 Chukarina St", city: "Lviv, Ukraine", url: "#" },
  ];

  const menuLinks = [
    { name: "Home", url: "#" },
    { name: "Services", url: "#" },
    { name: "Our work", url: "#" },
    { name: "About us", url: "#" },
    { name: "Insights", url: "#" },
    { name: "Contact us", url: "#" },
  ];

  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <motion.footer
        data-scroll-section
        // data-scroll
        data-scroll-speed="-.8"
      className="text-gray-100 bg-black p-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="max-w-6xl py-20 mx-auto grid grid-cols-2 md:grid-cols-3 gap-10">
        {/* Left Section */}
        <motion.div variants={fadeInUp} className="text-5xl font-bold">
          <p>EYE-</p>
          <p>OPENING</p>
        </motion.div>

        {/* Middle Section */}
        <motion.div variants={fadeInUp}>
          <h3 className="font-bold">PRESENTATIONS</h3>
          <div className="mt-4">
            <p className="font-bold">S:</p>
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.url}
                className="relative block"
                whileHover={{ color: "#CDEA68" }}
              >
                <span>{link.name}</span>
                <motion.div
                  className="absolute left-0 bottom-0 h-[2px] bg-white w-full origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />
              </motion.a>
            ))}
          </div>
          <div className="mt-4">
            <p className="font-bold">L:</p>
            {locations.map((location, index) => (
              <div key={index}>
                <p>{location.address}</p>
                <motion.a
                  href={location.url}
                  className="relative block"
                  whileHover={{ color: "#CDEA68" }}
                >
                  {location.city}
                  <motion.div
                    className="absolute left-0 bottom-0 h-[2px] bg-white w-full origin-left"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  />
                </motion.a>
              </div>
            ))}
          </div>
          <div className="mt-4">
            <p className="font-bold">E:</p>
            <motion.a
              href="mailto:hello@ochi.design"
              className="relative block"
              whileHover={{ color: "#CDEA68" }}
            >
              hello@ochi.design
              <motion.div
                className="absolute left-0 bottom-0 h-[2px] bg-white w-full origin-left"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
            </motion.a>
          </div>
        </motion.div>

        {/* Right Section */}
        <motion.div variants={fadeInUp}>
          <p className="font-bold">M:</p>
          {menuLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.url}
              className="relative block"
              whileHover={{ color: "#CDEA68" }}
            >
              {link.name}
              <motion.div
                className="absolute left-0 bottom-0 h-[2px] bg-white w-full origin-left"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Bottom Section */}
      <motion.div
        variants={fadeInUp}
        className="mt-10 text-gray-500 text-sm flex justify-between"
      >
        <p>
          © ochi design 2025.{" "}
          <motion.a
            href="#"
            className="relative block"
            whileHover={{ color: "#CDEA68" }}
          >
            Legal Terms
            <motion.div
              className="absolute left-0 bottom-0 h-[2px] bg-white w-full origin-left"
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            />
          </motion.a>
        </p>
        <p>Website by Obys</p>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
