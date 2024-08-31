import React from "react";

function Grid({ children }: { children: React.ReactNode }) {
  return <div className="md:grid md:grid-cols-2 md:gap-10">{children}</div>;
}

export default Grid;
