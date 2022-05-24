import { createContext, useContext, useState } from "react";

const defaultProvoderValue = {
  items: 4,
  logger: () => console.log("carting..."),
};
const CartContext = createContext(defaultProvoderValue);
const CartProvider = ({ children }) => {
  const [items, setItems] = useState(5);
  function addToCart() {
    setItems((items) => items + 1);
  }
  return (
    <>
      <CartContext.Provider value={{ items, addToCart }}>
        {children}
      </CartContext.Provider>
    </>
  );
};
const useCart = () => useContext(CartContext);

export { useCart, CartProvider };
