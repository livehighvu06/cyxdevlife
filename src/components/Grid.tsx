import React from "react";
import { GridProps } from "../types/components/";

function Grid({ children }: GridProps): JSX.Element {
  return <div className="md:grid md:grid-cols-2 md:gap-10">{children}</div>;
}

export default Grid;
