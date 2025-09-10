import React from "react";
import { Link } from "react-router-dom";

function ServicesCard({ data }) {
  // Safe fallbacks
  const title = data?.title ?? "Untitled";
  const description = data?.description ?? "Description not available.";
  const iconClass = data?.icon ?? "ri-building-2-line";

  return (
    <div
      className="w-full bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl 
                 transform hover:-translate-y-1 transition-all duration-300 
                 flex flex-col"
    >
      {/* Icon Area */}
      <div className="w-full h-28 sm:h-32 md:h-36 bg-blue-950 flex items-center justify-center ">
        <i
          className={`${iconClass} text-white text-3xl sm:text-4xl md:text-5xl`}
          aria-hidden="true"
        />
      </div>

      {/* Content */}
      <div className="flex-1 w-full p-5 flex flex-col justify-between">
        <div>
          <h3 className="text-blue-950 font-bold text-lg mb-2">{title}</h3>
          <p className="text-sm text-zinc-600 leading-relaxed">{description}</p>
        </div>

        {/* CTA Link */}
        <Link
          to="#"
          className="mt-4 text-amber-500 text-sm font-semibold inline-flex items-center gap-1 hover:underline"
          aria-label={`Learn more about ${title}`}
        >
          Learn More
          <i className="ri-arrow-right-line" aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}

export default ServicesCard;
