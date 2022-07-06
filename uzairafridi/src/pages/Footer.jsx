import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="footer bg-gray-800 relative pt-1 border-b-2 border-blue-700">
        <div className="container mx-auto px-6">
          <div className="sm:flex sm:mt-8">
            <div className="mt-8 sm:mt-0 sm:w-full sm:px-8 flex flex-col md:flex-row justify-between">
              <div className="flex flex-col">
                <span className="font-bold text-[#0EC4B7] uppercase mb-2">
                  Social
                </span>
                <span className="my-2">
                  <a
                    href="#" target="_blank"
                    className="text-gray-200  text-md hover:text-[#0EC4B7]"
                  >
                    Github
                  </a>
                </span>
                <span className="my-2">
                  <a
                    href="#" target="_blank"
                    className="text-gray-200  text-md hover:text-[#0EC4B7]"
                  >
                    LinkedIn
                  </a>
                </span>
                <span className="my-2">
                  <a
                    href="#" target="_blank"
                    className="text-gray-200  text-md hover:text-[#0EC4B7]"
                  >
                    Twitter
                  </a>
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-[#0EC4B7] uppercase mt-4 md:mt-0 mb-2">
                  Company
                </span>
                <span className="my-2">
                  <Link
                    to="/"
                    className="text-gray-200 text-md hover:text-[#0EC4B7]"
                  >
                    Home
                  </Link>
                </span>
                <span className="my-2">
                  <Link
                    to="/work"
                    className="text-gray-200  text-md hover:text-[#0EC4B7]"
                  >
                    Work
                  </Link>
                </span>
                <span className="my-2">
                  <Link
                    to="/contact"
                    className="text-gray-200 text-md hover:text-[#0EC4B7]"
                  >
                    Contact
                  </Link>
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-[#0EC4B7] uppercase mt-4 md:mt-0 mb-2">
                  Footer header 3
                </span>
                <span className="my-2">
                  <a
                    href="#"
                    className="text-gray-200  text-md hover:text-[#0EC4B7]"
                  >
                    link 1
                  </a>
                </span>
                <span className="my-2">
                  <a
                    href="#"
                    className="text-gray-200  text-md hover:text-[#0EC4B7]"
                  >
                    link 1
                  </a>
                </span>
                <span className="my-2">
                  <a
                    href="#"
                    className="text-gray-200  text-md hover:text-[#0EC4B7]"
                  >
                    link 1
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-6">
          <div className="mt-16 border-t-2 border-gray-300 flex flex-col items-center">
            <div className="sm:w-2/3 text-center py-6">
              <p className="text-sm text-gray-200 font-bold mb-2">
                © 2022 by Uzair Afridi
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
