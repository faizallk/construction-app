import React from 'react'
import HeroBanner from '../components/templates/HeroBanner'
import TopHeading from '../components/templates/TopHeading'
import ProjectCard from '../components/templates/ProjectCard'
import ReviewCard from '../components/templates/ReviewCard'
import { Link } from 'react-router-dom';
import BottomBanner from '../components/templates/BottomBanner'

function Projects() {
  const projects = [
  {
    "type": "Residential",
    "title": "Oceanview Estate",
    "location": "Malibu, CA",
    "year": 2023,
      "img": "/public/resident1.jpg",
    "clientChallenge": "Our client needed a custom sustainable luxury family home that would maximize ocean views while minimizing environmental impact.",
    "ourSolution": "We designed and built a state-of-the-art residence featuring integrated solar systems, smart home technology, and sustainable materials throughout.",
    "outcome": "LEED Gold certified dream home with 40% reduced energy consumption compared to similar properties in the area."
  },
  {
    "type": "Residential",
    "title": "Sunset Apartments",
    "location": "Downtown Metro",
    "year": 2022,
    "img": "/public/resident2.jpg",
    "clientChallenge": "The developer needed a 120-unit apartment complex that would provide affordable housing options without sacrificing quality or aesthetics.",
    "ourSolution": "We implemented efficient design principles and rigorous cost management while maintaining high standards for materials and finishes.",
    "outcome": "Delivered on time and 8% under budget, with all units leased within three months of completion."
  },
  {
    "type": "Commercial",
    "title": "TechCorp Headquarters",
    "location": "Silicon Valley",
    "year": 2021,
        "img": "/public/commercial1.jpg",
    "clientChallenge": "TechCorp needed a 15-story office building that would reflect their innovative brand while providing a modern, collaborative workspace for employees.",
    "ourSolution": "We created an open-plan design with advanced MEP systems, collaborative spaces, and cutting-edge technology integration throughout the building.",
    "outcome": "Employee satisfaction increased by 35% after moving into the new headquarters, and the building has become a landmark in the tech district."
  },
  {
    "type": "Commercial",
    "title": "Riverside Shopping Center",
    "location": "Riverside County",
    "year": 2022,
        "img": "/public/commercial2.jpg",
    "clientChallenge": "The client needed a retail complex that would serve as a community hub while maximizing rental income from diverse commercial spaces.",
    "ourSolution": "We developed a mixed-use design with ample parking, pedestrian-friendly layouts, and flexible retail spaces to accommodate various business types.",
    "outcome": "The center maintains a 95% occupancy rate and has become a popular destination, increasing foot traffic for all businesses by 40%."
  },
  {
    "type": "Renovation",
    "title": "Historic City Hall Restoration",
    "location": "Old Town District",
    "year": 2019,
        "img": "/public/infra1.jpg",
    "clientChallenge": "The city needed to preserve the historical significance of their 100-year-old City Hall while modernizing its infrastructure and improving accessibility.",
    "ourSolution": "We implemented structural reinforcement techniques while meticulously restoring period details and integrating modern systems discreetly.",
    "outcome": "The project won a Heritage Preservation Award and extended the building’s functional life by at least 50 years."
  },
  {
    "type": "Infrastructure",
    "title": "Greenway Bridge",
    "location": "River District",
    "year": 2018,
        "img": "/public/infra2.jpg",
    "clientChallenge": "The city needed a safe pedestrian crossing over a busy waterway that would connect two developing neighborhoods while enhancing the urban landscape.",
    "ourSolution": "We designed an innovative cable-stay bridge with sustainable materials, energy-efficient lighting, and viewing platforms to enjoy the river vista.",
    "outcome": "The bridge has become an architectural landmark, increased property values in adjacent areas by 15%, and serves over 5,000 pedestrians daily."
  }
]
const testimonials = [
  {
    text: "The team exceeded our expectations at every stage. They turned our vision for a luxury apartment complex into reality with unmatched attention to detail. What impressed us most was their commitment to deadlines without compromising on quality.",
    name: "Rohan Mehta",
    role: "Managing Director, Mehta Realty",
    initials: "RM",
  },
  {
    text: "Working with them was a game changer. Our new corporate office is not just a workplace, it’s a statement of our brand. From design to execution, the process was transparent and stress-free. We’ll definitely collaborate again for future projects.",
    name: "Ayesha Khan",
    role: "CEO, Innovate Tech Pvt. Ltd.",
    initials: "AK",
  },
  {
    text: "From day one, they brought innovative solutions to complex challenges. Our highway project was delivered ahead of schedule and met the highest safety standards. Their professionalism and expertise are unmatched in the industry.",
    name: "Arvind Patel",
    role: "Project Head, National Infrastructure Ltd.",
    initials: "AP",
  },
]
const works = [
  {
    text: "250+",
    subtext: "Project Completed"
  }, {
    text: "98%",
    subtext: "Client Satisfaction"
  }, {
    text: "15",
    subtext: "Industry Awards"
  }, {
    text: "25+",
    subtext: "Years of Experience"
  }
]
  return (
    <div className='w-screen h-auto mt-[10vh]'>
  <HeroBanner title={`Our Projects`} description={`Showcasing our completed projects builds trust by demonstrating our expertise, quality workmanship, and successful track record. Each project tells a story of challenges overcome and client satisfaction achieved.`} bgImage={`../../public/service-bg.jpg`} />

  <TopHeading title={"Featured Projects"}  />
<div className="flex flex-wrap gap-5 px-10">
  {projects.map((p, i) => (
    <ProjectCard key={i} data={p} />
  ))}
</div>

<div className="w-full min-h-[20vw] bg-blue-900 mt-7 flex flex-col justify-center items-center py-5">
  <span className="w-16 h-1 bg-amber-500 rounded-full"></span>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-7 px-6 w-full max-w-7xl">
    {testimonials.map((t, i) => (
      <ReviewCard key={i} data={t} />
    ))}
  </div>
</div>

<div className='w-full h-[20vh] bg-white flex justify-around items-center '>
{works.map((w,i)=>(
  <div key={i} className='text-center'>
  <h1 className='text-amber-500 font-bold text-2xl'>{w.text}</h1>
  <h5 className=' text-blue-900 text-sm font-semibold'>{w.subtext}</h5>
</div>
))}
</div>
<BottomBanner />
    </div>
  )
}

export default Projects