import { createContext, useContext, useState } from "react";
const defaultValue = {
  login: false,
};
const LoginContext = createContext(defaultValue);
const LoginProvider = ({ children }) => {
  const [login, setLogin] = useState(false);
  function handleLogin() {
    setLogin((login) => (login ? false : true));
  }
  return (
    <>
      <LoginContext.Provider value={{ login, handleLogin }}>
        {children}
      </LoginContext.Provider>
    </>
  );
};
const useLogin = () => useContext(LoginContext);
export { LoginProvider, useLogin };
