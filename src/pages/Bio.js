import React from "react";
import Section from "../components/Section";
import BioItem from "../components/BioItem";

import { bioList } from "../data/data";

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

export default Bio;
