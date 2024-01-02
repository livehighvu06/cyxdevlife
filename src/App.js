import { BsCodeSlash } from "react-icons/bs";
import { AiFillLayout } from "react-icons/ai";

import web1 from "./images/web1.png";
import web2 from "./images/web2.png";
import web3 from "./images/web3.png";
import web4 from "./images/web4.png";
import web5 from "./images/web5.png";
import web6 from "./images/web6.png";
import web7 from "./images/web7.png";
import web8 from "./images/web8.png";
import web9 from "./images/web9.png";
import Background from "./components/Background";
import Header from "./components/Header";
import Section from "./components/Section";
import Grid from "./components/Grid";
import GridItem from "./components/GridItem";
import WKX from "./components/WKX";
import Container from "./components/Container";
import Footer from "./components/Footer";

import Hero from "./components/Hero";

const bioList = [
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

function App() {
  return (
    <Background>
      <main className="p-5 md:px-20 lg:px-30 ">
        <Header />
        <Container>
          <Section>
            <Hero />
          </Section>
          <Section
            custom={
              "dark:bg-slate-800 dark:rounded-md dark:border dark:border-slate-700"
            }
            title="About"
          >
            <p className="py-2 leading-8 text-gray-800 dark:text-white">
              <span className="block font-bold">【動機】</span>
              過去因家庭因素暫別職場，而家庭事務告一段落後，2019年因朋友介紹而開始接觸網頁設計，後來發現自己對前端技術充滿熱情，因此選擇轉向前端職業方向。在轉職的過程中，我遇到了各種挑戰，但我堅持不懈，透過自主學習和思考，逐步提升自己的技能和能力。最終在2020年成功轉職成為前端工程師。
            </p>
            <p className="py-2 leading-8 text-gray-800 dark:text-white">
              <span className="block font-bold">【轉職過後】</span>
              而轉職過後迎面而來的是各種挑戰，客戶對於網頁的嚴格要求，讓我在每次製作完成後不斷檢視自己，利用業外之餘不斷學習，研究新技術外，也不斷回頭溫習，期許能成為獨當一面的前端工程師。
            </p>
          </Section>
          <Section
            custom={
              "dark:bg-slate-800 dark:rounded-md dark:border dark:border-slate-700"
            }
            title="Bio"
          >
            {bioList.map((bio) => {
              return (
                <WKX
                  key={bio.id}
                  title={bio.title}
                  company={bio.company}
                  description={bio.description}
                  time={bio.time}
                />
              );
            })}
          </Section>
          <Section
            custom={
              "dark:bg-slate-800 dark:rounded-md dark:border dark:border-slate-700"
            }
            title="Skill"
          >
            <Grid>
              <GridItem title="Layout" list={["CSS", "SCSS", "Tailwind CSS"]}>
                <AiFillLayout className="text-5xl mx-auto" />
              </GridItem>
              <GridItem
                title="Frond-End"
                list={[
                  "React",
                  "JavaScript ES6",
                  "串接API",
                  "依需求使用 jQuery",
                ]}
              >
                <BsCodeSlash className="text-5xl mx-auto" />
              </GridItem>
            </Grid>
          </Section>
          <Section
            custom={
              "dark:bg-slate-800 dark:rounded-md dark:border dark:border-slate-700"
            }
            title="Portfolio"
          >
            <Grid>
              <GridItem
                title="官方網站"
                link="https://www.riseofelves.com/zh-TW"
                list={["Next.js", "Tailwind CSS"]}
                remark="公司專案"
              >
                <img src={web9} alt="" />
              </GridItem>
              <GridItem
                title="個人網站"
                link="https://livehighvu06.github.io/cyxdevlife/"
                github="https://github.com/livehighvu06/cyxdevlife/"
                list={["React Component", "Tailwind CSS", "Dark Mode"]}
                remark="個人練習"
              >
                <img src={web7} alt="" />
              </GridItem>
              <GridItem
                title="寶可夢圖鑑"
                link="https://livehighvu06.github.io/pokedex/"
                github="https://github.com/livehighvu06/pokedex/"
                list={[
                  "React Query",
                  "react-infinite-scroller",
                  "Tailwind CSS",
                  "The RESTful Pokémon API",
                ]}
                remark="個人練習"
              >
                <img src={web5} alt="" />
              </GridItem>
              <GridItem
                title="Movie Finder"
                link="https://livehighvu06.github.io/movie-finder/"
                github="https://github.com/livehighvu06/movie-finder/"
                list={["React Component", "Custom Hook", "OMDb API "]}
                remark="個人練習"
              >
                <img src={web8} alt="" />
              </GridItem>
              <GridItem
                title="ECSHOP"
                link="https://livehighvu06.github.io/react-ecshop/"
                github="https://github.com/livehighvu06/react-ecshop"
                list={[
                  "React Component",
                  "Frame-Motion",
                  "Tailwind CSS",
                  "Fake Store API",
                ]}
                remark="個人練習"
              >
                <img src={web6} alt="" />
              </GridItem>
              <GridItem
                title={[
                  "PRINECETON",
                  <br />,
                  "GAMING KEYBOARD ",
                  <br />,
                  "ゲーミングキーボード特集",
                ]}
                link="https://www.rakuten.ne.jp/gold/princeton/gamingkeyboard/"
                list={["純手刻RWD Layout", "SVG動畫效果"]}
                remark="公司專案"
              >
                <img src={web1} alt="" />
              </GridItem>
              <GridItem
                link="https://www.rakuten.ne.jp/gold/princeton/speaker/"
                title={[
                  "PRINECETON",
                  <br />,
                  "SPEAKER",
                  <br />,
                  "スピーカー 特集",
                ]}
                list={[
                  "純手刻RWD Layout",
                  "CSS動畫效果",
                  "JavaScript手刻Scroll效果",
                ]}
                remark="公司專案"
              >
                <img src={web2} alt="" />
              </GridItem>
              <GridItem
                link="https://www.rakuten.ne.jp/gold/princeton/sdcard/"
                title={["PRINECETON", <br />, "SDカード 特集"]}
                list={["純手刻RWD Layout"]}
                remark="公司專案"
              >
                <img src={web3} alt="" />
              </GridItem>
              <GridItem
                title={["PRINECETON", <br />, "iphone 特集"]}
                list={["純手刻RWD Layout"]}
                remark="公司專案"
                link="https://www.rakuten.ne.jp/gold/princeton/iPhone14SeriesCase/"
              >
                <img src={web4} alt="" />
              </GridItem>
            </Grid>
          </Section>
        </Container>
        <Footer />
      </main>
    </Background>
  );
}

export default App;
