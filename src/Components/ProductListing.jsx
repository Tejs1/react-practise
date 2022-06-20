import { useCart } from "../Context/cart-context";
import { useLocal } from "../Context/localisation-context";
import { useTheme } from "../Context/theme-context";
export function ProductListing() {
  const { addToCart } = useCart();
  const { theme } = useTheme();
  const { lang, Localisation } = useLocal();

  return ["1", "2", "3", "4"].map((item) => (
    <section key={item}>
      <h2>Product {item}</h2>
      <button className={theme} onClick={() => addToCart(item)}>
        {Localisation[lang]["addToCart"]}
      </button>
    </section>
  ));
}
