import React from "react";
import { AiOutlineLink, AiOutlineGithub } from "react-icons/ai";
import { GridItemProps } from "../types/components/";
// 圖片顯示組件
function GridItemImage({ src }: { src: string }): JSX.Element {
  return <img src={src} alt="" className="rounded-lg mb-4" />;
}

// 標題顯示組件
function GridItemTitle({ title }: { title: string | string[] }): JSX.Element {
  return (
    <h4 className="text-xl font-bold mb-4">
      {Array.isArray(title)
        ? title.map((t, i) => <span key={i}>{t}</span>)
        : title}
    </h4>
  );
}

// 技能列表顯示組件
function GridItemList({ list }: { list: string[] }): JSX.Element {
  return (
    <div className="flex-1">
      <ul className="flex items-start flex-wrap md:gap-2">
        {list.map((item, index) => (
          <li
            key={index}
            className={`text-sm text-left flex-none ${
              index !== list.length - 1 && "mb-2 mr-2"
            } md:m-0 text-gray-800 bg-gray-200 rounded-md px-2 py-1`}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

// 連結顯示組件
function GridItemLinks({ link, github, remark }: { link?: string, github?: string, remark?: string }): JSX.Element {
  return (
    <div className="flex border-0 border-t-2 pt-4 mt-4 w-full">
      {link && (
        <div className="mr-4">
          <a href={link} target="_blank" rel="noreferrer">
            <AiOutlineLink className="text-2xl text-blue-500 hover:text-blue-700" />
          </a>
        </div>
      )}
      {github && (
        <div className="mr-4">
          <a href={github} target="_blank" rel="noreferrer">
            <AiOutlineGithub className="text-2xl text-gray-600 hover:text-gray-800" />
          </a>
        </div>
      )}
      {remark && (
        <span className="text-sm bg-teal-600 text-white ml-auto py-1 px-2 rounded-md font-bold">
          {remark}
        </span>
      )}
    </div>
  );
}

// 主組件
function GridItem({
  imgSrc,
  list,
  title,
  link,
  github,
  remark,
  Icon,
}: GridItemProps): JSX.Element {
  return (
    <div className="text-center shadow-lg px-5 py-10 md:p-8 rounded-lg mb-10 md:mb-0 bg-slate-50">
      {Icon && <Icon className="text-5xl mb-4 mx-auto" />}
      <div className="flex flex-col h-full">
        <GridItemTitle title={title} />
        {imgSrc && <GridItemImage src={imgSrc} />}
        <GridItemList list={list} />
        <GridItemLinks link={link} github={github} remark={remark} />
      </div>
    </div>
  );
}

export default GridItem;
