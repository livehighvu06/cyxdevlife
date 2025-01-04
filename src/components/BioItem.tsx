import React from "react";
import { BioItemProps } from "../types/components/";

function WKX({ title, company, description, time }: BioItemProps): JSX.Element {
  return (
    <dl className="md:flex gap-5 dark:text-white mb-20">
      <dt className="tracking-wide font-bold whitespace-nowrap mb-4 md:mr-6 md:mb-0 ">
        {time}
      </dt>
      <dd className="w-full">
        <span className="block mb-1 font-bold">{title}</span>
        <span className="block text-sm font-bold border-b border-black pb-2 mb-2 text-right text-gray-500 dark:border-slate-700 dark:text-white">
          {company}
        </span>
        <ol className="leading-7 list-disc pl-4">
          {description.map((des, index) => {
            return <li key={index}>{des}</li>;
          })}
        </ol>
      </dd>
    </dl>
  );
}

export default WKX;
