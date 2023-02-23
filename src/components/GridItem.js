import React from "react";
import { AiOutlineLink, AiOutlineGithub } from "react-icons/ai";

function GridItem({ children, list, title, link, github, remark }) {
  return (
    <div className="text-center shadow-lg px-5 py-10 md:p-10 rounded-lg mb-10 md:mb-0 bg-slate-50">
      <div className="flex flex-col h-full">
        {children}
        <h4 className="text-lg font-medium pt-8 pb-2">{title}</h4>
        <ul className="flex-1">
          {list.map((item) => (
            <li key={item} className="text-gray-800 py-1">
              {item}
            </li>
          ))}
        </ul>
        {link && (
          <div className="flex items-center mt-6">
            <div className="mr-4">
              <a href={link} target="_blank" rel="noreferrer">
                <AiOutlineLink className="text-3xl" />
              </a>
            </div>

            {github && (
              <div>
                <a href={github} target="_blank" rel="noreferrer">
                  <AiOutlineGithub className="text-3xl" />
                </a>
              </div>
            )}

            <span className="text-sm text-right ml-auto  bg-teal-600 text-white w-fit py-1 px-2 rounded-md font-bold">
              {remark}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default GridItem;
