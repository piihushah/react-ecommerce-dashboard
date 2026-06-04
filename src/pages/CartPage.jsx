import { Link } from "react-router-dom";
import BackButton from "../components/BackButton";

function CartPage({ cart, removeFromCart, updateQuantity }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto px-6 md:max-w-7xl py-8">
      <BackButton />
      <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>

      {cart.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-lg mb-4">Your cart is empty.</p>

          <Link to="/" className="px-4 py-2 rounded-md bg-(--primary-color) text-white">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <>
          <div className="space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 p-4 rounded-lg border border-(var(--border))"
              >
                <div className="flex items-center gap-4">
                  <img src={item.image} alt={item.name} className="w-15 h-15 object-cover" />
                  <div>
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-sm">Price: ${item.price.toFixed(2)}</p>
                    <p className="text-sm">Subtotal: ${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) => updateQuantity(item.id, Number(e.target.value) || 1)}
                    className="w-20 p-2 border rounded"
                  />

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="px-4 py-2 bg-red-500 text-white rounded-md"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col items-end gap-4">
            <h2 className="text-2xl font-bold">Total: ${total.toFixed(2)}</h2>

            <Link to="/checkout" className="px-6 py-3 rounded-md bg-(--primary-color) text-white">
              Proceed to Checkout
            </Link>
          </div>
        </>
      )}
    </div>
  );
}

export default CartPage;
