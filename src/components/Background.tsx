import React from "react";
import { BackgroundProps } from "../types/components/";
function Background({ children }: BackgroundProps): JSX.Element {
  return <div className="bg-primary dark:bg-gray-800 transition">{children}</div>;
}

export default Background;
