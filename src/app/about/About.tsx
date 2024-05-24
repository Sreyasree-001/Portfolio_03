"use client"


export const About = () => {
  return (
    <>
    <div className=" w-auto h-auto ml-2 mr-2 p-4 flex flex-col space-y-5 text-gray-500 md:max-w-5xl sm:mt-20">
      <div>
      <h1 className="font-bold text-white sm:text-2xl mb-4">ABOUT</h1>
      <div className="lg:flex lg:flex-row">
      <p className="lg:w-1/2">
      My name is Sreyasree Sasmal. Currently I'm pursuing B.Tech in Computer Science and Engineering from MCKV Institute of Engineering(2022-2026). I have learned programming languages like C, C++, python, javascript, java and I've worked in the field of web developement (fullstack). I have worked with NodeJs, ExpressJs, ReactJS,NextJS, Tailwind CSS, Bootstrap, ShadCN UI, and right now I'm enhancing my knowledge with MERN stack.
      </p>
      <div className="flex justify-center my-10 lg:my-0">
          <img
          src="image.jpeg"
          alt="image"
          className="w-40 h-40 rounded-full md:w-52 md:h-52 lg:w-64 lg:h-64 lg:ml-52"
          />
      </div>
      </div>
      </div>
      <div className="flex flex-col space-y-5">
          <h1 className="font-semibold text-slate-300">TECH STACKS</h1>
          <div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4">
              <div className="w-auto h-10 p-2 bg-gray-700 text-white text-center rounded-md">ReactJS</div>
              <div className="w-auto h-10 p-2 bg-gray-700 text-white text-center rounded-md">Tailwind</div>
              <div className="w-auto h-10 p-2 bg-gray-700 text-white text-center rounded-md">NextJS</div>
              <div className="w-auto h-10 p-2 bg-gray-700 text-white text-center rounded-md">NoseJS</div>
              <div className="w-auto h-10 p-2 bg-gray-700 text-white text-center rounded-md">ExpressJS</div>
          </div>
      </div>
      <div className="flex flex-col space-y-5">
          <h1 className="font-semibold text-slate-300">LANGUAGES</h1>
          <div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4">
              <div className="w-auto h-10 p-2 bg-gray-700 text-white text-center rounded-md">C</div>
              <div className="w-auto h-10 p-2 bg-gray-700 text-white text-center rounded-md">C++</div>
              <div className="w-auto h-10 p-2 bg-gray-700 text-white text-center rounded-md">Javascript</div>
              <div className="w-auto h-10 p-2 bg-gray-700 text-white text-center rounded-md">Python</div>
              <div className="w-auto h-10 p-2 bg-gray-700 text-white text-center rounded-md">Java</div>
          </div>
      </div>
    </div>
    </>
  )
}

