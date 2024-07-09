import React from "react";

function Background({ children }) {
  return (
    <div className="bg-primary dark:bg-gray-800 transition">{children}</div>
  );
}

export default Background;
