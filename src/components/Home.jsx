import React from "react";
import Nav from "./Nav";
import Hero from "./Hero";
import Services from "./Services";
import Project from "./Project";
import Contact from "./Contact";
import About from "./About";

function Home() {
  
  return (
    <>
      <div
        className="relative w-screen h-auto bg-cover bg-center overflow-x-hidden mt-[10vh] "
        style={{ backgroundImage: "url('/construction.jpg')" }}
      >
        {/* Overlay */}
        <div className="relative z-10 bg-[#00000085]">
          {/* <Nav /> */}
          <Hero />
        </div>
      </div>
      <About />
      <Services />
      <Project />
      <Contact />
      {/* <Footer /> */}
    </>
  );
}

export default Home;
