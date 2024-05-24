"use client";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
const Contact = () => {
    const date = new Date();
  return (
    <>
      <div className="flex justify-center items-center w-full h-auto bg-gray-900 bg-opacity-25 mt-10">
        <div className="flex flex-col justify-center items-center space-y-2 my-5">
          <p className="text-slate-300 font-bold text-xl">Contact me</p>
          <p className="text-gray-500 font-light text-sm">Send a quick message to connect</p>
          <a href="google.com" target="blank" className="text-slate-300">
            Email: sreyasree202@gmail.com
          </a>
          <div className="flex flex-row space-x-2 text-slate-400 p-4">
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
          <p className="text-gray-500 font-light self-center text-center">© Copyright {date.getFullYear()} All rights reserved</p>
        </div>
      </div>
    </>
  );
};

export default Contact;
