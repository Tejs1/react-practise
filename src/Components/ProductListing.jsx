import { Link } from "react-router-dom";
import { useCart } from "../Context/cart-context";
import { useLocal } from "../Context/localisation-context";
import { useTheme } from "../Context/theme-context";
import { data } from "../data/data";
export function ProductListing() {
  const list = data.data;

  const { addToCart } = useCart();
  const { theme } = useTheme();
  const { lang, Localisation } = useLocal();

  return list.map(({ id, name, price }) => (
    <section key={id}>
      <h3> {name}</h3>
      <h3>price : {price}</h3>
      <button className={theme} onClick={() => addToCart(name)}>
        {Localisation[lang]["addToCart"]}
      </button>
      <Link to={`product/${id}`}>
        <button>Details</button>
      </Link>
    </section>
  ));
}
