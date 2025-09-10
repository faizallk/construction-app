import React from 'react'
import HeroBanner from '../components/templates/HeroBanner'
import TopHeading from '../components/templates/TopHeading'
import { Link } from 'react-router-dom'
import BottomBanner from './../components/templates/BottomBanner';

function Services() {
  return (
    <div className='w-screen h-auto mt-[10vh]'>
  <HeroBanner title={`Our Services`} description={`From residential construction to commercial projects, renovations to interior design, we offer comprehensive construction solutions tailored to your unique needs.`} bgImage={`../../public/service-bg.jpg`} />
<TopHeading title={"Comprehensive Constructions Solutions"} description={'At BuildMaster, we provide a full range of construction services designed to meet all your building needs. Our experienced team delivers exceptional quality, innovative solutions, and reliable project management from concept to completion.'} />

<div className="space-y-16">
  {/* Residential */}
  <div className="w-full bg-white flex flex-col md:flex-row items-center justify-center px-4 sm:px-6 md:px-10  gap-8">
    {/* Text */}
    <div className="w-full md:w-1/2">
      <h1 className="text-2xl sm:text-3xl font-bold text-blue-900">Residential Constructions</h1>
      <p className="text-sm sm:text-base text-zinc-600 mt-3">
        We create beautiful, functional homes tailored to your lifestyle and preferences...
      </p>
      <h2 className="text-lg font-bold text-blue-900 mt-6 flex items-center gap-2">
        <i className="ri-checkbox-circle-line text-amber-500"></i> What's Included
      </h2>
      <ul className="list-disc ml-6 marker:text-amber-500 space-y-2 mt-2">
        <li>Comprehensive design consultation and planning</li>
        <li>Permit acquisition and regulatory compliance</li>
        <li>High-quality construction using durable materials</li>
        <li>Personalized finishes and custom features</li>
        <li>Landscaping and exterior enhancements</li>
      </ul>
      <button className="mt-6 px-6 py-2 bg-amber-500 text-white rounded shadow hover:bg-amber-600 transition">
        Explore Residential
      </button>
    </div>
    {/* Image */}
    <div className="w-full md:w-1/2 rounded-md overflow-hidden">
      <img src="/luxury-resident.jpg" alt="Residential" className="w-full h-auto object-cover rounded-md shadow" />
    </div>
  </div>

  {/* Commercial */}
  <div className="w-full bg-white flex flex-col md:flex-row-reverse items-center justify-center px-4 sm:px-6 md:px-10  gap-8">
    <div className="w-full md:w-1/2">
      <h1 className="text-2xl sm:text-3xl font-bold text-blue-900">Commercial Construction</h1>
      <p className="text-sm sm:text-base text-zinc-600 mt-3">
        We deliver high-performance commercial spaces that support your business objectives...
      </p>
      <h2 className="text-lg font-bold text-blue-900 mt-6 flex items-center gap-2">
        <i className="ri-checkbox-circle-line text-amber-500"></i> What's Included
      </h2>
      <ul className="list-disc ml-6 marker:text-amber-500 space-y-2 mt-2">
        <li>Comprehensive site preparation and analysis</li>
        <li>Structural and architectural design</li>
        <li>Modern construction and building systems</li>
        <li>Interior fit-outs and customized finishing</li>
        <li>Project coordination with vendors & subcontractors</li>
      </ul>
      <button className="mt-6 px-6 py-2 bg-amber-500 text-white rounded shadow hover:bg-amber-600 transition">
        Explore Commercial
      </button>
    </div>
    <div className="w-full md:w-1/2 rounded-md overflow-hidden">
      <img src="/commercial.jpg" alt="Commercial" className="w-full h-auto object-cover rounded-md shadow" />
    </div>
  </div>

  {/* Renovation */}
  <div className="w-full bg-white flex flex-col md:flex-row items-center justify-center px-4 sm:px-6 md:px-10  gap-8">
    <div className="w-full md:w-1/2">
      <h1 className="text-2xl sm:text-3xl font-bold text-blue-900">Renovation & Remodeling</h1>
      <p className="text-sm sm:text-base text-zinc-600 mt-3">
        Transform your existing space with our expert renovation and remodeling services...
      </p>
      <h2 className="text-lg font-bold text-blue-900 mt-6 flex items-center gap-2">
        <i className="ri-checkbox-circle-line text-amber-500"></i> What's Included
      </h2>
      <ul className="list-disc ml-6 marker:text-amber-500 space-y-2 mt-2">
        <li>Assessment & evaluation</li>
        <li>Custom design solutions</li>
        <li>Interior & exterior renovation work</li>
        <li>Seamless integration</li>
        <li>High-quality finishes</li>
      </ul>
      <button className="mt-6 px-6 py-2 bg-amber-500 text-white rounded shadow hover:bg-amber-600 transition">
        Explore Renovation
      </button>
    </div>
  <div className="w-full  md:w-1/2 rounded-md overflow-hidden">
      <img src="/renovation.jpg" alt="renovation" className="w-full h-auto object-cover rounded-md shadow" />
    </div>
  </div>

  {/* Interior Designing */}
  <div className="w-full bg-white flex flex-col md:flex-row-reverse items-center justify-center px-4 sm:px-6 md:px-10  gap-8">
    <div className="w-full md:w-1/2">
      <h1 className="text-2xl sm:text-3xl font-bold text-blue-900">Interior Designing</h1>
      <p className="text-sm sm:text-base text-zinc-600 mt-3">
        Create spaces that inspire and function perfectly with our interior design services...
      </p>
      <h2 className="text-lg font-bold text-blue-900 mt-6 flex items-center gap-2">
        <i className="ri-checkbox-circle-line text-amber-500"></i> What's Included
      </h2>
      <ul className="list-disc ml-6 marker:text-amber-500 space-y-2 mt-2">
        <li>Space planning & optimization</li>
        <li>Material selection & consultation</li>
        <li>Furniture coordination</li>
        <li>Lighting design</li>
        <li>Installation supervision</li>
      </ul>
      <button className="mt-6 px-6 py-2 bg-amber-500 text-white rounded shadow hover:bg-amber-600 transition">
        Explore Interior
      </button>
    </div>
    <div className="w-full md:w-1/2 rounded-md overflow-hidden">
      <img src="/interior.jpg" alt="Interior" className="w-full h-auto object-cover rounded-md shadow" />
    </div>
  </div>

  {/* Civil Engineering */}
  <div className="w-full bg-white flex flex-col md:flex-row items-center justify-center px-4 sm:px-6 md:px-10  gap-8">
    <div className="w-full md:w-1/2">
      <h1 className="text-2xl sm:text-3xl font-bold text-blue-900">Civil Engineering & Consultation</h1>
      <p className="text-sm sm:text-base text-zinc-600 mt-3">
        Our civil engineering services provide the technical expertise needed for successful projects...
      </p>
      <h2 className="text-lg font-bold text-blue-900 mt-6 flex items-center gap-2">
        <i className="ri-checkbox-circle-line text-amber-500"></i> What's Included
      </h2>
      <ul className="list-disc ml-6 marker:text-amber-500 space-y-2 mt-2">
        <li>Detailed structural surveys</li>
        <li>Site planning & schematics</li>
        <li>Regulatory compliance</li>
        <li>Utility & environmental analysis</li>
        <li>Technical drawings</li>
      </ul>
      <button className="mt-6 px-6 py-2 bg-amber-500 text-white rounded shadow hover:bg-amber-600 transition">
        Explore Civil
      </button>
    </div>
    <div className="w-full md:w-1/2 rounded-md overflow-hidden">
      <img src="/service-bg.jpg" alt="Civil" className="w-full h-auto object-cover rounded-md shadow" />
    </div>
  </div>

  {/* Project Management */}
  <div className="w-full bg-white flex flex-col md:flex-row-reverse items-center justify-center px-4 sm:px-6 md:px-10 pb-10 gap-8">
    <div className="w-full md:w-1/2">
      <h1 className="text-2xl sm:text-3xl font-bold text-blue-900">Project Management</h1>
      <p className="text-sm sm:text-base text-zinc-600 mt-3">
        Our project management ensures your construction project runs smoothly from start to finish...
      </p>
      <h2 className="text-lg font-bold text-blue-900 mt-6 flex items-center gap-2">
        <i className="ri-checkbox-circle-line text-amber-500"></i> What's Included
      </h2>
      <ul className="list-disc ml-6 marker:text-amber-500 space-y-2 mt-2">
        <li>Comprehensive project planning</li>
        <li>Budget & resource management</li>
        <li>Quality assurance</li>
        <li>Risk management</li>
        <li>Progress updates</li>
      </ul>
      <button className="mt-6 px-6 py-2 bg-amber-500 text-white rounded shadow hover:bg-amber-600 transition">
        Explore Projects
      </button>
    </div>
    <div className="w-full md:w-1/2 rounded-md overflow-hidden">
      <img src="/project.jpg" alt="Project Management" className="w-full h-auto object-cover rounded-md shadow" />
    </div>
  </div>
</div>

<BottomBanner />
    </div>
  )
}

export default Services