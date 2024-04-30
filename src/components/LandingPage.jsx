import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";
import { motion } from "framer-motion";

function LandingPage() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.3"
      className="w-full h-screen bg-zinc-900 pt-1"
    >
      <div className="textstructure mt-52 px-20">
        {["WE CREATE", "EYE OPENING", "PRESENTATIONS"].map((item, index) => {
          return (
            <div className="masker ">
              <div className="w-fit flex ">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "9vw" }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                    className="mr-[1vw] w-[9vw] h-[5.1vw] rounded-md relative top-[1vw] bg-red-500"
                  ></motion.div>
                )}
                <h1 className="text-[7.5vw] leading-[7vw] tracking-tighter font-['Founders_Grotesk_X-Condensed'] font-medium">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] border-zinc-800 mt-20 flex justify-between items-center py-5 px-20">
        {[
          "For public and private companies",
          "From the first pitch to the IPO",
        ].map((item, index) => (
          <p className="text-md font-light tracking-tight leading-none">
            {item}
          </p>
        ))}
        <div className="start flex items-center gap-3">
          <div className="px-5 py-2 border-[1px] border-zinc-400 font-light text-md rounded-full">
            START THE PROJECT
          </div>
          <div className="w-10 h-10 flex items-center justify-center border-[1px] border-zinc-400 rounded-full">
            <span className="rotate-[45deg]">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
