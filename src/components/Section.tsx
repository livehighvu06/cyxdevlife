import React from "react";
import { SectionProps } from "../types/components/";

function Section({ children, title, custom }: SectionProps): JSX.Element {
  return (
    <section className={`p-6 md:p-8 mb-12 md:mb-16 w-full max-w-6xl mx-auto ${custom || ""}`}>
      {title && (
        <h3 className="w-fit text-3xl font-bold pb-4 mb-8 border-b-4 border-title dark:text-white dark:border-slate-600">
          {title}
        </h3>
      )}
      {children}
    </section>
  );
}

export default Section;
