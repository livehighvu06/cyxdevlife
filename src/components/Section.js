import React from "react";

function Section({ children, title, custom }) {
  return (
    <section className={`p-5 mb-12 md:mb-20 ${custom || ""}`}>
      {title && (
        <h3 className="w-fit text-3xl font-bold pb-2 mb-6 border-b-4  border-title dark:text-white dark:border-slate-600">
          {title}
        </h3>
      )}
      {children}
    </section>
  );
}

export default Section;
