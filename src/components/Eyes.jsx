import React, { useEffect, useState } from "react";

const Eyes = () => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {


    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX,
        mouseY = e.clientY;
      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;
    
      let angle = Math.atan2(deltaY, deltaX);
      setRotation( (angle * (180 / Math.PI))-180);



    });
  }, []);

  return (
    <div className="w-full h-screen overflow-hidden  text-black relative ">
      <div data-scroll data-scroll-speed="-.7" className="w-full h-full bg-cover bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg')]">
        <div className="absolute  gap-10 flex  top-[60%] left-[50%] -translate-x-[50%] -translate-y-[50%]   ">
          <div className="w-[15vw] h-[15vw] rounded-full bg-zinc-200 flex justify-center items-center ">
            <div className="relative w-2/3 h-2/3 rounded-full bg-zinc-900  justify-center items-center">
              <div  style={{transform : `translate(-50%,-50%) rotate(${rotation}deg)`}} className="line w-full  h-7 absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%]  rotate-">
                <div className="w-7  h-7 rounded-full bg-zinc-200 "></div>
              </div>
            </div>
          </div>

          <div className="w-[15vw] h-[15vw] rounded-full bg-zinc-200 flex justify-center items-center ">
            <div className="relative w-2/3 h-2/3 rounded-full bg-zinc-900  justify-center items-center">
              <div  style={{transform : `translate(-50%,-50%) rotate(${rotation}deg)`}} className="line w-full  h-7 absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%]  rotate-">
                <div className="w-7  h-7 rounded-full bg-zinc-200 "></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eyes;
