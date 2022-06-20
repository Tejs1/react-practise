import { createContext, useContext, useState } from "react";

const defaultProvoderValue = {
  items: 4,
  logger: () => console.log("carting..."),
};
const CartContext = createContext(defaultProvoderValue);
const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(["1", "2"]);

  function addToCart(item) {
    // console.log(item);
    setCartItems((cartItems) => [...cartItems, item]);
  }
  return (
    <>
      <CartContext.Provider value={{ addToCart, cartItems }}>
        {children}
      </CartContext.Provider>
    </>
  );
};
const useCart = () => useContext(CartContext);

export { useCart, CartProvider };
