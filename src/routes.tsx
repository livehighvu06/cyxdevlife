import React, { lazy, ReactNode } from "react";

// Lazy load page components
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Bio = lazy(() => import("./pages/Bio"));
const Skill = lazy(() => import("./pages/Skill"));
const Portfolio = lazy(() => import("./pages/Portfolio"));

export interface RouteType {
  path: string;
  element: React.LazyExoticComponent<React.ComponentType<any>>;
}

export const routes: RouteType[] = [
  { path: "/cyxdevlife", element: Home },
  { path: "/cyxdevlife/about", element: About },
  { path: "/cyxdevlife/bio", element: Bio },
  { path: "/cyxdevlife/skill", element: Skill },
  { path: "/cyxdevlife/portfolio", element: Portfolio },
];