import Header from "./components/Header.jsx";
import ProductGrid from "./components/ProductGrid.jsx";

function App() {
  return (
    <>
      <Header />
      <div className="min-h-screen">
        <ProductGrid />
      </div>
    </>
  );
}

export default App;
