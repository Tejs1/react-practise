import { useCart } from "../Context/cart-context";
import { useLocal } from "../Context/localisation-context";

export function Cart() {
  const { items } = useCart();
  const { lang, Localisation } = useLocal();

  return (
    <div>
      <h1>
        {Localisation[lang]["items"]} {items}
      </h1>
    </div>
  );
}
