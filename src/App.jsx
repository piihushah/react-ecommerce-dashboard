import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductGrid from "./components/ProductGrid";
import ProductPage from "./pages/ProductPage";

function App() {
  return (
    <div className="bg-(--background-color) text-(--text-color) min-h-screen">
      <Header />

      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<ProductGrid />} />
          <Route path="/product/:id" element={<ProductPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
