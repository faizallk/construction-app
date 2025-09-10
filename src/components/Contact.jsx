import { useState } from "react";

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
      setData({...data});
      console.log(Data)
    }
  };

  return (
    <div className="w-screen bg-white p-6 sm:p-10">
      {/* Heading */}
      <div className="flex flex-col items-center mx-auto text-center max-w-2xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl text-blue-950 font-bold">
          Contact Us
        </h1>
        <div className="w-20 sm:w-24 h-1 bg-amber-500 rounded-lg my-2"></div>
        <p className="text-sm sm:text-base leading-6 text-zinc-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, dicta
          quos nobis adipisci saepe liberor.
        </p>
      </div>

      {/* Contact Content */}
      <div className="mt-10 flex flex-col lg:flex-row gap-8 lg:gap-12 justify-between items-start">
        {/* Left Info */}
        <div className="flex flex-col gap-4 w-full lg:w-1/3">
          <h1 className="text-blue-950 font-semibold text-xl">
            Get in Touch
          </h1>

          <div className="flex gap-3 items-center">
            <i className="ri-map-pin-line text-amber-500 text-xl rounded-full"></i>
            <p className="font-semibold text-amber-500">
              Our Location <br />
              <span className="text-xs text-zinc-600 font-normal">
                123 Construction Ave, Building city, Ranchi
              </span>
            </p>
          </div>

          <div className="flex gap-3 items-center">
            <i className="ri-phone-line  text-amber-500 text-xl rounded-full"></i>
            <p className="font-semibold leading-5 text-amber-500">
              Call Us <br />
              <span className="text-xs text-zinc-600 font-normal">
                +91 123456789, +91 762376247
              </span>
            </p>
          </div>

          <div className="flex gap-3 items-center">
            <i className="ri-mail-line  text-amber-500 text-xl rounded-full"></i>
            <p className="font-semibold leading-5 text-amber-500">
              Email Us <br />
              <span className="text-xs text-zinc-600 font-normal">
                construction@gmail.com
              </span>
            </p>
          </div>

          <div className="flex gap-3 items-center">
            <i className="ri-time-line  text-amber-500 text-xl rounded-full"></i>
            <p className="font-semibold leading-5 text-amber-500">
              Working Hours <br />
              <span className="text-xs text-zinc-600 font-normal">
                Monday - Friday: 8:00 AM to 6:00 PM <br />
                Saturday: 9:00 AM to 1:00 PM
              </span>
            </p>
          </div>
        </div>

        {/* Right Form */}
        <div className="w-full lg:w-2/3 bg-zinc-100 p-6 sm:p-10 rounded-md">
          <form
            onSubmit={onSubmitHandler}
            className="flex flex-col gap-4"
          >
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
    </div>
  );
}

export default Contact;
