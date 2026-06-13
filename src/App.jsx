import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductGrid from "./components/ProductGrid";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  function addToCart(product) {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);

      if (existingProduct) {
        return prevCart.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item));
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  }

  function removeFromCart(productId) {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  }

  function updateQuantity(productId, quantity) {
    setCart((prevCart) =>
      prevCart.map((item) => (item.id === productId ? { ...item, quantity: Math.max(1, quantity) } : item)),
    );
  }

  return (
    <div className="bg-(--background-color) text-(--text-color) min-h-screen">
      <Header cart={cart} />
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<ProductGrid />} />
          <Route path="/product/:id" element={<ProductPage cart={cart} addToCart={addToCart} />} />
          <Route
            path="/cart"
            element={<CartPage cart={cart} removeFromCart={removeFromCart} updateQuantity={updateQuantity} />}
          />
          <Route path="/checkout" element={<CheckoutPage cart={cart} />} />
        </Routes>
      </main>
      <Footer />
      <div className="fixed bottom-1/2 right-3 p-1.5 bg-(--primary-color) text-(--muted-color) rounded-none shadow-lg">
        <ThemeToggle />
      </div>
    </div>
  );
}

export default App;
