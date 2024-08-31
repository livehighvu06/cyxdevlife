import React from "react";

function Footer(): JSX.Element {
  return (
    <footer className="text-sm text-center text-slate-400">
      &copy; {new Date().getFullYear()} Eddie Chen All rights reserved
    </footer>
  );
}

export default Footer;
