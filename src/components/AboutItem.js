import React from "react";

export default function AboutItem({ index, title, content }) {
  return (
    <p key={index} className="py-2 leading-8 text-gray-800 dark:text-white">
      <span className="block font-bold">【{title}】</span>
      {content}
    </p>
  );
}
