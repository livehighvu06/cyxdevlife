import React from "react";

function Section({ children, title, custom }: { children: React.ReactNode, title: string, custom?: string }): JSX.Element {
  return (
    <section className={`p-6 md:p-8 mb-12 md:mb-16 ${custom || ""}`}>
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
