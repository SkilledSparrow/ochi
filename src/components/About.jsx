import React from "react";

function About() {
  return (
    <div className="w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black">
      <h1 className="font-['Neue_Montreal'] text-[3.5vw] leading-[4vw] tracking-tight">
      I am a software developer with 1 year of experience working at Zykrr. I specialize in building scalable software solutions that help companies solve complex challenges in the tech space.
      </h1>
      <div className="w-full flex gap-5 border-t-[1px] pt-10 mt-16 border-[#a1b562]">
        <div className="w-1/2">
          <h1 className="text-6xl">Our approach:</h1>
          <a href="https://drive.google.com/file/d/1E4gwVkxU0Ij2xz-pQ5bhibvOnpmIY0QK/view" 
             target="_blank" // Opens the link in a new tab
             rel="noopener noreferrer" // Improves security when using target="_blank"
          >
            <button className="px-10 py-6 bg-zinc-900 rounded-full mt-16 text-white flex gap-10 items-center group relative">
              RESUME
              <div className="w-3 h-3 bg-zinc-100 rounded-full group-hover:w-8 group-hover:h-8 group-hover:bg-zinc-300 transition-all duration-300 flex justify-center items-center relative">
                <span className="hidden group-hover:block absolute text-xs group-hover:text-black group-hover:text-3xl transition-all duration-300">
                  &#8599;
                </span>
              </div>
            </button> 
          </a>
        </div>
        <div className="w-1/2 h-[70vh] rounded-3xl bg-red-400"></div>
      </div>
    </div>
  );
}

export default About;
