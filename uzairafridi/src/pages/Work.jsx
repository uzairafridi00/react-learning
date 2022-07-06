import React from "react";
import WorkImg from "../assets/images/workImg.jpeg";

function Work() {
  const work = [
    {
      id: 1,
      src: WorkImg,
      name: "React Application",
      demo: "https://github.com/",
      code: "https://github.com/",
    },
  ];

  return (
    <>
      <div
        name="work"
        className="w-full md:h-screen text-gray-300 bg-[#0a192f]"
      >
        <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
              Work
            </p>
            <p className="py-6">Check out some of my recent work</p>
          </div>
          {/* Container Starts */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {/* Grid Item */}
            {work.map(({ id,name, src, demo, code }) => (
              <div key={id} data-aos="fade-left"
                style={{ backgroundImage: `url(${src})` }}
                className="shadow-lg shadow-[#040c16] cursor-pointer group container rounded-md flex justify-center items-center mx-auto content-div hover:scale-110 duration-500"
              >
                {/* Hover Effects */}
                <div className="opacity-0 group-hover:opacity-100">
                  <span className="text-2xl font-bold text-white tracking-wider">
                    {name}
                  </span>
                  <div className="pt-8 text-center">
                    <a href={demo} target="_blank" rel="noreferrer">
                      <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                        Demo
                      </button>
                    </a>
                    <a href={code} target="_blank" rel="noreferrer">
                      <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                        Code
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Container ends */}
        </div>
      </div>
    </>
  );
}

export default Work;
