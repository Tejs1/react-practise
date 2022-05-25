import { createContext, useContext, useState } from "react";

const LocalContext = createContext("ENG");

const LocalProvider = ({ children }) => {
  const [lang, setLang] = useState("ENG");

  function changeLang(e) {
    setLang(e.target.value);
  }
  const Localisation = {
    ENG: {
      items: "Items in cart",
      addToCart: "Add To Cart",
    },
    HINDI: {
      items: "कार्ट मधील गोष्टी",
      addToCart: "कार्ट मध्ये टाका",
    },
  };

  return (
    <>
      <LocalContext.Provider value={{ lang, changeLang, Localisation }}>
        {children}
      </LocalContext.Provider>
    </>
  );
};
const useLocal = () => useContext(LocalContext);
export { LocalProvider, useLocal };
