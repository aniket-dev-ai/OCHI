import React from "react";
const About = () => {
  return (
    <div
    data-scroll
    data-scroll-speed=".2"
      className="w-full p-16 bg-[#CDEA68] rounded-xl text-black"
    >
      <h1 className="font-normal text-[3vw] leading-[3vw]">
        Ochi is a strategic presentation agency for forward-thinking businesses
        that need to raise funds, sell products, explain complex ideas, and hire
        great people.
      </h1>
      <div className="w-full border-t-[1px] border-[#a1b562] mt-20 flex py-10">
        <div className="w-1/2 py-10 px-5">
          <h1 className="text-7xl font-bold">Our Approach</h1>
          <button className="px-10 py-4 bg-zinc-900 text-white rounded-full mt-5 flex justify-between items-center gap-3">
            <h1>Read More</h1>
            <div className="w-2 h-2 rounded-full bg-slate-200"></div>
          </button>
        </div>
        <div className="w-1/2 py-10 bg-[#93a45a] h-[70vh] rounded-lg overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default About;
