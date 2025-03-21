import { motion } from "framer-motion";
import React, { useState } from "react";

const Featured = () => {
  const [hoveringIndex, setHoveringIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveringIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveringIndex(null);
  };

  return (
    <div data-scroll-section data-scroll-speed="1" className="w-full py-10">
      <div className="w-full px-10 border-b-[1.5px] border-zinc-400 pb-20">
        <h1 className="text-8xl tracking-tight">Featured projects</h1>
      </div>

      <div className="cards w-full flex gap-10 px-10 py-10">
        {/* First Card */}
        <div
          onMouseEnter={() => handleMouseEnter(0)}
          onMouseLeave={handleMouseLeave}
          className="cardContainer relative w-1/2 h-[80vh] rounded-lg group"
        >
          <h1 className="absolute z-[10] inset-0 flex items-center left-[50%] translate-x-[50%] justify-center text-6xl font-bold text-[#CDEA68] uppercase overflow-hidden">
            <div className="flex justify-center items-center overflow-hidden">
              {"Salience".split("").map((item, index) => (
                <motion.span
                  key={index}
                  className="overflow-hidden"
                  initial={{ y: "100%" }}
                  animate={hoveringIndex === 0 ? { y: 0 } : { y: "100%" }}
                  transition={{ delay: index * 0.07 }}
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </h1>
          <div className="w-full h-full bg-[#004D43] rounded-lg transition-transform duration-500 group-hover:scale-95">
            <img
              className="w-full h-full object-cover"
              src="https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-1326x1101.png"
              alt="Salience"
            />
          </div>
        </div>

        {/* Second Card */}
        <div
          onMouseEnter={() => handleMouseEnter(1)}
          onMouseLeave={handleMouseLeave}
          className="cardContainer relative w-1/2 h-[80vh] rounded-lg group"
        >
          <h1 className="absolute inset-0 right-[50%] -translate-x-[50%] flex items-center justify-center text-6xl font-bold z-[10] text-[#CDEA68] uppercase overflow-hidden">
            <div className="flex justify-center items-center overflow-hidden">
              {"FYDE".split("").map((item, index) => (
                <motion.span
                  key={index}
                  className="overflow-hidden"
                  initial={{ y: "100%" }}
                  animate={hoveringIndex === 1 ? { y: 0 } : { y: "100%" }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </h1>
          <div className="w-full h-full bg-red-500 rounded-lg transition-transform duration-500 group-hover:scale-95">
            <img
              className="w-full h-full object-cover"
              src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-1326x1101.png"
              alt="FYDE"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
