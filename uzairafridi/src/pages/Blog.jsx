import React from "react";

import xssimg from '../assets/images/xss-img.png';

function Blog() {
  return (
    <>
      <section className="text-gray-300 body-font w-full h-screen bg-[#0a192f]">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4">
            <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Blog</p>
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Check out some of my recent blogs.
            </p>
          </div>

          {/* Container Starts Here */}
          <div className="flex flex-wrap -m-4 cursor-pointer">
            <div
              className="lg:w-1/3 sm:w-1/2 p-4"
              data-aos="fade-left">
              <div className="flex relative shadow-[#040c16] hover:scale-110 duration-500">
                <img
                  alt={xssimg}
                  className="absolute inset-0 w-full h-full object-cover object-center rounded"
                  src={xssimg}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white rounded opacity-0 hover:opacity-100 hover:transition-opacity">
                  <h2 className="tracking-widest title-font font-bold text-[#0EC4B7] mb-1">
                    THE SUBTITLE
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Shooting Stars
                  </h1>
                  <p className="leading-relaxed text-gray-500">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

export default Blog;
