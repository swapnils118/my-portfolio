import React from "react";

const Contact = () => {
  return (
    <>
      <div
        name="Contact"
        className=" bg-gradient-to-b from-black to-gray-800 h-screen w-full p-4 text-white "
      >
        <div className=" flex flex-col justify-center p-4 max-w-screen-lg mx-auto h-full">
          <div className=" pb-8">
            <p className=" text-4xl font-bold inline border-b-4 border-gray-500">
              Contact
            </p>
            <p className=" py-8">
              Submit the form below to get in touch with me.
            </p>
          </div>

          <div className=" flex justify-center items-center">
            <form
              action="https://getform.io/f/alllndda"
              method="POST"
              className=" flex flex-col w-full md:w-1/2"
            >
              <input
                autoComplete="off"
                type="text"
                name="name"
                placeholder="Enter your Name"
                className=" mb-2 p-2 bg-transparent border-2 rounded-md focus:outline-none text-white "
              />
              <input
                autoComplete="off"
                type="text"
                name="email"
                placeholder="Enter your Email"
                className=" mb-2 p-2 bg-transparent border-2 rounded-md focus:outline-none text-white "
              />
              <textarea
                placeholder="Enter your message"
                name="message"
                rows="10"
                className=" p-2 bg-transparent border-2 rounded-md text-white focus:outline-none "
              ></textarea>

              <button className=" text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-105 duration-200 ">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
