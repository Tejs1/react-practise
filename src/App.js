import { Cart } from "./Cart";
import { ProductListing } from "./ProductListing";

function App() {
  return (
    <>
      <h1 className="app-header">eCommerce</h1>
      <div className="app-body">
        <Cart />
        <ProductListing />
      </div>
    </>
  );
}

export { App };
