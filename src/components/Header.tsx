import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../context/ThemeProvider";
import { BsSun, BsFillMoonStarsFill } from "react-icons/bs";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";

const navLinkStyles = ({ isActive }: { isActive: boolean }): string =>
  `relative px-3 py-2 text-sm font-medium transition-colors duration-300 ${
    isActive ? "text-teal-dark dark:text-teal-light" : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
  }`;

function Header(): JSX.Element {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const darkMode = theme === "dark";
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuVariants = {
    closed: {
      opacity: 0,
      scale: 0.95,
      y: -20,
      transition: {
        duration: 0.2
      }
    },
    open: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    closed: { x: -20, opacity: 0 },
    open: { x: 0, opacity: 1 }
  };

  const menuItems = ["Home", "About", "Bio", "Skill", "Portfolio"];

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="sticky top-4 z-50 mx-auto max-w-5xl px-4"
    >
      <div className="glass-card rounded-full px-6 py-3 flex justify-between items-center relative">
        <h1 className="text-lg font-bold bg-gradient-to-r from-teal to-teal-dark dark:from-teal-light dark:to-teal-lighter bg-clip-text text-transparent">
          CYX
        </h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {menuItems.map((item) => {
             const path = item === "Home" ? "/" : `/${item.toLowerCase()}`;
             return (
               <NavLink
                 key={item}
                 to={path}
                 end={item === "Home"}
                 className={navLinkStyles}
               >
                 {({ isActive }) => (
                   <>
                     {item}
                     {isActive && (
                       <motion.div
                         layoutId="navbar-underline"
                         className="absolute bottom-0 left-0 right-0 h-0.5 bg-teal dark:bg-teal-light rounded-full"
                         initial={false}
                         transition={{ type: "spring", stiffness: 500, damping: 30 }}
                       />
                     )}
                   </>
                 )}
               </NavLink>
             );
          })}
        </nav>

        <div className="flex items-center gap-4">
           {/* Mobile Menu Toggle */}
          <button 
            onClick={toggleMenu} 
            className="md:hidden p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
            aria-label="Toggle Menu"
          >
            {isOpen ? <AiOutlineClose className="text-xl text-gray-800 dark:text-white" /> : <AiOutlineMenu className="text-xl text-gray-800 dark:text-white" />}
          </button>

          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
            aria-label="Toggle Theme"
          >
            {darkMode ? (
              <BsSun className="text-xl text-amber" />
            ) : (
              <BsFillMoonStarsFill className="text-lg text-teal-dark" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="absolute top-full left-4 right-4 mt-2 p-4 rounded-2xl bg-white/95 dark:bg-dark-light/95 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-2xl md:hidden overflow-hidden"
          >
             <nav className="flex flex-col space-y-2">
              {menuItems.map((item) => {
                const path = item === "Home" ? "/" : `/${item.toLowerCase()}`;
                return (
                  <motion.div key={item} variants={itemVariants}>
                     <NavLink
                        to={path}
                        end={item === "Home"}
                        onClick={() => setIsOpen(false)}
                        className={({ isActive }) => 
                          `block px-4 py-3 rounded-xl transition-colors ${
                              isActive 
                              ? "bg-teal/10 text-teal-dark dark:bg-teal-light/10 dark:text-teal-light font-bold" 
                              : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/5"
                          }`
                        }
                      >
                        {item}
                      </NavLink>
                  </motion.div>
                );
              })}
             </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default Header;
