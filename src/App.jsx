import Header from "./components/Header.jsx";
import ProductGrid from "./components/ProductGrid.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <div className="bg-(--background-color) text-(--text-color) min-h-screen">
        <Header />
        <div className="min-h-screen">
          <ProductGrid />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
