import { useCart } from "../Context/cart-context";
export function Cart() {
  const { items } = useCart();

  return (
    <div>
      <h1> Items in cart {items}</h1>
    </div>
  );
}
