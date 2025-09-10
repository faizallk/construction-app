import React from "react";

function PeopleCard({ image, name, role, description }) {
  return (
    <div className="bg-white shadow rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col">
      {/* Image */}
      <img
        src={image}
        alt={name}
        className="w-full h-64 object-cover "
      />
      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-lg font-bold text-blue-900">{name}</h3>
        <p className="text-sm text-amber-500 font-semibold mb-3">{role}</p>
        <p className="text-sm text-zinc-600 flex-1">{description}</p>
      </div>
    </div>
  );
}

export default PeopleCard;
