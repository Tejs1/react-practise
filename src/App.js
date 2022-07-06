import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Cart } from "./Components/Cart";
import { Nav } from "./Components/Nav";
import { Wishlist } from "./Components/Whishlist";
import { Auth } from "./Components/Auth";
import { ProductListing } from "./Components/ProductListing";
import { Product } from "./Components/Product";
import { Address } from "./Components/address";
import { useTheme } from "./Context/theme-context";
import User from "./Components/User";
import RequireAuth from "./Components/RequireAuth";
function App() {
  const { theme } = useTheme();
  return (
    <div className={`app ${theme}`}>
      <div className="app-body">
        <Nav state={useState(false)} />
        <main>
          <Routes>
            <Route path="/" element={<ProductListing />} />
            <Route path="cart" element={<Cart />} />
            <Route path="whishlist" element={<Wishlist />} />
            <Route path="auth" element={<Auth />} />
            <Route path="user" element={<User />} />
            <Route path="product/:id" element={<Product />} />
            <Route path="login" element={<Auth />} />

            <Route
              path="address"
              element={
                <RequireAuth>
                  <Address />{" "}
                </RequireAuth>
              }
            />

            <Route
              path="*"
              element={
                <main style={{ padding: "1rem" }}>
                  <p>There's nothing here!</p>
                </main>
              }
            />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export { App };
//create login use page
//add login page user pager to nav routes
//create input and click handler in loginb page
//if pass? nav : set err(true)
