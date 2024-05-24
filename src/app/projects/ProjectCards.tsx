"use client";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { data } from "./projectData";
const ProjectCards = () => {
  return (
    <>
      <div className="mt-10 w-auto h-auto ml-2 mr-2 p-4 flex flex-col space-y-5 text-gray-500 sm:max-w-5xl sm:mt-32 md:mt-26">
        <h1 className="font-bold text-xl text-white sm:text-2xl">PROJECTS</h1>
        <div className="grid gap-12 h-full mb-8 md:grid-cols-2 md:grid-rows-1 lg:h-1/2 ">
          {data.map((item, index) => (
              <div 
              key={item.id}
              className="relative overflow-hidden bg-fixed transition duration-200 lg:h-3/4
              transform hover:scale-105 border-2 border-t-0 border-gray-500 rounded-md p-3 lg:p-2">
                <img
                  className="object-cover w-full h-56 md:h-64 xl:h-80"
                  src={item.image}
                  alt=""
                />
                <div className="absolute inset-0 px-6 py-4 bg-black bg-opacity-85 opacity-100">
                  <p className="mb-4 text-3xl font-bold text-gray-100">
                    {item.title}
                  </p>
                  <p className="text-sm tracking-wide text-gray-300 overflow-scroll">
                    {item.about}
                  </p>
                  <div className="flex flex-row space-x-2 mt-2 text-sky-200">
                    <a href={item.link} target="blank">
                      <FaArrowUpRightFromSquare />
                    </a>
                    <a href={item.GitHub} target="blank">
                      <FaGithub />
                    </a>
                  </div>
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

export default ProjectCards;
