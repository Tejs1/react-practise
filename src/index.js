import { StrictMode } from "react";
import ReactDOM from "react-dom";
import "./style.css";
import { App } from "./App";
import { CartProvider } from "./cart-context";
import { ThemeProvider } from "./theme-context";
const rootElement = document.getElementById("root");

ReactDOM.render(
  <StrictMode>
    <ThemeProvider>
      <CartProvider className="dark">
        <App />
      </CartProvider>
    </ThemeProvider>
  </StrictMode>,
  rootElement
);
