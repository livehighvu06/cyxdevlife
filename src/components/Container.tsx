import React from "react";
import { ContainerProps } from "../types/components/";

function Container({ children, className = "" }: ContainerProps & { className?: string }): JSX.Element {
  return (
    <div className={`w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24 ${className}`}>
      {children}
    </div>
  );
}

export default Container;
