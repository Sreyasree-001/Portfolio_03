"use client";
export const Hero = () => {
  return (
    <>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 sm:mt-16 md:mt-14
      bg-[url('https://preline.co/assets/svg/examples-dark/squared-bg-element.svg')] bg-cover">
        <div className="max-w-lg sm:text-center sm:mx-auto">
          <a
            href="/"
            aria-label="Go Home"
            title="Logo"
            className="inline-block mb-4"
          >
            <h1 className="text-gray-300 font-light self-center text-xl sm:text-2xl">
              HELLO, EVERYONE!
            </h1>
          </a>
          <h2 className="mb-6 font-sans text-2xl font-bold tracking-tight text-gray-300 sm:text-3xl sm:leading-none">
            I'M SREYASREE SASMAL
          </h2>
          <p className="text-3xl text-gray-100 sm:text-5xl">
            A FULLSTACK WEB DEVELOPER
          </p>
          <hr className="my-8 border-gray-300" />
          <div>
            <a href="cvFinal.pdf" download="cvFinal">
              <button className="bg-transparent text-white border-gray-600 border-2 w-32 h-10 rounded-md  hover:bg-neutral-900">
                Download CV
              </button>
            </a>
          </div>

          <p className="max-w-xs text-xs text-gray-600 sm:text-sm sm:max-w-sm sm:mx-auto"></p>
          
        </div>
        
      </div>
    </>
  );
};
