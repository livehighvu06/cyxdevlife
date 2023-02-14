// import { useContext } from "react";
import { BsCodeSlash } from "react-icons/bs";
import { AiFillLayout } from "react-icons/ai";
// import { ThemeContext } from "./context/ThemeProvider";

import web1 from "./images/web1.png";
import web2 from "./images/web2.png";
import web3 from "./images/web3.png";
import web4 from "./images/web4.png";
import web5 from "./images/web5.png";
import Background from "./components/Background";
import Header from "./components/Header";
import Section from "./components/Section";
import Grid from "./components/Grid";
import GridItem from "./components/GridItem";
import WKX from "./components/WKX";
import Container from "./components/Container";
import Footer from "./components/Footer";

import Hero from "./components/Hero";

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
              過去因家庭因素，工作必須很彈性，鮮少接觸正職工作，而家庭事務告一段落後，2019年因朋友介紹而開始接觸網頁設計，隨後定了轉為前端的職涯方向，一路上跌跌撞撞，利用空閒時間自主學習，遇到難題時轉換不同角度來思考，慢慢解決問題，最後在2020年轉職為前端工程師。
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
            <WKX />
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
                title="寶可夢圖鑑"
                link="https://livehighvu06.github.io/pokedex/"
                list={[
                  "React Component",
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
