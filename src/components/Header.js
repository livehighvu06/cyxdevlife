import React from "react";
import { BsSun, BsFillMoonStarsFill } from "react-icons/bs";
function Header({ darkMode, setDarkMode }) {
  return (
    <header>
      <nav className="max-w-3xl mx-auto p-2 md:p-5 mb-12 flex justify-between items-center rounded-m">
        <h1 className="text-xl font-bold dark:text-white">Chen Yi Xian</h1>
        <ul className="flex items-center gap-5">
          <li
            className={`px-2 py-1.5 rounded-md transition ${
              darkMode ? "bg-yellow-400 " : ""
            }`}
          >
            {darkMode ? (
              <BsSun
                className="cursor-pointer text-2xl text-white"
                onClick={() => setDarkMode(!darkMode)}
              />
            ) : (
              <BsFillMoonStarsFill
                className="cursor-pointer text-2xl"
                onClick={() => setDarkMode(!darkMode)}
              />
            )}
          </li>
          {/* <li>
          <a
            href="https://www.yourator.co/r/95f2cf1d-993a-4756-a1b0-22c8b40619fa"
            target="_blank"
            className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-bold px-4 py-2 rounded-md"
            rel="noreferrer"
          >
            Resume
          </a>
        </li> */}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
