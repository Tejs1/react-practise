import { createContext, useContext } from "react";
import { useState } from "react";
const defaultProvoderValue = {
  items: 4,
  logger: () => console.log("carting..."),
};
const CartContext = createContext(defaultProvoderValue);
const CartProvider = ({ children }) => {
  const [items, setItems] = useState(5);
  return (
    <>
      <CartContext.Provider value={{ items, setItems }}>
        {children}
      </CartContext.Provider>
    </>
  );
};
const useCart = () => useContext(CartContext);

export { useCart, CartProvider };
