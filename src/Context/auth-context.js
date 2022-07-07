import { createContext, useContext, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
const defaultValue = {
  isLoggedIn: false,
};
const LoginContext = createContext(defaultValue);
const LoginProvider = ({ children }) => {
  const location = useLocation();

  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  function handleLogin() {
    setIsLoggedIn((isLoggedIn) => (isLoggedIn ? false : true));
    const path = location?.state?.from?.pathname;

    navigate(path ? path : "/");
  }
  return (
    <>
      <LoginContext.Provider value={{ isLoggedIn, handleLogin }}>
        {children}
      </LoginContext.Provider>
    </>
  );
};
const useAuth = () => useContext(LoginContext);
export { LoginProvider, useAuth };
