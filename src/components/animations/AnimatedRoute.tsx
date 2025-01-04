import React from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { pageVariants, pageTransition } from "../../animations/animations";
import { AnimatedRouteProps } from "../../types/components";  

const AnimatedRoute = ({ children }: AnimatedRouteProps): JSX.Element => {
  const location = useLocation();
  return (
    <motion.div
      key={location.pathname}
      initial="initial"
      animate="in"
      variants={pageVariants}
      transition={pageTransition}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedRoute;
