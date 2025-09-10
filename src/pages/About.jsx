import React from 'react'
import PeopleCard from './../components/templates/PeopleCard';
import { Link } from 'react-router-dom';
import HeroBanner from '../components/templates/HeroBanner';
import BottomBanner from './../components/templates/BottomBanner';
function About() {
const journey = [
    {
      year: "1988",
      desc: "Founded by John Mitchell and Sarah Chen, two visionaries with complementary skills in engineering and architecture. The company began with small residential projects, focusing on quality craftsmanship and client satisfaction."
    },
    {
      year: "1995",
      desc: "Secured our first major commercial contract – the downtown office complex that became a landmark in the city's skyline. This project marked our expansion into the commercial sector."
    },
    {
      year: "2003",
      desc: "Expanded operations into the industrial sector, taking on manufacturing facilities and warehouse projects. This diversification strengthened our expertise across all construction domains."
    },
    {
      year: "2010",
      desc: "Launched our Sustainable Building Division in response to growing environmental concerns and client demand for eco-friendly solutions. Positioned as pioneers in green building practices."
    },
    {
      year: "2018",
      desc: "Embraced technology integration across all operations — implementing BIM (Building Information Modeling), drone surveying, and AI-assisted design to enhance efficiency and precision."
    },
    {
      year: "2023",
      desc: "Completed regional expansion plan, establishing offices in five major cities and increasing capacity to serve clients across the country while maintaining personalized service."
    },
  ];
  const values = [
    {
      id: 1,
      icon: "ri-paint-brush-line",
      title: "Quality Craftsmanship",
      detail:
        "We take pride in our work, ensuring every detail meets our exacting standards of excellence.",
    },
    {
      id: 2,
      icon: "ri-shield-check-line",
      title: "Integrity",
      detail:
        "We conduct all business with honesty, transparency, and ethical practices that build trust.",
    },
    {
      id: 3,
      icon: "ri-lightbulb-line",
      title: "Innovation",
      detail:
        "We continuously seek better methods, technologies, and solutions to advance construction practices.",
    },
    {
      id: 4,
      icon: "ri-leaf-line",
      title: "Sustainability",
      detail:
        "We embrace environmentally responsible practices in all aspects of our operations.",
    },
    {
      id: 5,
      icon: "ri-heart-2-line",
      title: "Safety First",
      detail:
        "We prioritize the wellbeing of our team, clients, and communities in every decision.",
    },
    {
      id: 6,
      icon: "ri-emotion-happy-line",
      title: "Client Satisfaction",
      detail:
        "We measure our success by the happiness and satisfaction of those we serve.",
    },
  ];
  const achievements = [
    {
      id: 1,
      icon: "ri-shield-check-line",
      title: "ISO 9001:2015",
      detail:
        "Certified for quality management systems, ensuring consistent quality across all projects.",
      color: "text-amber-500",
    },
    {
      id: 2,
      icon: "ri-award-line",
      title: "OSHA",
      detail:
        "Multiple safety awards recognizing our exceptional workplace safety standards.",
      color: "text-blue-600",
    },
    {
      id: 3,
      icon: "ri-leaf-line",
      title: "GBC",
      detail:
        "Proud member of the Green Building Council, promoting sustainable construction practices.",
      color: "text-green-600",
    },
    {
      id: 4,
      icon: "ri-building-line",
      title: "500+",
      detail:
        "Successful projects completed across residential, commercial, and industrial sectors.",
      color: "text-amber-500",
    },
    {
      id: 5,
      icon: "ri-money-dollar-circle-line",
      title: "$2B+",
      detail:
        "Total construction value delivered, representing our extensive project experience.",
      color: "text-amber-500",
    },
    {
      id: 6,
      icon: "ri-emotion-happy-line",
      title: "95%",
      detail:
        "Client satisfaction rate, reflecting our commitment to exceptional service.",
      color: "text-amber-500",
    },
    {
      id: 7,
      icon: "ri-recycle-line",
      title: "75+",
      detail:
        "LEED-certified projects completed, demonstrating our environmental commitment.",
      color: "text-green-600",
    },
    {
      id: 8,
      icon: "ri-medal-line",
      title: "12",
      detail:
        "Industry excellence awards received for innovation and quality construction.",
      color: "text-blue-600",
    },
  ];
   const leaders = [
    {
      id: 1,
      name: "John Mitchell",
      role: "Co-Founder & CEO",
      image: "/people1.jpg",
      description:
        "With over 25 years of engineering experience, John leads our company with a focus on innovation and operational excellence. His vision has been instrumental in our growth and success.",
    },
    {
      id: 2,
      name: "Sarah Chen",
      role: "Co-Founder & Chief Architect",
      image: "/people2.jpg",
      description:
        "Sarah brings 20+ years of architectural expertise, combining aesthetic vision with practical functionality. Her award-winning designs have become landmarks across the region.",
    },
    {
      id: 3,
      name: "Michael Rodriguez",
      role: "Chief Operations Officer",
      image: "/people3.jpg",
      description:
        "Michael oversees our day-to-day operations with precision and strategic insight, ensuring projects are delivered on time and within budget while maintaining our quality standards.",
    },
  ];
   const features = [
  {
    id: 1,
    title: "On-Time Delivery",
    icon: "ri-time-line",
    description:
      "With a 98% on-time completion rate, we understand that time is money. Our rigorous project management ensures deadlines are met without compromising quality.",
  },
  {
    id: 2,
    title: "Transparent Pricing",
    icon: "ri-price-tag-3-line",
    description:
      "No hidden costs or surprises. We provide detailed, transparent quotes and regular financial updates throughout your project's lifecycle.",
  },
  {
    id: 3,
    title: "Experienced Staff",
    icon: "ri-team-line",
    description:
      "Our team brings decades of combined experience across all construction disciplines, ensuring expert handling of every aspect of your project.",
  },
  {
    id: 4,
    title: "Quality Assurance",
    icon: "ri-shield-check-line",
    description:
      "Our comprehensive quality control processes and multiple inspection points guarantee that every project meets our exacting standards.",
  },
  {
    id: 5,
    title: "Client-First Approach",
    icon: "ri-user-heart-line",
    description:
      "We prioritize your vision and needs, maintaining open communication and collaborative relationships throughout the construction process.",
  },
  {
    id: 6,
    title: "24/7 Support",
    icon: "ri-customer-service-2-line",
    description:
      "Our dedicated support team is available around the clock to address any concerns or questions that may arise during your project.",
  },
];
  return (
    <div className='w-screen h-auto mt-[10vh]'>
  <HeroBanner title={` Building dreams, creating Legacies`} description={`We are a trusted name in the construction industry with a legacy of
      delivering quality, innovation, and sustainability across all our
      projects. From residential buildings to large-scale infrastructure,
      our expertise speaks through every brick we lay.`} bgImage={`../../public/construction.jpg`} />


     {/* Top Heading */}
      <div className="flex mt-10 flex-col items-center text-center max-w-2xl mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-blue-950 font-bold">
          Who We Are
        </h1>
        <div className="w-16 sm:w-20 md:w-24 h-1 bg-amber-500 rounded-lg my-3"></div>
        <p className="text-sm sm:text-base md:text-lg leading-6 text-zinc-600 px-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, dicta
          quos nobis adipisci saepe libero quo pariatur consectetur.
        </p>
      </div>
      <div className=" flex flex-col lg:flex-row gap-8 lg:gap-12 items-center p-10">
        {/* Left Image */}
         <div className="w-full lg:w-1/2 text-left">
           <p className="text-gray-600 text-sm md:text-base leading-6">
            Since our foundation in 1998, we have been driven by a mission to
            create spaces that inspire, empower, and sustain. Our team of
            engineers, architects, and professionals work hand-in-hand to bring
            ideas to life while maintaining the highest standards of quality and
            safety.
          </p>
          <p className="text-gray-600 text-sm md:text-base leading-6">
            Over the last two decades, we have successfully completed hundreds
            of projects, ranging from luxury residences to commercial complexes,
            and landmark restorations. Every project is a testament to our
            commitment to excellence and our passion for building a better
            tomorrow.
          </p>



        </div>

        {/* Right Content */}
         <img
          src="/img1.jpg"
          alt="About"
          className="w-full lg:w-1/2 h-64 sm:h-80 md:h-96 object-cover rounded-md shadow-md"
        />
      
      </div>
       <div className="w-screen bg-zinc-100 py-10 px-5 md:px-20">
  

      {/* Timeline with Progress Bar */}
   <div className="bg-gray-50 py-12 px-5 md:px-20">
  {/* Heading */}
  <div className="text-center mb-12">
    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900">
      Our Journey
    </h1>
    <p className="text-gray-600 mt-3 text-xs sm:text-sm md:text-base max-w-2xl mx-auto">
      From humble beginnings to industry leadership – the evolution of our company.
    </p>
  </div>

  {/* Timeline */}
  <div className="relative max-w-5xl mx-auto">
    {/* Center Line */}
    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-600 hidden md:block"></div>

    {/* Items */}
    {journey.map((item, index) => (
      <div
        key={index}
        className={`mb-10 flex w-full ${
          index % 2 === 0 ? "justify-start md:pr-8" : "justify-end md:pl-8"
        }`}
      >
        <div className="w-full md:w-5/12 relative">
          {/* Dot */}
          <div
            className={`hidden md:block absolute top-5 ${
              index % 2 === 0 ? "right-[-48px]" : "left-[-48px]"
            } w-6 h-6 bg-white border-4 border-amber-500 rounded-full z-10`}
          ></div>

          {/* Card */}
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <h2 className="text-lg sm:text-xl font-bold text-amber-600">
              {item.year}
            </h2>
            <p className="text-gray-600 text-xs sm:text-sm md:text-base mt-2">
              {item.desc}
            </p>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

   
    
    </div>
     {/* Mission And Vision */}
    <div className="w-full bg-zinc-50 px-4 sm:px-6 md:px-10 lg:px-16 py-16">
      {/* Heading */}
      <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-950">
          Mission, Vision & Values
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-zinc-600 mt-3">
          The principles that guide our work and define who we are as a company.
        </p>
      </div>

      {/* Mission & Vision */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white shadow rounded-lg p-6 flex flex-col items-center text-center hover:shadow-lg transition-all duration-300">
          <i className="ri-compass-discover-line text-4xl text-blue-600 mb-3"></i>
          <h2 className="text-lg font-semibold text-blue-900 mb-2">Our Mission</h2>
          <p className="text-sm text-zinc-600">
            To deliver exceptional construction solutions that exceed client
            expectations through innovation, quality craftsmanship, and
            unwavering commitment to excellence in every project we undertake.
          </p>
        </div>
        <div className="bg-white shadow rounded-lg p-6 flex flex-col items-center text-center hover:shadow-lg transition-all duration-300">
          <i className="ri-eye-line text-4xl text-blue-600 mb-3"></i>
          <h2 className="text-lg font-semibold text-blue-900 mb-2">Our Vision</h2>
          <p className="text-sm text-zinc-600">
            To be recognized as the leading sustainable construction innovator,
            setting new standards in the industry through responsible practices,
            technological advancement, and transformative building solutions.
          </p>
        </div>
      </div>

      {/* Values Grid */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {values.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow rounded-lg p-6 flex flex-col items-center text-center hover:shadow-lg transition-all duration-300"
          >
            <i className={`${item.icon} text-3xl text-amber-500 mb-3`}></i>
            <h3 className="text-base font-semibold text-blue-900 mb-2">
              {item.title}
            </h3>
            <p className="text-sm text-zinc-600">{item.detail}</p>
          </div>
        ))}
      </div>
    </div>
{/* Achivements */}
<div className="w-full bg-white px-4 sm:px-6 md:px-10 lg:px-16 py-16">
      {/* Heading */}
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-950">
          Achievements & Recognition
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-zinc-600 mt-3">
          Our commitment to excellence has earned us industry recognition and a
          track record of success.
        </p>
      </div>

      {/* Achievements Grid */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {achievements.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow rounded-lg p-6 flex flex-col items-center text-center hover:shadow-lg transition-all duration-300"
          >
            <i
              className={`${item.icon} text-3xl ${item.color} mb-3`}
              aria-hidden="true"
            ></i>
            <h3 className="text-base font-semibold text-blue-900 mb-2">
              {item.title}
            </h3>
            <p className="text-sm text-zinc-600">{item.detail}</p>
          </div>
        ))}
      </div>
    </div>
    {/* Leaderships and teams */}
    <div className="w-full bg-zinc-50 px-4 sm:px-6 md:px-10 lg:px-16 py-16">
      {/* Heading */}
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-950">
          Our Leadership Team
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-zinc-600 mt-3">
          Meet the experienced professionals who guide our company's vision and operations.
        </p>
      </div>

      {/* Team Cards */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {leaders.map((leader) => (
          <PeopleCard
            key={leader.id}
            image={leader.image}
            name={leader.name}
            role={leader.role}
            description={leader.description}
          />
        ))}
      </div>

      {/* Footer Note */}
      <p className="mt-10 text-center text-sm text-zinc-600 max-w-4xl mx-auto">
        Our leadership team guides a talented workforce of over 150 professionals, 
        including engineers, architects, project managers, skilled tradespeople, and support staff. 
        Together, we foster a collaborative culture that values expertise, innovation, and personal growth.
      </p>
    </div>

    {/* Why Choose Us */}
  <div className="w-full min-h-screen bg-white p-10">
  {/* Heading */}
  <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-950">
      Why Choose Us?
    </h1>
    <p className="text-sm sm:text-base md:text-lg text-zinc-600 mt-3">
      The principles that guide our work and define who we are as a company.
    </p>
  </div>

  {/* Cards */}
  <div className="flex flex-wrap justify-center mt-6 gap-4">
    {features.map((elem, i) => (
      <div
        key={i}
        className="flex gap-3 w-full sm:w-[48%] my-4"  // ✅ Responsive width
      >
        <i className={`${elem.icon} text-2xl text-amber-500 flex-shrink-0 w-8 text-center`}></i>
        <div>
          <h1 className="font-bold text-blue-900">{elem.title}</h1>
          <p className="w-full text-sm text-zinc-700 mt-2">
            {elem.description}
          </p>
        </div>
      </div>
    ))}
  </div>
  
</div>

<BottomBanner />
    </div>
  )
}

export default About