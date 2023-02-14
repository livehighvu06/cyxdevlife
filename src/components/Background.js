import React from "react";

function Background({ children }) {
  return (
    <body className="bg-primary dark:bg-gray-800 transition">{children}</body>
  );
}

export default Background;
