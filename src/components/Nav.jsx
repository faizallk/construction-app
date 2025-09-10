import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Nav() {
  const [open, setOpen] = useState(false);

  const navItems = ["Home", "About", "Services", "Projects", "Contact"];

  return (
    <div className="w-full min-h-[10vh] flex items-center justify-between px-10 py-4 bg-blue-950 fixed top-0 left-0 z-[2000] ">
      {/* Left Logo */}
      <div className="flex items-center gap-2">
        <i className="ri-building-2-fill text-amber-500 text-xl"></i>
        <h1 className="text-white text-lg font-bold uppercase">Construction</h1>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center  md:gap-4 lg:gap-6">
        {navItems.map((elem, i) => (
          <NavLink style={(e)=>{
            return {
             color : e.isActive? "orange": "",
             
            }
          }}
            to={elem === "Home" ? "/" : elem.toLowerCase()}
            key={i}
            className="navlink md:text-base font-semibold text-lg text-white hover:text-amber-400 duration-200 relative"
          >
            {elem}
          </NavLink>
        ))}
      </div>

      {/* Right Contact */}
      <div className="hidden md:flex items-center gap-2">
        <i className="ri-phone-line text-xl text-amber-500"></i>
        <h3 className="text-xs font-semibold leading-tight text-white">
          Call Us Today <br />
          <span className="font-bold">+91 12345689</span>
        </h3>
      </div>

      {/* Mobile Hamburger Button */}
      <button
        className="md:hidden text-white text-2xl"
        onClick={() => setOpen(!open)}
      >
        {open ? <i className="ri-close-line"></i> : <i className="ri-menu-line"></i>}
      </button>

      {/* Sidebar Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-[60%] bg-blue-900 z-50 transform ${
          open ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out p-6 flex flex-col`}
      >
        {/* Close Button */}
        <button
          className="self-end text-white text-2xl mb-6"
          onClick={() => setOpen(false)}
        >
          <i className="ri-close-line"></i>
        </button>

        {/* Sidebar Nav Links */}
        <div className="flex flex-col gap-6 ">
          {navItems.map((elem, i) => (
            <NavLink
            style={(e)=>{
            return {
             color : e.isActive? "orange": "",
             
            }
          }}
              to={elem === "Home" ? "/" : elem.toLowerCase()}
              key={i}
              className="text-white font-semibold hover:text-amber-400 duration-200  "
              onClick={() => setOpen(false)} // close on click
            >
              {elem}
            </NavLink>
          ))}
        </div>

        {/* Sidebar Contact Info */}
        <div className="mt-auto flex items-center gap-2 border-t border-gray-600 pt-6">
          <i className="ri-phone-line text-xl text-amber-500"></i>
          <h3 className="text-sm text-white">
            Call Us Today <br />
            <span className="font-bold">+91 12345689</span>
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Nav;
