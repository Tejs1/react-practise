import { Cart } from "./Components/Cart";
import { Nav } from "./Components/Nav";
import { ProductListing } from "./Components/ProductListing";
import { useTheme } from "./Context/theme-context";
function App() {
  const { theme } = useTheme();
  return (
    <div className={`app ${theme}`}>
      <div className="app-body">
        <nav>
          <Nav />
        </nav>
        <main>
          <section>
            <ProductListing />
          </section>
          <section>
            <Cart />
          </section>
        </main>
      </div>
    </div>
  );
}

export { App };
