import React from "react";
import {
  AiFillCodepenCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import avatar from "../images/avatar.png";
function Hero() {
  return (
    <>
      <div className="mb-12 mx-auto w-40 h-40 md:w-56 md:h-56 flex items-center bg-gradient-to-b from-teal-500 rounded-full  overflow-hidden">
        <img
          src={avatar}
          alt="dev-ed-wave"
          className="object-cover mx-auto w-3/4 md:w-auto"
        />
      </div>
      <div className="dark:text-white">
        <div className="text-center  mx-auto">
          <h2 className="text-4xl md:text-6xl py-2 text-teal-600 font-bold">
            Eddie Chen
          </h2>
          <h3 className="text-2xl md:text-3xl py-2">
            Hello, I'm an Front-End Engineer based in Taiwan!
          </h3>
          <p className="py-2 mb-6 leading-8 text-gray-800 dark:text-white">
            我是陳義賢，學生時期很喜歡玩無名小站
            <br />
            常常會自己動手改樣式
            <span className=" line-through">(搞破壞)</span>
            ，看到網站變成與眾不同的樣子很有成就感
          </p>
        </div>
        <div className="text-5xl flex justify-center gap-10 py-3">
          <a
            href="https://codepen.io/livehighvu06"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillCodepenCircle />
          </a>
          <a
            href="https://www.linkedin.com/in/chenyixian/"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillLinkedin />
          </a>
          <a
            href="https://github.com/livehighvu06"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillGithub />
          </a>
        </div>
      </div>
    </>
  );
}

export default Hero;
