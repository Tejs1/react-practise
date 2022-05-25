import { StrictMode } from "react";
import ReactDOM from "react-dom";
import "./style.css";
import { App } from "./App";
import { CartProvider } from "./Context/cart-context";
import { ThemeProvider } from "./Context/theme-context";
import { LocalProvider } from "./Context/localisation-context";
const rootElement = document.getElementById("root");

ReactDOM.render(
  <StrictMode>
    <ThemeProvider>
      <CartProvider className="dark">
        <LocalProvider>
          <App />
        </LocalProvider>
      </CartProvider>
    </ThemeProvider>
  </StrictMode>,
  rootElement
);
