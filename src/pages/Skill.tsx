import React from "react";
import Section from "../components/Section";
import Grid from "../components/Grid";
import GridItem from "../components/GridItem";

import { skill } from "../data/data";
import { SkillItemType } from "../types";

const Skill: React.FC = () => {
  return (
    <Section
      custom="dark:bg-slate-800 dark:rounded-md dark:border dark:border-slate-700"
      title="Skill"
    >
      <Grid>
        {skill.map((item: SkillItemType, index: number) => (
          <GridItem
            key={index}
            title={item.title}
            list={item.list}
            Icon={item.icon} 
          />
        ))}
      </Grid>
    </Section>
  );
};

export default Skill;
