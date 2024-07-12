import React from "react";
import Section from "../components/Section";
import Grid from "../components/Grid";
import GridItem from "../components/GridItem";

import { skill } from "../data/data";

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

export default Skill;
