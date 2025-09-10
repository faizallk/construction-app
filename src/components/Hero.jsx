import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div
      className="relative w-full bg-cover bg-center"
      style={{ backgroundImage: "url('/images/construction-bg.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 px-6 md:px-12 py-16 md:py-24 max-w-5xl">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-white font-bold tracking-tight mb-4 leading-tight">
          Building the <span className="text-amber-500">Future</span>, <br />
          Restoring the <span className="text-amber-500">Past</span>
        </h1>

        {/* Paragraph */}
        <p className="text-sm sm:text-base md:text-lg text-zinc-200 w-full sm:w-[85%] md:w-[70%] lg:w-[60%] mb-6 leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
          quaerat, nisi voluptatibus qui velit distinctio omnis placeat
          temporibus magnam fuga? Dolores, laudantium libero. Sapiente
          praesentium laudantium sunt, dolorem et earum.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full">
  <Link className="w-full sm:w-auto text-center text-white bg-amber-500 px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 text-sm sm:text-base lg:text-lg uppercase rounded font-semibold hover:bg-amber-600 duration-200">
    Get a Quote
  </Link>

  <Link
    to="/services"
    className="w-full sm:w-auto text-center text-white border-2 border-white px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 text-sm sm:text-base lg:text-lg uppercase rounded font-semibold hover:bg-white hover:text-black duration-200"
  >
    Our Services
  </Link>
</div>

      </div>
    </div>
  );
}

export default Hero;
