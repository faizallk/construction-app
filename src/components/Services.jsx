import React from 'react'
import ServicesCard from './templates/ServicesCard'

function Services() {
  const services = [
    {
      id: 1,
      title: "Construction",
      icon: "ri-building-line",
      description:
        "High-quality construction services for residential and commercial projects with modern standards.",
    },
    {
      id: 2,
      title: "Renovation",
      icon: "ri-tools-line",
      description:
        "Expert renovation services to upgrade and remodel existing structures with a modern touch.",
    },
    {
      id: 3,
      title: "Interior Works",
      icon: "ri-home-4-line",
      description:
        "Creative and functional interior designs to make spaces more aesthetic and comfortable.",
    },
    {
      id: 4,
      title: "Civil Engineering",
      icon: "ri-road-map-line",
      description:
        "Reliable civil engineering solutions for infrastructure, roads, and industrial projects.",
    },
  ];

  return (
    <div className="w-full bg-zinc-100 px-4 sm:px-6 md:px-10 lg:px-16 py-10 sm:py-14 md:py-20">
      {/* Heading */}
      <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-blue-950 font-bold">
          Our Services
        </h1>
        <div className="w-16 sm:w-20 md:w-24 h-1 bg-amber-500 rounded-lg my-3"></div>
        <p className="text-sm sm:text-base md:text-lg leading-6 text-zinc-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, dicta
          quos nobis adipisci saepe libero quo pariatur consectetur.
        </p>
      </div>

      {/* Services Grid */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
  {services.map((item) => (
    <ServicesCard key={item.id} data={item} />
  ))}
</div>

    </div>
  );
}

export default Services;
