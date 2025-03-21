import React from "react";

const ThreeCards = () => {
  return (
    <div className="flex justify-center items-center gap-6 p-6 bg-gray-100 min-h-screen"
    data-scroll-section
    data-scroll
    data-scroll-speed="-.1"
    >
      {/* First Card */}
      <div className="w-[50%] h-[20vw] bg-green-900 text-[#CDEA68] rounded-2xl p-6 flex flex-col justify-between">
        <div className="top h-[80%] flex justify-center items-center">
          <h2 className="text-3xl font-bold ">
            <img
              src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
              alt=""
            />
          </h2>
        </div>
        <div className="border border-[#CDEA68] px-3 py-1 w-[20%] rounded-full text-xs">
          ©2019-2022
        </div>
      </div>

      {/* Second Card */}
      <div className="w-80 h-[20vw] bg-black text-white rounded-2xl p-6 flex flex-col justify-between items-center">
        <div className="top h-[80%] flex justify-center items-center">
          <div className="flex flex-col items-center">
            <h2 className="text-2xl font-semibold">Clutch</h2>
            <div className="flex space-x-1">
              {Array(5)
                .fill("⭐")
                .map((star, index) => (
                  <span key={index} className="text-yellow-400">
                    {star}
                  </span>
                ))}
            </div>
          </div>
        </div>

        <div className="border border-white px-3 py-1 rounded-full text-xs">
          RATING 5.0 ON CLUTCH
        </div>
      </div>

      {/* Third Card */}
      <div className="w-80 h-[20vw] bg-[#212121] text-white rounded-2xl p-6 flex flex-col justify-between items-center">
      <div className="top h-[80%]  flex justify-center items-center">
            <img
                
              src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
              alt="The Futur Academy"
              className="object-contain w-16 h-16"
            />
          </div>
        <div className="">

        </div>
        <div className="border border-white px-3 py-1 rounded-full text-xs">
          BUSINESS BOOK
        </div>
      </div>
    </div>
  );
};

export default ThreeCards;
