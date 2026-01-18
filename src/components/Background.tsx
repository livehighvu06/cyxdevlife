import React from "react";
import { BackgroundProps } from "../types/components/";

function Background({ children }: BackgroundProps): JSX.Element {
  return (
    <div className="relative min-h-screen width-full overflow-hidden bg-primary-light dark:bg-dark transition-colors duration-500">
      {/* Animated Mesh Gradient Background - Muted/Soft for non-distraction */}
      <div className="absolute inset-0 z-0 opacity-40 dark:opacity-20 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-teal-lighter mix-blend-multiply filter blur-[80px] animate-gradient-xy opacity-70"></div>
          <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-amber-light mix-blend-multiply filter blur-[80px] animate-gradient-y opacity-70 animation-delay-2000"></div>
          <div className="absolute bottom-[-20%] left-[20%] w-[50%] h-[50%] rounded-full bg-accent-rose/30 mix-blend-multiply filter blur-[80px] animate-gradient-x opacity-70 animation-delay-4000"></div>
      </div>
      
      {/* Content Layer */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {children}
      </div>
    </div>
  );
}

export default Background;
