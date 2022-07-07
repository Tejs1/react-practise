import { createContext, useContext, useState } from "react";
const defaultValue = {
  theme: "dark",
};
const ThemeContext = createContext(defaultValue);
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");
  function changeTheme() {
    setTheme((theme) => (theme === "dark" ? "white" : "dark"));
  }
  return (
    <>
      <ThemeContext.Provider value={{ theme, changeTheme }}>
        {children}
      </ThemeContext.Provider>
    </>
  );
};
const useTheme = () => useContext(ThemeContext);
export { ThemeProvider, useTheme };
