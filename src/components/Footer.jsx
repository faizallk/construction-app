import {useState} from "react";
import { Link } from "react-router-dom";

function Footer() {
  const [email, setemail] = useState('');
  const onSubmitHandler = (e)=>{
    e.preventDefault()
   if(email.trim() !== ''){
      setemail(email)
      alert(email)
   }
  }
  return (
    <footer className="w-full bg-zinc-600 px-6 sm:px-10 py-10 mt-10">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* About */}
        <div>
          <h1 className="text-sm font-semibold text-white">About Construct</h1>
          <div className="w-10 h-1 bg-amber-500 rounded-md mt-1"></div>
          <p className="text-xs text-zinc-400 mt-2 max-w-[250px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <div className="flex items-center gap-3 mt-3">
            <Link>
              <i className="text-zinc-400 hover:text-white duration-300 ri-facebook-fill"></i>
            </Link>
            <Link>
              <i className="text-zinc-400 hover:text-white duration-300 ri-instagram-line"></i>
            </Link>
            <Link>
              <i className="text-zinc-400 hover:text-white duration-300 ri-twitter-fill"></i>
            </Link>
            <Link>
              <i className="text-zinc-400 hover:text-white duration-300 ri-linkedin-fill"></i>
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h1 className="font-semibold text-white">Quick Links</h1>
          <div className="w-10 h-1 bg-amber-500 rounded-md my-1"></div>
          <div className="flex flex-col gap-1 mt-2">
            {["Home", "About", "Services", "Projects", "Contact"].map((link) => (
              <Link to={link.toLowerCase() === "home" ? '/' : link.toLowerCase()}
                key={link}
                className="text-xs text-zinc-200 hover:text-amber-500 duration-300"
              >
                <i className="ri-arrow-drop-right-line"></i> {link}
              </Link>
            ))}
          </div>
        </div>

        {/* Services */}
        <div>
          <h1 className="font-semibold text-white">Our Services</h1>
          <div className="w-10 h-1 bg-amber-500 rounded-md my-1"></div>
          <div className="flex flex-col gap-1 mt-2">
            {[
              "Construction",
              "Renovation",
              "Interior Works",
              "Civil Engineer",
              "Consulting",
            ].map((service) => (
              <Link
                key={service}
                className="text-xs text-zinc-200 hover:text-amber-500 duration-300"
              >
                <i className="ri-arrow-drop-right-line"></i> {service}
              </Link>
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h1 className="font-semibold text-white">Newsletter</h1>
          <div className="w-10 h-1 bg-amber-500 rounded-md my-1"></div>
          <p className="text-xs text-zinc-200 mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
            quidem quis.
          </p>
          <form onSubmit={onSubmitHandler} className="mt-3 w-full flex justify-between bg-zinc-100 rounded overflow-hidden">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent outline-none border-none px-3 py-2 text-sm w-full"
              onChange={(e)=>setemail(e.target.value)}
              value={email}
            />
            <button className="bg-amber-500 text-white px-4 py-2 hover:bg-amber-600 duration-300">
              <i className="ri-send-plane-fill text-lg"></i>
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="mt-8 border-t border-zinc-500 pt-4 text-center text-xs text-zinc-300">
        © {new Date().getFullYear()} Construct. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
