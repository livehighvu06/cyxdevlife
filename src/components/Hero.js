import React from "react";

import avatar from "../images/avatar.png";
function Hero() {
  return (
    <>
      <div className="my-6 mx-auto w-40 h-40 md:w-56 md:h-56 flex items-center bg-gradient-to-b from-teal-500 rounded-full  overflow-hidden">
        <img
          src={avatar}
          alt="dev-ed-wave"
          className="object-cover mx-auto w-3/4 md:w-auto"
        />
      </div>
    </>
  );
}

export default Hero;
