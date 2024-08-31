import React, { useContext } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { ThemeContext } from "../context/ThemeProvider";
import { BsSun, BsFillMoonStarsFill } from "react-icons/bs";

const navLinkStyles = ({ isActive }: { isActive: boolean }): string =>
  `dark:text-white uppercase font-bold transition ${
    isActive ? "text-teal-600 dark:text-amber-300" : ""
  }`;

function Header(): JSX.Element {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const darkMode = theme === "dark";
  const location = useLocation();
  const isHomeActive =
    location.pathname === "/cyxdevlife" || location.pathname === "/cyxdevlife/";

  return (
    <header className="max-w-3xl mx-auto w-full">
      <nav className="p-2 md:p-5 mb-4 flex justify-between items-center rounded-m">
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
                onClick={toggleTheme}
              />
            ) : (
              <BsFillMoonStarsFill
                className="cursor-pointer text-2xl"
                onClick={toggleTheme}
              />
            )}
          </li>
        </ul>
      </nav>
      <nav className="p-2 md:p-5 flex justify-between items-center rounded-m">
        <ul className="flex space-x-4">
          <li>
            <NavLink
              to="/cyxdevlife"
              className={`${navLinkStyles} ${
                isHomeActive
                  ? "text-teal-600 dark:text-amber-300"
                  : "dark:text-white"
              }`}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/cyxdevlife/about" className={navLinkStyles}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/cyxdevlife/bio" className={navLinkStyles}>
              Bio
            </NavLink>
          </li>
          <li>
            <NavLink to="/cyxdevlife/skill" className={navLinkStyles}>
              Skill
            </NavLink>
          </li>
          <li>
            <NavLink to="/cyxdevlife/portfolio" className={navLinkStyles}>
              Portfolio
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
