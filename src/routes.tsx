import React, { lazy } from "react";

// Define import functions for preloading
const imports = {
  Home: () => import("./pages/Home"),
  About: () => import("./pages/About"),
  Bio: () => import("./pages/Bio"),
  Skill: () => import("./pages/Skill"),
  Portfolio: () => import("./pages/Portfolio")
};

// Lazy load page components
const Home = lazy(imports.Home);
const About = lazy(imports.About);
const Bio = lazy(imports.Bio);
const Skill = lazy(imports.Skill);
const Portfolio = lazy(imports.Portfolio);

export interface RouteType {
  path: string;
  element: React.LazyExoticComponent<React.ComponentType<any>>;
  preload: () => Promise<any>;
}

export const routes: RouteType[] = [
  { path: "/", element: Home, preload: imports.Home },
  { path: "/about", element: About, preload: imports.About },
  { path: "/bio", element: Bio, preload: imports.Bio },
  { path: "/skill", element: Skill, preload: imports.Skill },
  { path: "/portfolio", element: Portfolio, preload: imports.Portfolio },
];
