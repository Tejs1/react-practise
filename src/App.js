import { Cart } from "./Cart";
import { ProductListing } from "./ProductListing";
import { useTheme } from "./theme-context";
function App() {
  const { theme } = useTheme();
  return (
    <div className={`app ${theme}`}>
      <h1 className="app-header">eCommerce</h1>
      <div className="app-body">
        <Cart />
        <ProductListing />
      </div>
    </div>
  );
}

export { App };
