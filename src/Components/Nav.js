import { Link } from "react-router-dom";
import { useLocal } from "../Context/localisation-context";
import { useTheme } from "../Context/theme-context";

export function Nav() {
  const { theme, changeTheme } = useTheme();
  const { changeLang } = useLocal();

  return (
    <nav>
      <h1 className="app-header">ECommerce </h1>
      <div>
        <button className={theme}>
          <Link to="/">STORE</Link>
        </button>
        <button className={theme}>
          <Link to="cart"> CART</Link>
        </button>
        <button className={theme}>
          <Link to="whishlist"> Whishlist</Link>
        </button>
        <button className={theme}>
          <Link to="auth"> AUTH</Link>
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
