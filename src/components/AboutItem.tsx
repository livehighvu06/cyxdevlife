import React from "react";

export interface AboutItemProps {
  index: number;
  title: string;
  content: string;
}

export default function AboutItem({ index, title, content }: AboutItemProps): JSX.Element {
  return (
    <p key={index} className="py-2 leading-8 text-gray-800 dark:text-white">
      <span className="block font-bold">【{title}】</span>
      {content}
    </p>
  );
}
