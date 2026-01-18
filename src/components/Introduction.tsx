import React from "react";
import {
  AiFillCodepenCircle,
  AiFillLinkedin,
  AiFillGithub,
  AiFillCodeSandboxCircle,
} from "react-icons/ai";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100 },
  },
};

function Introduction(): JSX.Element {
  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col justify-center text-left"
    >
      <motion.p variants={itemVariants} className="text-teal font-medium tracking-wider uppercase mb-2">
        Front-End Engineer
      </motion.p>
      
      <motion.h2 variants={itemVariants} className="text-5xl md:text-7xl font-bold mb-4 text-gray-900 dark:text-gray-100 font-sans tracking-tight">
        Eddie Chen
      </motion.h2>
      
      <motion.h3 variants={itemVariants} className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8 font-light">
        Coding with passion, designing with soul.
      </motion.h3>
      
      <motion.p variants={itemVariants} className="text-gray-600 dark:text-gray-300 leading-relaxed max-w-lg mb-10 text-lg">
        我是陳義賢，一名熱愛創造獨特網頁體驗的前端工程師。
        喜歡探索新技術，將設計靈感轉化為流暢的互動介面。
      </motion.p>

      <motion.div variants={itemVariants} className="flex gap-6 text-3xl text-gray-400">
        {[
          { icon: AiFillGithub, href: "https://github.com/livehighvu06" },
          { icon: AiFillLinkedin, href: "https://www.linkedin.com/in/chenyixian/" },
          { icon: AiFillCodepenCircle, href: "https://codepen.io/livehighvu06" },
          { icon: AiFillCodeSandboxCircle, href: "https://codesandbox.io/u/livehighvu06" },
        ].map((social, index) => (
          <a
            key={index}
            href={social.href}
            target="_blank"
            rel="noreferrer"
            className="hover:text-teal dark:hover:text-teal-light transition-colors transform hover:-translate-y-1 duration-300"
          >
            <social.icon />
          </a>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default Introduction;
