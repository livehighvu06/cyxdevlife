import React from "react";
import Section from "../components/Section";
import Grid from "../components/Grid";
import GridItem from "../components/GridItem";

import { portfolio } from "../data/data";

interface PortfolioItem {
  title: string;
  link?: string ;
  github?: string ;
  list: string[];
  remark: string;
  imgSrc: string | null;
}

const Portfolio: React.FC = () => {
  return (
    <Section
      custom="dark:bg-slate-800 dark:rounded-md dark:border dark:border-slate-700"
      title="Portfolio"
    >
      <Grid>
        {portfolio.map((item: PortfolioItem, index: number) => (
          <GridItem
            key={index}
            title={item.title}
            link={item.link || ""}
            github={item.github || ""}
            list={item.list}
            remark={item.remark}
            imgSrc={item.imgSrc || ""}
            Icon={undefined} 
          />
        ))}
      </Grid>
    </Section>
  );
}

export default Portfolio;
