// 為每個頁面元件添加動畫
export const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
};

export const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.7,
};
