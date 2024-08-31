import React, { createContext, useState, useEffect } from "react";
export const ThemeContext = createContext<{ theme: string, setTheme: React.Dispatch<React.SetStateAction<string>>, toggleTheme: () => void }>({ theme: "light", setTheme: () => {}, toggleTheme: () => {} });

const getInitialTheme = () => {
  const storedTheme = window.localStorage.getItem("theme");
  return storedTheme ? storedTheme : "light";
};

function ThemeProvider({ children }: { children: React.ReactNode }): JSX.Element {
  const [theme, setTheme] = useState(getInitialTheme);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  useEffect(() => {
    const root = window.document.documentElement;
    const previousTheme = theme === "dark" ? "light" : "dark";

    root.classList.remove(previousTheme);
    root.classList.add(theme);

    window.localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
