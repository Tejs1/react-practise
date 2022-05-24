import { createContext, useContext, useState } from "react";
const defaultValue = {
  theme: "white",
};
const ThemeContext = createContext(defaultValue);
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("white");
  function changeTheme() {
    setTheme((theme) => (theme === "white" ? "dark" : "white"));
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
