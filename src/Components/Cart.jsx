import { useCart } from "../Context/cart-context";
import { useLocal } from "../Context/localisation-context";
import { useTheme } from "../Context/theme-context";

export function Cart() {
  const { items, cartItems } = useCart();
  const { lang, Localisation } = useLocal();
  const { theme } = useTheme();

  return (
    <section>
      <h1>
        {Localisation[lang]["items"]} {items}
      </h1>
      <div>
        {cartItems.map((item) => (
          <div key={item}>
            <h2>Product {item}</h2>
            <button className={theme} onClick={() => {}}>
              {Localisation[lang]["addToCart"]}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
