import React from "react";

function Container({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <article className="lg:max-w-3xl mx-auto flex flex-col flex-1">
      {children}
    </article>
  );
}

export default Container;
