import React from "react";
import { data } from "./projectData";
import { FaArrowUpRightFromSquare, FaGithub } from "react-icons/fa6";

const Cards = () => {
  return (
    <>
      <div className="max-w-[85rem] px-4 py-5 sm:px-2 lg:px-32 lg:py-14 mx-auto">
        <div className="grid sm:grid-cols-2 gap-6">
          {data.map((item, index) => (
            <div 
            key={item.id}
            className="group flex flex-col h-full border shadow-sm rounded-xl bg-neutral-900 border-neutral-700 shadow-neutral-700/70">
              <div className="h-52 flex justify-center  bg-[#000000] rounded-t-xl">
                <img src={item.image} alt="" className="max-h-full px-1 py-3 sm:p-2 rounded-xl sm:rounded-t-xl"/>
              </div>
              <div className="p-4 my-2 md:p-6">
                <h3 className="text-xl font-semibold text-neutral-400 hover:text-white lg:text-3xl ">
                  {item.title}
                </h3>
                <p className="mt-3 text-neutral-600 reddit-mono">
                  {item.about}
                </p>
              </div>
              <div className="mt-auto flex border-t  divide-x  border-neutral-700 divide-neutral-700">
                <a
                  className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl  shadow-sm  disabled:opacity-50 disabled:pointer-events-none bg-neutral-900 border-neutral-700 text-white hover:bg-neutral-800"
                  href={item.GitHub} target="blank"
                >
                  <FaGithub />
                </a>
                <a
                  className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-xl  shadow-sm disabled:opacity-50 disabled:pointer-events-none bg-neutral-900 border-neutral-700 text-white hover:bg-neutral-800"
                  href={item.link} target="blank"
                >
                  <FaArrowUpRightFromSquare />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Cards;
