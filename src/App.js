import { Route, Routes } from "react-router-dom";
import { Cart } from "./Components/Cart";
import { Nav } from "./Components/Nav";
import { Wishlist } from "./Components/Whishlist";
import { Auth } from "./Components/Auth";
import { ProductListing } from "./Components/ProductListing";
import { Product } from "./Components/Product";
import { useTheme } from "./Context/theme-context";
function App() {
  const { theme } = useTheme();
  return (
    <div className={`app ${theme}`}>
      <div className="app-body">
        <Nav />
        <main>
          <Routes>
            <Route path="/" element={<ProductListing />} />
            <Route path="cart" element={<Cart />} />
            <Route path="whishlist" element={<Wishlist />} />
            <Route path="auth" element={<Auth />} />
            <Route path="product/:id" element={<Product />} />
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
