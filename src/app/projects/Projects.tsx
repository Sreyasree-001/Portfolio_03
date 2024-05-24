"use client";
import { useEffect, useState } from "react";
import { data } from "./projectData";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";

const Projects = () => {
  const [view, setView] = useState(false);
  const [projectId, setprojectId] = useState(null);

  const viewHandler = (id) => {
    data.map((item) => {
      if (item.id === id) {
        setView(true);
        setprojectId(id);
      }
    });
  };
  const closeViewHandler = (id) => {
    data.map((item) => {
      if (item.id === id) {
        setView(false);
        setprojectId(null);
      }
    })
  }
  return (
    <>
      <div className="mt-10 w-auto h-auto ml-2 mr-2 p-4 flex flex-col space-y-5 text-gray-500 md:max-w-5xl sm:mt-24">
        <h1 className="font-bold text-xl text-white sm:text-2xl">PROJECTS</h1>
        <div className="block space-y-10 md:flex md:flex-row md:space-y-0 md:gap-4">
          {data.map((item, index) => (
            <div
              key={item.id}
              className="space-y-2 flex flex-col justify-center p-2 items-center lg:w-2xl border-2 border-t-0 rounded-md border-gray-700 transform duration-200 hover:scale-105 hover:cursor-pointer"
            >
              <img src={item.image} className="text-xl w-3/4" />
              <p className="text-slate-200 uppercase font-semibold sm:text-xl">
                {item.title}
              </p>
              {view && projectId == item.id ? (
                <>
                  <div className="h-auto w-auto text-gray-500 md:max-w-screen-sm">
                    {item.about}
                    <button onClick={() => closeViewHandler(item.id)} className="text-sm text-white">
                Close details
              </button>
                  </div>
                </>
              ) : (
                <>
                <button onClick={() => viewHandler(item.id)} className="text-sm">
                View details...
              </button>
                </>
              )}
              <div className="flex flex-row space-x-2 justify-center items-center text-blue-700">
                <a href={item.link} target="blank">
                  <FaArrowUpRightFromSquare />
                </a>
                <a href={item.GitHub} target="blank">
                  <FaGithub />
                </a>
              </div>
            </div>
          ))}
        </div>
        <p className="flex flex-row justify-center items-center gap-1">More on
        <a href="https://github.com/Sreyasree-001?tab=repositories" target="blank" className="text-indigo-700 hover:text-purple-400 flex justify-center items-center gap-0.5 underline">GitHub<FaArrowUpRightFromSquare /></a>
        </p>
      </div>
    </>
  );
};

export default Projects;
