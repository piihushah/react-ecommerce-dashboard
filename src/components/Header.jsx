import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";

function Header({ cart }) {
  return (
    <>
      <header className="py-4 border-b border-(var(--border))">
        <div className="container mx-auto flex items-center justify-between px-6 md:max-w-7xl">
          <Link to="/" className="text-xl font-semibold text-(--primary-color)">
            E-commerce
          </Link>

          <div className="flex items-center gap-4">
            <ThemeToggle />

            <Link to="/cart" className="text-(--text-color)">
              <div className="flex items-center gap-1.5">
                <FaShoppingCart /> ({cart.length})
              </div>
            </Link>
          </div>
        </div>
      </header>
      <div className="bg-(--background-color) text-(--text-color) py-4">
        <div className="container md:max-w-7xl mx-auto px-6 flex items-left flex-col gap-2">
          <h1 className="text-3xl font-bold">Welcome to Our Store!</h1>
          <h2 className="text-xl">Find the best products at unbeatable prices.</h2>
        </div>
        {/* <div className="container md:max-w-7xl mx-auto px-6 flex items-center gap-2">
          <p>Total Products: {cart.reduce((total, item) => total + item.quantity, 0)}</p>
          <p>Total In Stock: {cart.reduce((total, item) => total + item.stock, 0)}</p>
          <p>Low Stock Items: {cart.filter((item) => item.stock < 5).length}</p>
          <p>Out of Stock Items: {cart.filter((item) => item.stock === 0).length}</p>
        </div> */}
      </div>
    </>
  );
}

export default Header;
