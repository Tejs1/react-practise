import { NavLink } from "react-router-dom";
import { useLocal } from "../Context/localisation-context";
import { useTheme } from "../Context/theme-context";

export function Nav() {
  const { theme, changeTheme } = useTheme();
  const { changeLang } = useLocal();
  // const active = {
  //   fontWeight: "bold",
  //   color: "red",
  // };

  return (
    <nav>
      <h1 className="app-header">ECommerce </h1>
      <div>
        <button className={theme}>
          <NavLink
            to="/"
            style={(isActive) => ({
              color: isActive ? "white" : "blue",
            })}
          >
            STORE
          </NavLink>
        </button>
        <button className={theme}>
          <NavLink
            to="cart"
            style={(isActive) => ({
              color: isActive ? "green" : "blue",
            })}
          >
            {" "}
            CART
          </NavLink>
        </button>
        <button className={theme}>
          <NavLink
            to="whishlist"
            style={(isActive) => ({
              color: isActive ? "green" : "blue",
            })}
          >
            {" "}
            Whishlist
          </NavLink>
        </button>
        <button className={theme}>
          <NavLink
            to="auth"
            style={(isActive) => ({
              color: isActive ? "green" : "blue",
            })}
          >
            {" "}
            AUTH
          </NavLink>
        </button>
        <button className={theme} onClick={changeLang} value="ENG">
          ENG
        </button>
        <button className={theme} onClick={changeLang} value="HINDI">
          HINDI
        </button>
        <button className={theme} onClick={changeTheme}>
          Change Theme
        </button>
      </div>
    </nav>
  );
}
