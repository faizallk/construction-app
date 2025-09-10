import { useState } from "react";
import HeroBanner from "./../components/templates/HeroBanner";
import Map from "../components/Map";
import { Link } from 'react-router-dom';

function Contact() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [subject, setsubject] = useState("");
  const [msg, setmsg] = useState("");
  const [Data, setData] = useState({});

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (name.trim() !== "" && email.trim() !== "" && msg.trim() !== "") {
      const data = {
        name: name,
        email: email,
        subject: subject,
        message: msg,
      };
      setData({ ...data });
      console.log(Data);
      setemail('')
      setname('')
      setmsg('')
      setsubject('')
    }
  };

  return (
    <div className="w-screen h-auto">
      <HeroBanner
        title={"Get In Touch With Us"}
        description={
          "Whether you have a construction project in mind, questions about our services, or are interested in partnership opportunities, we're here to help. Reach out to us today!"
        }
        bgImage={"/public/construction.jpg"}
      />

      <div className="mt-10 flex flex-col lg:flex-row gap-8 lg:gap-12 justify-between items-start px-10">
        {/* Left Info */}
        <div className="flex flex-col gap-4 w-full lg:w-1/3">
          <h1 className="text-blue-950 font-semibold text-xl">Contact Information</h1>

          <div className="flex gap-3 items-start">
            <i className="ri-map-pin-line text-amber-500 text-lg"></i>
            <p className="font-semibold text-amber-500">
              Our Address <br />
              <span className="text-xs text-zinc-600 font-normal">
                123 Builder Avenue, Suite 500 Chicago, IL 60601
              </span>
            </p>
          </div>

          <div className="flex gap-3 items-start">
            <i className="ri-phone-line text-amber-500 text-lg"></i>
            <p className="font-semibold leading-5 text-amber-500">
              Phone Numbers <br />
              <span className="text-xs text-zinc-600 font-normal">
                1-800-555-BUILD (Toll Free) <br />
                312-555-7890 (Office)
              </span>
            </p>
          </div>

          <div className="flex gap-3 items-start">
            <i className="ri-mail-line text-amber-500 text-lg"></i>
            <p className="font-semibold leading-5 text-amber-500">
              Email Us <br />
              <span className="text-xs text-zinc-600 font-normal">
                info@yourcompany.com <br />
                support@yourcompany.com
                <br />
                careers@yourcompany.com
              </span>
            </p>
          </div>

          <div className="flex gap-3 items-start">
            <i className="ri-time-line text-amber-500 text-lg"></i>
            <p className="font-semibold leading-5 text-amber-500">
              Working Hours <br />
              <span className="text-xs text-zinc-600 font-normal">
                Monday - Friday: 8:00 AM to 6:00 PM <br />
                Saturday: 9:00 AM to 1:00 PM
                <br />
                Sundays: Closed
              </span>
            </p>
          </div>
        </div>

        {/* Right Form */}
        <div className="w-full lg:w-2/3 bg-zinc-100 p-6 sm:p-10 rounded-md">
          <form onSubmit={onSubmitHandler} className="flex flex-col gap-4">
            <input
              onChange={(e) => setname(e.target.value)}
              value={name}
              type="text"
              placeholder="Your Name"
              className="w-full bg-white px-4 py-2 rounded-md outline-none "
            />
            <input
              onChange={(e) => setemail(e.target.value)}
              value={email}
              type="email"
              placeholder="Your Email"
              className="w-full bg-white px-4 py-2 rounded-md outline-none "
            />
            <input
              onChange={(e) => setsubject(e.target.value)}
              value={subject}
              type="text"
              placeholder="Subject"
              className="w-full bg-white px-4 py-2 rounded-md outline-none "
            />
            <textarea
              onChange={(e) => setmsg(e.target.value)}
              value={msg}
              rows={5}
              placeholder="Message"
              className="bg-white py-2 px-4 rounded-md w-full outline-none "
            ></textarea>
            <button className="bg-blue-900 px-5 py-2 rounded-md text-white hover:bg-blue-950 duration-300 cursor-pointer">
              Send Message
            </button>
          </form>
        </div>
      </div>
 <div className="px-4 sm:px-10 md:px-15 lg:px-20 py-6 sm:py-8 md:py-10">
  <Map />
</div>

<div className="w-full sm:h-[18vh] md:h-[20vh] lg:h-[22vh] bg-zinc-200 flex flex-col justify-center items-center py-6 -mb-10">
  <h1 className="font-semibold text-blue-900 text-lg sm:text-xl md:text-2xl mb-3">
    Contact With Us
  </h1>

  <div className="flex items-center gap-3 sm:gap-4 md:gap-5 mt-3">
    <Link>
      <i className="ri-facebook-fill text-white bg-blue-900 rounded-full 
        text-base sm:text-lg md:text-xl lg:text-2xl
        p-2 sm:p-3 hover:bg-blue-950 duration-300"></i>
    </Link>
    <Link>
      <i className="ri-instagram-line text-white bg-blue-900 rounded-full 
        text-base sm:text-lg md:text-xl lg:text-2xl
        p-2 sm:p-3 hover:bg-blue-950 duration-300"></i>
    </Link>
    <Link>
      <i className="ri-twitter-fill text-white bg-blue-900 rounded-full 
        text-base sm:text-lg md:text-xl lg:text-2xl
        p-2 sm:p-3 hover:bg-blue-950 duration-300"></i>
    </Link>
    <Link>
      <i className="ri-linkedin-fill text-white bg-blue-900 rounded-full 
        text-base sm:text-lg md:text-xl lg:text-2xl
        p-2 sm:p-3 hover:bg-blue-950 duration-300"></i>
    </Link>
  </div>
</div>


    </div>
  );
}

export default Contact;
