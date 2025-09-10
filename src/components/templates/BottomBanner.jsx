import React from 'react'
import { Link } from 'react-router-dom';

function BottomBanner() {
  return (
    <div
  className="relative w-full bg-cover bg-center sm:py-16 md:py-20 -mb-10"
  style={{ backgroundImage: "url('/construction.jpg')" }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-blue-900/80"></div>

  {/* Content */}
  <div className="relative z-10 text-center text-white max-w-3xl mx-auto px-4 py-5">
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
      Ready to Build Your Vision?
    </h2>
    <p className="text-sm sm:text-base md:text-lg mb-6 text-zinc-200">
      From concept to completion, we're here to bring your construction dreams 
      to life. Let’s create something extraordinary together.
    </p>
    <Link
      to="/contact"
      className="inline-block px-6 py-3 bg-amber-500 text-white font-semibold rounded shadow hover:bg-amber-600 transition-all duration-300"
    >
      Contact Us Today
    </Link>
  </div>
</div>
  
  )
}

export default BottomBanner