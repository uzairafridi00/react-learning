import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import About from "./About";

function Home() {
  return (
    <>
      <div name="home" className="w-full h-screen bg-[#0a192f]">
        <div className="max-w-[1200px] mx-auto px-8 flex flex-col justify-center h-full">
          <p className="text-[#0EC4B7]">Hi, my name is</p>
          <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
            Uzair Afridi
          </h1>
          <h2 className="text-2xl sm:text-5xl font-bold text-[#8892b0]">
            I'm a Full Stack Developer & Cyber Security Nerd.
          </h2>
          <p className="text-[#8892b0] py-4 max-w-[700px]">
            I’m a full-stack developer specializing in building (and
            occasionally pentesting) exceptional digital experiences. Currently,
            I’m focused on building responsive full-stack web applications.
          </p>
          <div>
            <div className="inline-flex">
              <a href="">
                <AiFillGithub className="text-5xl text-white m-2 hover:text-black" />
              </a>

              <a href="">
                <AiFillLinkedin className="text-5xl text-white m-2 hover:text-blue-600" />
              </a>

              <a href="">
                <AiFillTwitterCircle className="text-5xl text-white m-2 hover:text-blue-600" />
              </a>
            </div>

            <Link to="/work">
              <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
                View Work
                <span className="group-hover:rotate-90 duration-300">
                  <HiArrowNarrowRight className="ml-3 " />
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>

      <About />
    </>
  );
}

export default Home;
