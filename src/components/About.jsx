import React from "react";
import SmallCards from "./templates/SmallCards";

function About() {
  return (
    <div className="w-full bg-white px-4 sm:px-6 md:px-10 lg:px-16 py-10 sm:py-14 md:py-20">
      {/* Top Heading */}
      <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-blue-950 font-bold">
          About Our Company
        </h1>
        <div className="w-16 sm:w-20 md:w-24 h-1 bg-amber-500 rounded-lg my-3"></div>
        <p className="text-sm sm:text-base md:text-lg leading-6 text-zinc-600 px-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, dicta
          quos nobis adipisci saepe libero quo pariatur consectetur.
        </p>
      </div>

      {/* Content Section */}
      <div className="mt-10 flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
        {/* Left Image */}
        <img
          src="/img1.jpg"
          alt="About"
          className="w-full lg:w-1/2 h-64 sm:h-80 md:h-96 object-cover rounded-md shadow-md"
        />

        {/* Right Content */}
        <div className="w-full lg:w-1/2 text-left">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-blue-950">
            A Legacy of excellence since 1998.
          </h1>
          <p className="mt-4 text-sm sm:text-base text-zinc-600 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consequatur cupiditate quo ipsa aperiam tempore quisquam recusandae
            sint fuga deleniti accusantium. Illum, est corrupti. Cumque rerum
            porro, commodi animi culpa saepe?
          </p>
          <p className="mt-3 text-sm sm:text-base text-zinc-600 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consequatur cupiditate quo ipsa aperiam tempore quisquam recusandae
            sint fuga deleniti accusantium. Illum,
          </p>

          {/* SmallCards */}
         {/* SmallCards */}

<div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  <SmallCards icon="ri-medal-line" title="ISO 9001" detail="Quality Management" />
  <SmallCards icon="ri-shield-check-line" title="LEED Certified" detail="Green Building" />
  <SmallCards icon="ri-award-line" title="25+ Years" detail="Industry Experience" />
</div>


        </div>
      </div>
    </div>
  );
}

export default About;
