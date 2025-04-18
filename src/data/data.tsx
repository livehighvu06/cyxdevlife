// Import images
import web1 from "../images/web1.png";
import web2 from "../images/web2.png";
import web3 from "../images/web3.png";
import web4 from "../images/web4.png";
import web5 from "../images/web5.png";
import web6 from "../images/web6.png";
import web7 from "../images/web7.png";
import web8 from "../images/web8.png";
import web9 from "../images/web9.png";

// Import React icons
import { BsCodeSlash } from "react-icons/bs";
import { AiFillLayout } from "react-icons/ai";

export const bioList: {
  id: number;
  title: string;
  company: string;
  description: string[];
  time: string;
}[] = [
  {
    id: 1,
    title: "前端工程師",
    company: "禾宥有限公司",
    description: [
      "負責部分頁面撰寫、維護，使用Next.js進行開發",
      "多語系部分使用next-i18next",
      "UI使用Tailwind CSS",
      "圖表製作使用React Charts",
    ],
    time: " 2023.03 to 2023.08",
  },
  {
    id: 2,
    title: "前端網頁設計師",
    company: "博設技股份有限公司",
    description: [
      "主要使用HTML、SCSS、JavaScript(或 jQuery)來製作電商活動網頁，部分大型網站則會用BootStrap來進行切版，動畫效果主要為手刻。",
      "協助行銷團隊將部份Routine進行自動化，像是EDM是純HTML撰寫，再放到樂天CMS進行發送，那EDM版面幾乎一樣，當時使用Google Apps Script撰寫自動化工具，行銷團隊只需將資料貼到Google Sheet上，就會自動輸出為HTML檔案，大幅減少他們工作時間。",
      "困擾行銷團隊的還有大量的商品資訊，他們必須在樂天網站上手動整理，為此我學了Python，協助他們快速將所需的資料抓取下來，並匯出excel檔案。",
    ],
    time: " 2020.07 to 2023.02",
  },
];

export const about: {
  title: string;
  content: string;
}[] = [
  {
    title: "動機",
    content:
      "過去因家庭因素暫別職場，而家庭事務告一段落後，2019年因朋友介紹而開始接觸網頁設計，後來發現自己對前端技術充滿熱情，因此選擇轉向前端職業方向。在轉職的過程中，我遇到了各種挑戰，但我堅持不懈，透過自主學習和思考，逐步提升自己的技能和能力。最終在2020年成功轉職成為前端工程師。",
  },
  {
    title: "轉職過後",
    content:
      "而轉職過後迎面而來的是各種挑戰，客戶對於網頁的嚴格要求，讓我在每次製作完成後不斷檢視自己，利用業外之餘不斷學習，研究新技術外，也不斷回頭溫習，期許能成為獨當一面的前端工程師。",
  },
];

export const skill: {
  title: string;
  list: string[];
  icon: React.ElementType | null;
}[] = [
  {
    title: "Web Layout",
    list: [
      "HTML5",
      "CSS3",
      "SCSS/Sass",
      "Tailwind CSS",
      "Bootstrap",
      "Responsive Web Design",
      "CSS Animation",
      "SVG Animation",
    ],
    icon: AiFillLayout,
  },
  {
    title: "Front End",
    list: [
      "React",
      "Zustand",
      "JavaScript ES6",
      "TypeScript",
      "API Integration",
      "jQuery",
      "Next.js",
      "React Query",
      "Web Performance Optimization",
      "Cross-browser Compatibility",
      "SEO Basics",
    ],
    icon: BsCodeSlash,
  },
  {
    title: "Back End",
    list: ["Node.js", "Python"],
    icon: null,
  },
  {
    title: "Others",
    list: [
      "Google Apps Script - 自動化流程",
      "Git",
      "Firebase",
      "Figma / Photoshop",
    ],
    icon: null,
  },
];

export const portfolio: {
  title: string;
  link: string;
  github?: string;
  list: string[];
  remark: string;
  imgSrc: string | null;
}[] = [
  {
    title: "巴哈姆特自動簽到腳本",
    link: "https://github.com/livehighvu06/bahamut_autosignin",
    list: ["JavaScript", "Google Apps Script", "Line Message API"],
    remark: "小工具",
    imgSrc: null,
  },
  {
    title: "Remove Instagram Share ID",
    link: "https://routinehub.co/shortcut/21644/",
    list: ["iOS Shortcut"],
    remark: "小工具",
    imgSrc: null,
  },
  {
    title: "Weather App 簡潔文字版",
    link: "https://livehighvu06.github.io/weather-app/",
    github: "https://github.com/livehighvu06/weather-app/",
    list: ["React", "React Query", "Zustand", " 台灣中央氣象局API串接"],
    remark: "個人練習",
    imgSrc: null,
  },
  {
    title: "HOYOLAB自動簽到腳本",
    link: "",
    github: "https://github.com/livehighvu06/hoyolab_autosignin",
    list: ["JavaScript", "Google Apps Script"],
    remark: "小工具",
    imgSrc: null,
  },
  {
    title: "官方網站",
    link: "https://www.riseofelves.com/zh-TW",
    github: "",
    list: ["Next.js", "Tailwind CSS", "Zustand", "ether.js"],
    remark: "公司專案",
    imgSrc: web9,
  },
  {
    title: "個人網站",
    link: "https://livehighvu06.github.io/cyxdevlife/",
    github: "https://github.com/livehighvu06/cyxdevlife/",
    list: ["React", "Tailwind CSS", "Framer-Motion", "Dark Mode Support"],
    remark: "個人練習",
    imgSrc: web7,
  },
  {
    title: "寶可夢圖鑑",
    link: "https://livehighvu06.github.io/pokedex/",
    github: "https://github.com/livehighvu06/pokedex/",
    list: [
      "React",
      "React Query",
      "react-infinite-scroller",
      "Tailwind CSS",
      "The RESTful Pokémon API",
    ],
    remark: "個人練習",
    imgSrc: web5,
  },
  {
    title: "Movie Finder",
    link: "https://livehighvu06.github.io/movie-finder/",
    github: "https://github.com/livehighvu06/movie-finder/",
    list: ["React", "OMDb API"],
    remark: "個人練習",
    imgSrc: web8,
  },
  {
    title: "ECSHOP",
    link: "https://livehighvu06.github.io/react-ecshop/",
    github: "https://github.com/livehighvu06/react-ecshop",
    list: ["React", "Frame-Motion", "Tailwind CSS", "Fake Store API"],
    remark: "個人練習",
    imgSrc: web6,
  },
  {
    title: "ゲーミングキーボード特集",
    link: "",
    github: "",
    list: ["純手刻RWD Layout", "SVG動畫效果"],
    remark: "公司專案",
    imgSrc: web1,
  },
  {
    title: "スピーカー 特集",
    link: "",
    github: "",
    list: ["純手刻RWD Layout", "CSS動畫效果", "JavaScript手刻Scroll效果"],
    remark: "公司專案",
    imgSrc: web2,
  },
  {
    title: "SDカード 特集",
    link: "",
    github: "",
    list: ["純手刻RWD Layout"],
    remark: "公司專案",
    imgSrc: web3,
  },
  {
    title: "iphone 特集",
    link: "",
    github: "",
    list: ["純手刻RWD Layout"],
    remark: "公司專案",
    imgSrc: web4,
  },
];
