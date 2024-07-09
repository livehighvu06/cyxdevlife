// Import components
import Background from "./components/Background";
import Header from "./components/Header";
import Section from "./components/Section";
import Grid from "./components/Grid";
import GridItem from "./components/GridItem";
import WKX from "./components/WKX";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

// Import bio list data
import { bioList } from "./data/data";
import { skill } from "./data/data";
import { portfolio } from "./data/data";

const App = () => (
  <Background>
    <main className="p-5 md:px-20 lg:px-30">
      <Header />
      <Container>
        <Section>
          <Hero />
        </Section>
        <Section
          custom="dark:bg-slate-800 dark:rounded-md dark:border dark:border-slate-700"
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
          custom="dark:bg-slate-800 dark:rounded-md dark:border dark:border-slate-700"
          title="Bio"
        >
          {bioList.map((bio) => (
            <WKX
              key={bio.id}
              title={bio.title}
              company={bio.company}
              description={bio.description}
              time={bio.time}
            />
          ))}
        </Section>
        <Section
          custom="dark:bg-slate-800 dark:rounded-md dark:border dark:border-slate-700"
          title="Skill"
        >
          <Grid>
            {skill.map((item, index) => (
              <GridItem
                key={index}
                title={item.title}
                list={item.list}
                icon={item.icon}
              />
            ))}
          </Grid>
        </Section>
        <Section
          custom="dark:bg-slate-800 dark:rounded-md dark:border dark:border-slate-700"
          title="Portfolio"
        >
          <Grid>
            {portfolio.map((item, index) => (
              <GridItem
                key={index}
                title={item.title}
                link={item.link}
                github={item.github}
                list={item.list}
                remark={item.remark}
                imgSrc={item.imgSrc}
              />
            ))}
          </Grid>
        </Section>
      </Container>
      <Footer />
    </main>
  </Background>
);

export default App;
