import React from "react";
import { Link } from "react-router-dom";

function Project() {
  return (
    <div className="w-screen bg-white p-6 sm:p-10">
      {/* Heading */}
      <div className="flex flex-col items-center mx-auto text-center max-w-2xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl text-blue-950 font-bold">
          Featured Projects
        </h1>
        <div className="w-20 sm:w-24 h-1 bg-amber-500 rounded-lg my-2"></div>
        <p className="text-sm sm:text-base leading-6 text-zinc-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, dicta
          quos nobis adipisci saepe libero.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {/* Card 1 */}
        <div
          className="relative rounded overflow-hidden bg-cover bg-center shadow-lg h-48 sm:h-64 md:h-72"
          style={{ backgroundImage: "url('/modern-office.jpg')" }}
        >
          <div className="absolute inset-0 bg-black/40 hover:bg-black/50 duration-200"></div>
          <div className="absolute bottom-4 left-4 right-4">
            <h1 className="text-white font-bold text-lg sm:text-xl">
              Modern Office Complex
            </h1>
            <h2 className="text-zinc-200 text-xs sm:text-sm my-1">
              Commercial Construction
            </h2>
            <Link
              to="#"
              className="text-amber-500 text-xs sm:text-sm font-semibold inline-flex items-center"
            >
              View project <i className="ri-arrow-right-line ml-1"></i>
            </Link>
          </div>
        </div>

        {/* Card 2 */}
        <div
          className="relative rounded overflow-hidden bg-cover bg-center shadow-lg h-48 sm:h-64 md:h-72"
          style={{ backgroundImage: "url('/luxury-resident.jpg')" }}
        >
          <div className="absolute inset-0 bg-black/40 hover:bg-black/50 duration-200"></div>
          <div className="absolute bottom-4 left-4 right-4">
            <h1 className="text-white font-bold text-lg sm:text-xl">
              Luxury Residential Towers
            </h1>
            <h2 className="text-zinc-200 text-xs sm:text-sm my-1">
              Residential Construction
            </h2>
            <Link
              to="#"
              className="text-amber-500 text-xs sm:text-sm font-semibold inline-flex items-center"
            >
              View project <i className="ri-arrow-right-line ml-1"></i>
            </Link>
          </div>
        </div>

        {/* Card 3 */}
        <div
          className="relative rounded overflow-hidden bg-cover bg-center shadow-lg h-48 sm:h-64 md:h-72"
          style={{ backgroundImage: "url('/historic-building.jpg')" }}
        >
          <div className="absolute inset-0 bg-black/40 hover:bg-black/50 duration-200"></div>
          <div className="absolute bottom-4 left-4 right-4">
            <h1 className="text-white font-bold text-lg sm:text-xl">
              Historic Building Restoration
            </h1>
            <h2 className="text-zinc-200 text-xs sm:text-sm my-1">
              Restoration Construction
            </h2>
            <Link
              to="#"
              className="text-amber-500 text-xs sm:text-sm font-semibold inline-flex items-center"
            >
              View project <i className="ri-arrow-right-line ml-1"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
