import { useCart } from "../Context/cart-context";
import { useTheme } from "../Context/theme-context";
export function ProductListing() {
  const { addToCart } = useCart();
  const { theme } = useTheme();
  console.log(theme);

  return ["1", "2", "3", "4"].map((item) => (
    <div key={item}>
      <h2>Product {item}</h2>
      <button className={theme} onClick={addToCart}>
        Add to cart
      </button>
    </div>
  ));
}
