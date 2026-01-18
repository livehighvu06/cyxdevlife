import { AiOutlineLink, AiOutlineGithub } from "react-icons/ai";
import { GridItemProps } from "../types/components/";

// Image Display Component
function GridItemImage({ src }: { src: string }): JSX.Element {
  return (
    <div className="overflow-hidden rounded-lg mb-4 shadow-sm border border-gray-100 dark:border-dark-light">
      <img
        src={src}
        alt=""
        loading="lazy"
        className="w-full h-auto transform transition-transform duration-500 hover:scale-105"
      />
    </div>
  );
}

// Title Display Component
function GridItemTitle({ title }: { title: string | string[] }): JSX.Element {
  return (
    <h4 className="text-xl font-bold mb-3 text-gray-900 dark:text-gray-100 font-sans tracking-tight">
      {Array.isArray(title)
        ? title.map((t, i) => <span key={`title-${i}`}>{t}</span>)
        : title}
    </h4>
  );
}

// Skill List Display Component
function GridItemList({ list }: { list: string[] }): JSX.Element {
  return (
    <div className="flex-1">
      <ul className="flex items-start flex-wrap gap-2 justify-center">
        {list.map((item, index) => (
          <li
            key={`skill-${index}`}
            className="text-xs font-medium text-teal-dark bg-teal-lighter/30 dark:text-teal-light dark:bg-teal-dark/30 rounded-full px-3 py-1 transition-colors hover:bg-teal-lighter/50 dark:hover:bg-teal-dark/50"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

// Links Display Component
function GridItemLinks({ link, github, remark }: { link?: string, github?: string, remark?: string }): JSX.Element {
  return (
    <div className="flex items-center justify-between border-t border-gray-200 dark:border-dark-light pt-4 mt-6 w-full">
        <div className="flex gap-4">
          {link && (
            <a href={link} target="_blank" rel="noreferrer" className="group">
              <AiOutlineLink className="text-2xl text-teal hover:text-teal-dark dark:text-teal-light dark:hover:text-teal-lighter transition-colors" />
            </a>
          )}
          {github && (
            <a href={github} target="_blank" rel="noreferrer" className="group">
              <AiOutlineGithub className="text-2xl text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors" />
            </a>
          )}
        </div>
      {remark && (
        <span className="text-xs font-bold text-amber-dark bg-amber-light/30 dark:text-amber-light dark:bg-amber-dark/30 py-1 px-3 rounded-md">
          {remark}
        </span>
      )}
    </div>
  );
}

// Main Component
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
    <div className="group perspective-1000 h-full">
      <div className="flex flex-col h-full text-center shadow-lg hover:shadow-2xl transition-all duration-500 px-6 py-8 rounded-xl bg-glass border border-white/20 dark:border-white/5 transform group-hover:-translate-y-2 group-hover:rotate-x-2">
        {Icon && <Icon className="text-5xl mb-4 mx-auto text-teal dark:text-teal-light transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12" />}
        
        <div className="flex flex-col h-full">
          <GridItemTitle title={title} />
          {imgSrc && <GridItemImage src={imgSrc} />}
          <GridItemList list={list} />
          <GridItemLinks link={link} github={github} remark={remark} />
        </div>
      </div>
    </div>
  );
}

export default GridItem;
