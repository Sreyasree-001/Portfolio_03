"use client";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import Cards from "./Cards";
const ProjectCards = () => {
  return (
    <>
      <div className="p-4 h-auto mt-24 flex flex-col justify-center items-center space-y-5 sm:mx-5 sm:mt-32">
        <h1 className=" font-bold text-xl text-white sm:text-2xl md:text-3xl uppercase">
          Projects
        </h1>
        <Cards />
        <p className="flex flex-row justify-center items-center gap-1 text-gray-700">
          More on
          <a
            href="https://github.com/Sreyasree-001?tab=repositories"
            target="blank"
            className="text-indigo-900 hover:text-indigo-700 flex justify-center items-center gap-0.5 underline"
          >
            GitHub
            <FaArrowUpRightFromSquare />
          </a>
        </p>
      </div>
    </>
  );
};

export default ProjectCards;
