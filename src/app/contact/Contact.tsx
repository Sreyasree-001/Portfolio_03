"use client";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  userName: string;
  userEmail: string;
  userMessage: string;
};
const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) =>
    alert(`Message sent successfully`);

  const date = new Date();
  return (
    <>
      <div className="flex justify-center items-center w-full h-auto bg-gray-900 bg-opacity-25 mt-10 p-5 sm:mt-24">
        <div className="flex flex-col justify-center items-center space-y-4 my-5 w-full">
          <p className="text-slate-300 font-bold text-2xl sm:text-3xl md:text-4xl">
            Contact me
          </p>
          <p className="text-gray-500 font-light text-sm">
            Send a quick message to connect
          </p>
          <div className=" h-auto w-full p-4">
            <form
              className="flex flex-col justify-center items-center space-y-2 lg:space-y-5"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="sm:flex sm:flex-col w-full sm:space-y-2 sm:w-1/2">
                <label className="hidden sm:block text-gray-400" htmlFor="name">
                  Name:
                </label>
                <input
                  id="name"
                  type="name"
                  placeholder="Name"
                  className="p-1 rounded-md bg-transparent border-2 border-gray-700 text-gray-200 w-full sm:placeholder-transparent"
                  {...register("userName", { required: true })}
                />
              </div>
              <div className="sm:flex sm:flex-col w-full  sm:space-y-2 sm:w-1/2 ">
                <label
                  className="hidden sm:block text-gray-400"
                  htmlFor="email"
                >
                  Email:
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Email"
                  className="p-1 rounded-md bg-transparent border-2 border-gray-700 text-white w-full sm:placeholder-transparent"
                  {...register("userEmail", { required: true })}
                />
              </div>
              <div className="sm:flex sm:flex-col w-full sm:space-y-2 sm:w-1/2">
                <label
                  className="hidden sm:block text-gray-400"
                  htmlFor="message"
                >
                  Your message:
                </label>
                <textarea
                  id="message"
                  cols={30}
                  rows={5}
                  placeholder="Write your message here..."
                  className="p-1 rounded-md bg-transparent border-2 border-gray-700 text-white w-full sm:placeholder-transparent"
                  {...register("userMessage", { required: true })}
                />
              </div>
              {errors.userEmail && (
                <span className="text-gray-500">This field is required</span>
              )}
              <button
                type="submit"
                className="bg-indigo-800 p-2 text-gray-300 rounded-md w-20 hover:bg-indigo-600"
              >
                Send
              </button>
            </form>
          </div>
          <p className="text-slate-300">Email: sreyasree202@gmail.com</p>
          <div className="flex flex-row space-x-2 text-slate-400 p-2">
            <a
              href="https://github.com/Sreyasree-001"
              target="blank"
              title="gitHub"
            >
              <IoLogoGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/sreyasree-sasmal-a5274324b/"
              target="blank"
              title="linkedin"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100087570413361"
              target="blank"
              title="facebook"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.instagram.com/_meteoric_melody_01/"
              target="blank"
              title="instagram"
            >
              <FaInstagram />
            </a>
            <a href="mailto:sreyasree202@gmail.com" title="email">
              <MdEmail />
            </a>
          </div>
          <p className="text-gray-500 font-light self-center text-center">
            © Copyright {date.getFullYear()} All rights reserved
          </p>
        </div>
      </div>
    </>
  );
};

export default Contact;
