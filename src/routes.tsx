import React, { lazy } from "react";

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
  { path: "/", element: Home },
  { path: "/about", element: About },
  { path: "/bio", element: Bio },
  { path: "/skill", element: Skill },
  { path: "/portfolio", element: Portfolio },
];
