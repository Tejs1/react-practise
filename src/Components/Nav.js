import { NavLink } from "react-router-dom";
import { useLogin } from "../Context/auth-context";
import { useLocal } from "../Context/localisation-context";
import { useTheme } from "../Context/theme-context";

export function Nav({ state }) {
  const { login, handleLogin } = useLogin();
  const { theme, changeTheme } = useTheme();
  const { changeLang } = useLocal();

  function getStyle() {
    const active = {
      fontWeight: "bold",
      color: "green",
    };
    const inactive = {
      fontWeight: "bold",
      color: "red",
    };
    return ({ isActive }) => (isActive ? active : inactive);
  }

  return (
    <nav>
      <h1 className="app-header">ECommerce </h1>
      <div>
        <button className={theme}>
          <NavLink to="/" style={getStyle()}>
            STORE
          </NavLink>
        </button>
        <button className={theme}>
          <NavLink to="cart" style={getStyle()}>
            CART
          </NavLink>
        </button>
        <button className={theme}>
          <NavLink to="whishlist" style={getStyle()}>
            Whishlist
          </NavLink>
        </button>
        <button className={theme}>
          <NavLink to="auth" style={getStyle()}>
            AUTH
          </NavLink>
        </button>
        <button>
          <NavLink to="address" style={getStyle()}>
            Address
          </NavLink>
        </button>
        <button onClick={handleLogin}>{login ? "Logout" : "Login"}</button>

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
