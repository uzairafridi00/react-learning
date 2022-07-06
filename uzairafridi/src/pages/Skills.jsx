import React from "react";

import HTML from "../assets/images/html.png";
import CSS from "../assets/images/css.png";
import JavaScript from "../assets/images/javascript.png";
import ReactImg from "../assets/images/react.png";
import Node from "../assets/images/node.png";
import FireBase from "../assets/images/firebase.png";
import AWS from "../assets/images/aws.png";
import GitHub from "../assets/images/github.png";
import Tailwind from "../assets/images/tailwind.png";
import Mongo from "../assets/images/mongo.png";

const Skills = () => {
  const skills = [
    {
      id: 1,
      src: HTML,
    },
    {
      id: 2,
      src: CSS,
    },
    {
      id: 3,
      src: JavaScript,
    },
    {
      id: 4,
      src: ReactImg,
    },
    {
      id: 5,
      src: Node,
    },
    {
      id: 6,
      src: FireBase,
    },
    {
      id: 7,
      src: AWS,
    },
    {
      id: 8,
      src: GitHub,
    },
    {
      id: 9,
      src: Tailwind,
    },
    {
      id: 10,
      src: Mongo,
    },
  ];

  return (
    <div name="skills" className="w-full h-screen bg-[#0a192f] text-gray-300">
      {/* Container */}
      <div
        className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full"
        data-aos="fade-right"
      >
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 ">
            Skills
          </p>
          <p className="py-4">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
            {/* Parse the JSON from above data */}
          {skills.map(({ id, src }) => (
            <div
              key={id}
              className="cursor-pointer shadow-md shadow-[#040c16] hover:scale-110 duration-500"
            >
              <img className="w-20 mx-auto" src={src} alt={src} />
              <p className="my-4">HTML</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
