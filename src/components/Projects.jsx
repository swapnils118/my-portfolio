import React from "react";

import evento from "../assets/portfolio/evento.png";
import rmtDev from "../assets/portfolio/rmtDev.png";
import corpComment from "../assets/portfolio/corpComment.png";
import trekbag from "../assets/portfolio/trekbag.png";
import counter from "../assets/portfolio/counter.png";
import wordsAnalysis from "../assets/portfolio/wordsAnalysis.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      linkGithub: "https://github.com/swapnils118/evento",
      linkHosted: "https://evento-swapnil.vercel.app",
      src: evento,
    },

    {
      id: 2,
      linkGithub: "https://github.com/swapnils118/RmtDev",
      linkHosted: "https://rmtdev-swapnil.netlify.app",
      src: rmtDev,
    },

    {
      id: 3,
      linkGithub: "https://github.com/swapnils118/Your-Opinion",
      linkHosted: "https://corpcomment-swapnil.netlify.app",
      src: corpComment,
    },

    {
      id: 4,
      linkGithub: "https://github.com/swapnils118/TrekBag",
      linkHosted: "https://trekbag-swapnil.netlify.app",
      src: trekbag,
    },

    {
      id: 5,
      linkGithub: "https://github.com/swapnils118/Counter-App",
      linkHosted: "https://counter-app-swapnil.netlify.app",
      src: counter,
    },

    {
      id: 6,
      linkGithub: "https://github.com/swapnils118/Words-Analysis",
      linkHosted: "https://words-analysis-swapnil.netlify.app",
      src: wordsAnalysis,
    },
  ];

  return (
    <>
      <div
        name="Projects"
        className=" bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
      >
        <div className="flex flex-col max-w-screen-lg p-4 mx-auto justify-center w-full h-full ">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500 ">
              Projects
            </p>

            <p className="py-6 ">Checkout out my Projects!</p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:p-0 mx-auto  ">
            {projects?.map((project) => (
              <div
                key={project.id}
                className="shadow-md object-fill shadow-gray-600 rounded-lg duration-200 hover:scale-105"
              >
                <img
                  src={project.src}
                  alt="project_image"
                  className="rounded-md object-fill "
                />
                <div className=" flex justify-center items-center">
                  <button
                    onClick={() => window.open(project.linkGithub, "_blank")}
                    className=" w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 "
                  >
                    Code
                  </button>
                  <button
                    onClick={() => window.open(project.linkHosted, "_blank")}
                    className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                  >
                    Demo
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
