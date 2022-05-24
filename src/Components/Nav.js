import { useTheme } from "../Context/theme-context";

export function Nav() {
  const { theme, changeTheme } = useTheme();
  return (
    <nav>
      <h1 className="app-header">eCommerce</h1>
      <button className={theme} onClick={changeTheme}>
        Change Theme
      </button>
    </nav>
  );
}
