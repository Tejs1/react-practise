import { useCart } from "./cart-context";
import { useTheme } from "./theme-context";
export function Cart() {
  const { items } = useCart();
  const { theme, changeTheme } = useTheme();

  return (
    <div>
      <h1> Items in cart {items}</h1>
      <button className={theme} onClick={changeTheme}>
        Change Theme
      </button>
    </div>
  );
}
