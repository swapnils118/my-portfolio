import React from "react";

const About = () => {
  return (
    <>
      <div
        name="about"
        className=" h-screen w-full bg-gradient-to-b from-gray-800 to-black text-white"
      >
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
          <div className="pb-2">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
              About
            </p>
          </div>

          <p className="text-xl mt-10  ">
            My name is Swapnil Sharma and I am a Front-End developer with around
            2 years of professional experience.
            <br />
            <br />I have a knack for good design and UI and have good working
            knowledge of ReactJS, NextJS, Typescript, and Javascript concepts
            such as Server Side Rendering(SSR), Client Side Rendering(CSR),
            Server Components, Closures, Event-Loop, Hoisting, Callbacks,
            Promises, etc. I have also worked with state management tools such
            as ZUSTAND and CONTEXT-API and handled asynchronous network calls in
            Javascript using Async/Await.
          </p>

          <br />

          <p className="text-xl">
            Please find my attached resume. Feel free to contact me directly
            through any of the given platforms.
            <br />
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
