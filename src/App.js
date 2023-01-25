import { BsSun, BsFillMoonStarsFill, BsCodeSlash } from "react-icons/bs";
import {
  AiFillCodepenCircle,
  AiFillLinkedin,
  AiFillGithub,
  AiFillLayout,
} from "react-icons/ai";
import avatar from "./images/avatar.png";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="bg-primary p-5 md:px-20 lg:px-30 dark:bg-gray-900 transition">
        <header>
          <nav className="max-w-3xl mx-auto p-2 md:p-5 mb-12 flex justify-between items-center rounded-md dark:bg-slate-800">
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
              <li>
                <a
                  href="https://www.yourator.co/r/95f2cf1d-993a-4756-a1b0-22c8b40619fa"
                  target="_blank"
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-bold px-4 py-2 rounded-md"
                  rel="noreferrer"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
        </header>
        <article className="lg:max-w-3xl mx-auto">
          <section className="mb-12">
            <div className="flex items-center bg-gradient-to-b from-teal-500 rounded-full w-56 h-56 mx-auto overflow-hidden mb-12">
              <img
                src={avatar}
                alt="dev-ed-wave"
                className="object-cover mx-auto"
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
          </section>
          <section className="p-5 mb-12 md:mb-20 dark:bg-slate-800 dark:rounded-md dark:border dark:border-slate-700">
            <div>
              <h3 className="w-fit text-3xl font-bold pb-2 mb-6 border-b-4  border-title dark:text-white dark:border-slate-600">
                About
              </h3>

              <p className="py-2 leading-8 text-gray-800 dark:text-white">
                <span className="block font-bold">【動機】</span>
                過去因家庭因素，工作必須很彈性，鮮少接觸正職工作，而家庭事務告一段落後，2019年因朋友介紹而開始接觸網頁設計，隨後定了轉為前端的職涯方向，一路上跌跌撞撞，利用空閒時間自主學習，遇到難題時轉換不同角度來思考，慢慢解決問題，最後在2020年轉職為前端工程師。
              </p>
              <p className="py-2 leading-8 text-gray-800 dark:text-white">
                <span className="block font-bold">【轉職過後】</span>
                而轉職過後迎面而來的是各種挑戰，客戶對於網頁的嚴格要求，讓我在每次製作完成後不斷檢視自己，利用業外之餘不斷學習，研究新技術外，也不斷回頭溫習，期許能成為獨當一面的前端工程師。
              </p>
            </div>
          </section>
          <section className="p-5 mb-12 md:mb-20 dark:bg-slate-800 dark:rounded-md dark:border dark:border-slate-700">
            <h3 className="w-fit text-3xl font-bold pb-2 mb-6 border-b-4 border-title dark:text-white dark:border-slate-600">
              Skill
            </h3>
            <div className="lg:flex gap-10 justify-center">
              <div className="text-center shadow-lg p-10 rounded-xl mb-10 md:mb-0 lg:basis-1/2 bg-slate-50">
                <AiFillLayout className="text-5xl mx-auto" />
                <h4 className="text-lg font-medium pt-8 pb-2">Layout</h4>
                <ul>
                  <li className="text-gray-800 py-1">純手刻RWD Layout</li>
                  <li className="text-gray-800 py-1">SCSS輔助切版</li>
                  <li className="text-gray-800 py-1">
                    Tailwind CSS 製作RWD頁面
                  </li>
                  <li className="text-gray-800 py-1">
                    依PSD進行網頁切版 / 製作動畫效果
                  </li>
                </ul>
              </div>
              <div className="text-center shadow-lg p-10 rounded-xl mb-10 md:mb-0 lg:basis-1/2 bg-slate-50">
                <BsCodeSlash className="text-5xl mx-auto" />
                <h4 className="text-lg font-medium pt-8 pb-2">Frond-End</h4>
                <ul>
                  <li className="text-gray-800 py-1">React</li>
                  <li className="text-gray-800 py-1">React Redux </li>
                  <li className="text-gray-800 py-1">JavaScript ES6</li>
                  <li className="text-gray-800 py-1">
                    串接API ( 比較常用 Fetch）
                  </li>
                  <li className="text-gray-800 py-1">依需求使用 jQuery</li>
                </ul>
              </div>
            </div>
          </section>
          <section className="p-5 mb-12 md:mb-20 dark:bg-slate-800 dark:rounded-md dark:border dark:border-slate-700">
            <h3 className="w-fit text-3xl font-bold pb-2 mb-6 border-b-4 border-title dark:text-white dark:border-slate-600">
              Portfolio
            </h3>
            <div className="md:flex gap-10 justify-center">
              <div className="text-center shadow-lg p-10 rounded-xl mb-10 md:mb-0 md:basis-1/2 bg-slate-50">
                <AiFillLayout className="text-5xl mx-auto" />
                <h4 className="text-lg font-medium pt-8 pb-2">Layout</h4>
                <ul>
                  <li className="text-gray-800 py-1">純手刻RWD Layout</li>
                  <li className="text-gray-800 py-1">SCSS輔助切版</li>
                  <li className="text-gray-800 py-1">
                    Tailwind CSS 製作RWD頁面
                  </li>
                  <li className="text-gray-800 py-1">
                    依PSD進行網頁切版 / 製作動畫效果
                  </li>
                </ul>
              </div>
              <div className="text-center shadow-lg p-10 rounded-xl mb-10 md:mb-0 md:basis-1/2 bg-slate-50">
                <BsCodeSlash className="text-5xl mx-auto" />
                <h4 className="text-lg font-medium pt-8 pb-2">Frond-End</h4>
                <ul>
                  <li className="text-gray-800 py-1">React</li>
                  <li className="text-gray-800 py-1">React Redux </li>
                  <li className="text-gray-800 py-1">JavaScript ES6</li>
                  <li className="text-gray-800 py-1">
                    串接API ( 比較常用 Fetch）
                  </li>
                  <li className="text-gray-800 py-1">依需求使用 jQuery</li>
                </ul>
              </div>
            </div>
          </section>
        </article>
        <footer className="text-center text-slate-400">
          &copy;{new Date().getFullYear()} Eddie Chen All rights reserved
        </footer>
      </main>
    </div>
  );
}

export default App;
