import React from "react";
import Section from "../components/Section";
import Grid from "../components/Grid";
import GridItem from "../components/GridItem";

import { portfolio } from "../data/data";

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

export default Portfolio;
