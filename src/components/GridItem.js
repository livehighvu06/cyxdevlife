import React, { useRef } from "react";

function GridItem({ children, list, title, link, remark }) {
  const targetRef = useRef(null);
  console.log(targetRef.current);
  return (
    <div className="text-center shadow-lg px-5 py-10 md:p-10 rounded-lg mb-10 md:mb-0 bg-slate-50">
      {link ? (
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="flex flex-col h-full"
        >
          {children}
          <h4 className="text-lg font-medium pt-8 pb-2" ref={targetRef}>
            {title}
          </h4>
          <ul className="flex-1">
            {list.map((item) => (
              <li key={item} className="text-gray-800 py-1">
                {item}
              </li>
            ))}
          </ul>
          <span className="text-sm text-right mt-6 bg-teal-600 text-white w-fit ml-auto py-1 px-2 rounded-md font-bold">
            {remark}
          </span>
        </a>
      ) : (
        <>
          {children}
          <h4 className="text-lg font-medium pt-8 pb-2">{title}</h4>
          <ul>
            {list.map((item) => (
              <li key={item} className="text-gray-800 py-1">
                {item}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default GridItem;
