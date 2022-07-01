import React, { useState } from "react";
import useDarkSide from "../../setups/app-context-manager/useDarkSide";
import { DarkModeSwitch } from "react-toggle-dark-mode";

import me from '../../assets/images/me.jpeg';


function Switcher() {
  const [colorTheme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState(
    colorTheme === "light" ? true : false
  );

  const toggleDarkMode = (checked) => {
    setTheme(colorTheme);
    setDarkSide(checked);
  };

  return (
    <>
      <div className="m-16 flex flex-col items-center">
        <DarkModeSwitch
          checked={darkSide}
          onChange={toggleDarkMode}
          size={56}
        />
      </div>

      <div className="w-full md:w-1/2 lg:w-2/6">
        <div className="bg-white dark:bg-gray-800 m-4 rounded-lg shadow-2xl">
          <img
            src={
              "https://picsum.photos/id/16/800/260" +
              (colorTheme === "light" ? "?grayscale" : "")
            }
            className="rounded-t-lg"
          />
          <div className="px-4 pt-2">
            <h1 className="font-bold mt-2 text-2xl text-gray-800 dark: text-gray-300">
              UX Better Solutions
            </h1> 
            <h3 className="text-gray-500 dark: text-gray-300">
              Dark & Light mode with React & Tailwind 
            </h3> 
            <p className="text-gray-400 dark;text-gray-400 my-4">
              Development of dark and light theme mode using React and Tailwind.
              Also saving the current theme in LocalStorage. The current theme
              mode is pulled when the page is refreshed. Let's try! 
            </p> 
          </div> 
          <div className="px-4 pb-2">
             
            <a
              href="https://www.linkedin.com/in/omerduraker/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center"
            >
              <img src={me} width="32" alt="Avatar" className="rounded-full" /> 
              <div className="ml-2">
                <p className="text-gray-500 dark: text-gray-300 text-sm">
                  @uzairafridi
                </p>
              </div>
            </a>
          </div> 
          <div className="p-4">
            <span className="inline-block bg-gray-300 dark:bg-gray-500 rounded-full px-3 py-1 text-xs font-semibold text-gray-500 dark:text-gray-300 mr-2 mb-2">
              #react
            </span>
            <span className="inline-block bg-gray-300 dark:bg-gray-500 rounded-full px-3 py-1 text-xs font-semibold text-gray-500 dark:text-gray-300 mr-2 mb-2">
              #tailwind
            </span>
            <span className="inline-block bg-gray-300 dark:bg-gray-500 rounded-full px-3 py-1 text-xs font-semibold text-gray-500 dark:text-gray-300 mr-2 mb-2">
              #darkmode
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Switcher;
