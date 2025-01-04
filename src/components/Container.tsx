import React from "react";
import { ContainerProps } from "../types/components/";

function Container({ children }: ContainerProps): JSX.Element {
  return (
    <article className="lg:max-w-3xl mx-auto flex flex-col flex-1">
      {children}
    </article>
  );
}

export default Container;
