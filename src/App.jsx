import React, { useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Eyes from "./components/Eyes";
import Featured from "./components/Featured";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import LocomotiveScroll from "locomotive-scroll";

function App() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
    });

    return () => {
      locomotiveScroll.destroy(); // Cleanup scroll instance when component unmounts
    };
  }, []);

  return (
    <div ref={scrollRef} className="w-full min-h-screen bg-zinc-900 text-white" data-scroll-container>
      <Navbar />
      <section id="landing" data-scroll-section>
        <LandingPage />
        <Marquee />
      </section>
      <section id="about" data-scroll-section>
        <About />
      </section>
      <Eyes />
      <section id="featured" data-scroll-section>
        <Featured />
      </section>
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
