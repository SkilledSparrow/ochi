import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import movixImage from "../assets/movix.jpeg";
import witterImage from "../assets/witter.jpeg";


function Featured() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const cards = [useAnimation(), useAnimation()];
  const images = [useAnimation(), useAnimation()];

  const handleHover = (index) => {
    setHoveredIndex(index);
    cards[index].start({ scale: 0.95, transition: { duration: 0.3 } });
    images[index].start({ scale: 1.1, transition: { duration: 0.3 } });
  };

  const handleHoverEnd = (index) => {
    setHoveredIndex(null);
    cards[index].start({ scale: 1, transition: { duration: 0.3 } });
    images[index].start({ scale: 1, transition: { duration: 0.3 } });
  };

  return (
    <div className="w-full py-20">
      <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-20">
        <h1 className="text-7xl font-['Neue_Montreal'] tracking-tight">
          Featured Projects
        </h1>
      </div>
      <div className="px-20">
        <div className="cards w-full flex gap-10 mt-10">
          {["MOVIX", "WITTER"].map((title, index) => (
            <motion.div
              key={index}
              onHoverStart={() => handleHover(index)}
              onHoverEnd={() => handleHoverEnd(index)}
              className="cardcontainer relative w-1/2 h-[80vh]"
              animate={cards[index]}
            >
              <motion.h1 
                className={`absolute flex overflow-hidden text-[#CDEA68] ${
                  index === 0 
                    ? 'right-[10%] translate-x-1/2' // Slightly adjusted for FYDE
                    : 'right-full translate-x-1/2'
                } top-1/2 -translate-y-1/2 z-[9] font-sans text-7xl`}
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {title.split("").map((item, letterIndex) => (
                  <motion.span
                    key={letterIndex}
                    initial={{ y: "100%" }}
                    animate={{ y: hoveredIndex === index ? 0 : "100%" }}
                    transition={{ ease: [0.22, 1, 0.36, 1], delay: letterIndex * 0.05 }}
                    className="inline-block"
                  >
                    {item}
                  </motion.span>
                ))}
              </motion.h1>
              <div className="card w-full h-full rounded-xl overflow-hidden">
                <motion.img
                  className="w-full h-full object-cover"
                  src={index === 0
                    ? movixImage
                    : witterImage
                  }
                  alt={title}
                  animate={images[index]}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Featured;