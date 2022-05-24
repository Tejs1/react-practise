import { useCart } from "./cart-context";
export function ProductListing() {
  const { setItems } = useCart();
  function clickHandler() {
    setItems((items) => items + 1);
  }
  return ["1", "2", "3", "4"].map((item) => (
    <div>
      <h2 key={item}>Product {item}</h2>
      <button onClick={clickHandler}>Add to cart</button>
    </div>
  ));
}
