import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";

function Header({ cart }) {
  return (
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
  );
}

export default Header;
