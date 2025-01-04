export interface GridItemProps {
  imgSrc?: string;
  list: string[];
  title: string | string[];
  link?: string;
  github?: string;
  remark?: string;
  Icon?: React.ElementType | null;
}