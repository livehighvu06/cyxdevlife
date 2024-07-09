import React from "react";
import { AiOutlineLink, AiOutlineGithub } from "react-icons/ai";

// 圖片顯示組件
function GridItemImage({ src }) {
  return <img src={src} alt="" />;
}

// 標題顯示組件
function GridItemTitle({ title }) {
  return (
    <h4 className="text-lg font-medium pt-8 pb-2">
      {Array.isArray(title)
        ? title.map((t, i) => <span key={i}>{t}</span>)
        : title}
    </h4>
  );
}

// 技能列表顯示組件
function GridItemList({ list }) {
  return (
    <ul className="flex-1">
      {list.map((item, index) => (
        <li key={index} className="text-gray-800 py-1">
          {item}
        </li>
      ))}
    </ul>
  );
}

// 連結顯示組件
function GridItemLinks({ link, github, remark }) {
  return (
    <div className="flex items-center mt-6">
      {link && (
        <div className="mr-4">
          <a href={link} target="_blank" rel="noreferrer">
            <AiOutlineLink className="text-3xl" />
          </a>
        </div>
      )}
      {github && (
        <div>
          <a href={github} target="_blank" rel="noreferrer">
            <AiOutlineGithub className="text-3xl" />
          </a>
        </div>
      )}
      {remark && (
        <span className="text-sm text-right ml-auto bg-teal-600 text-white w-fit py-1 px-2 rounded-md font-bold">
          {remark}
        </span>
      )}
    </div>
  );
}

// 主組件
function GridItem({
  children,
  imgSrc,
  list,
  title,
  link,
  github,
  remark,
  icon: Icon,
}) {
  return (
    <div className="text-center shadow-lg px-5 py-10 md:p-10 rounded-lg mb-10 md:mb-0 bg-slate-50">
      {Icon && <Icon className="text-5xl mx-auto" />}
      <div className="flex flex-col h-full">
        <GridItemImage src={imgSrc} />
        <GridItemTitle title={title} />
        <GridItemList list={list} />
        <GridItemLinks link={link} github={github} remark={remark} />
      </div>
    </div>
  );
}

export default GridItem;
