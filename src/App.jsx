import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './pages/About'
import Services from './pages/Services';

import Contact from './pages/Contact';
import MainLayout from './layouts/MainLayout'
import Projects from './pages/Projects';
function App() {
  return (
   <div className='overflow-x-hidden'>
 
   <Routes>
    <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
  </div>
  )
}

export default App