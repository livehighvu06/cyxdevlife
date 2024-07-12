import React from "react";
import Section from "../components/Section";
import AboutItem from "../components/AboutItem";

import { about } from "../data/data";

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
export default About;
