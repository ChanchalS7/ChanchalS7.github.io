import React from "react";
import { HiOutlineMail } from "react-icons/hi";

//function for form reset
function handleSubmit(e) {
  setTimeout(() => {
    e.target.reset();
  }, 3000);
}

const Contact = () => {
  return (
    <div
      name="contact"
      className="contact w-full h-screen bg-slate-200 to-gray-800 p-4 text-black"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl text-blue-600 font-bold inline border-b-4 border-gray-500">
            Contact
          </p>

          <p className="py-6">Submit the form below to get in touch with me</p>
          <div className="flex items-center">
            <p><HiOutlineMail size={30} /></p>
            <p className="oldstyle-nums">chsverma7@gmail.com</p>
          </div>
        </div>

        <div className=" flex justify-center items-center">
          <form
            onSubmit={handleSubmit}
            name="contact"
            method="POST"
            action="https://getform.io/f/fc1b5d33-69e0-4f4b-9cf6-18244ef35f2e"
            className=" flex flex-col w-full md:w-1/2"
          >

            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
              className="p-2 bg-white border-solid border-2 border-black rounded-md text-black focus:outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              className="my-4 p-2 bg-white border-solid border-2 border-black rounded-md text-black focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              required
              className="p-2 bg-white border-solid border-2 border-black rounded-md text-black focus:outline-black"
            ></textarea>

            <button type="submit" className="text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ... px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
