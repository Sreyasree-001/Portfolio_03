"use client"


export const About = () => {
  return (
    <>
    <div className=" w-auto h-auto ml-2 mr-2 p-4 flex flex-col space-y-5 text-gray-500 md:max-w-5xl sm:mt-20 md:mt-28">
      <div>
      <h1 className="font-bold text-white sm:text-2xl mb-4">ABOUT</h1>
      <div className="lg:flex lg:flex-row">
      <p className="lg:w-2/3 reddit-mono">
      I am Sreyasree Sasmal, currently enrolled in the B.Tech program for Computer Science and Engineering at MCKV Institute of Engineering, 
      with an expected graduation year of 2026. My academic 
      journey has equipped me with proficiency in a diverse array of programming languages, including C, C++, Python, JavaScript, and Java.<br/><br/>
      In my professional journey, I have focused on front-end web development. I have gained practical experience with 
      technologies like React.js, Next.js, Tailwind CSS, Bootstrap, and ShadCN UI. Currently, I am dedicated to expanding my 
      skills further through the MERN stack, aiming to deepen my understanding of modern web development frameworks and tools.
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
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4 reddit-mono text-xl">
              <div className="w-auto h-10 p-2 bg-gray-700 text-white text-center rounded-md">ReactJS</div>
              <div className="w-auto h-10 p-2 bg-gray-700 text-white text-center rounded-md">Tailwind CSS</div>
              <div className="w-auto h-10 p-2 bg-gray-700 text-white text-center rounded-md">NextJS</div>
              <div className="w-auto h-10 p-2 bg-gray-700 text-white text-center rounded-md">NodeJS</div>
              <div className="w-auto h-10 p-2 bg-gray-700 text-white text-center rounded-md">ExpressJS</div>
          </div>
      </div>
      <div className="flex flex-col space-y-5">
          <h1 className="font-semibold text-slate-300">LANGUAGES</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4 reddit-mono text-xl">
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

