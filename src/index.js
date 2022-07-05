import { StrictMode } from "react";
import ReactDOM from "react-dom";
import "./style.css";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
import { CartProvider } from "./Context/cart-context";
import { ThemeProvider } from "./Context/theme-context";
import { LocalProvider } from "./Context/localisation-context";
import { LoginProvider } from "./Context/auth-context";
const rootElement = document.getElementById("root");

ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <LoginProvider>
        <ThemeProvider>
          <CartProvider className="dark">
            <LocalProvider>
              <App />
            </LocalProvider>
          </CartProvider>
        </ThemeProvider>
      </LoginProvider>
    </BrowserRouter>
  </StrictMode>,
  rootElement
);
