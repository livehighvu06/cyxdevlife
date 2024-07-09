// Import components
import Background from "./components/Background";
import Header from "./components/Header";
import Section from "./components/Section";
import Grid from "./components/Grid";
import GridItem from "./components/GridItem";
import BioItem from "./components/BioIem";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

// Import bio list data
import { bioList } from "./data/data";
import { about } from "./data/data";
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
          {about.map((item, index) => (
            <p
              key={index}
              className="py-2 leading-8 text-gray-800 dark:text-white"
            >
              <span className="block font-bold">【{item.title}】</span>
              {item.content}
            </p>
          ))}
        </Section>
        <Section
          custom="dark:bg-slate-800 dark:rounded-md dark:border dark:border-slate-700"
          title="Bio"
        >
          {bioList.map((bio) => (
            <BioItem
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
