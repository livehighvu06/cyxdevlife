// Import components
import Background from "./components/Background";
import Header from "./components/Header";
import Section from "./components/Section";
import Grid from "./components/Grid";
import GridItem from "./components/GridItem";
import AboutItem from "./components/AboutItem";
import BioItem from "./components/BioItem";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

// Import bio list data
import { bioList } from "./data/data";
import { about } from "./data/data";
import { skill } from "./data/data";
import { portfolio } from "./data/data";

const Main = () => {
  return (
    <Section>
      <Hero />
    </Section>
  );
};

const About = () => {
  return (
    <Section
      custom="dark:bg-slate-800 dark:rounded-md dark:border dark:border-slate-700"
      title="About"
    >
      {about.map((item, index) => (
        <AboutItem key={index} title={item.title} content={item.content} />
      ))}
    </Section>
  );
};

const Bio = () => {
  return (
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
  );
};

const Skill = () => {
  return (
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
  );
};

const Portfolio = () => {
  return (
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
  );
};

const App = () => (
  <Background>
    <main className="p-5 md:px-20 lg:px-30">
      <Header />
      <Container>
        <Main />
        <About />
        <Bio />
        <Skill />
        <Portfolio />
      </Container>
      <Footer />
    </main>
  </Background>
);

export default App;
