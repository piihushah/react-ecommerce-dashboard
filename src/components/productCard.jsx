import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <Link
      to={`/product/${product.id}`}
      className="block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
    >
      <div className="p-4 rounded-lg shadow-md border border-(var(--border))">
        <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-md" />
        <h2 className="text-xl font-bold mt-2 text-(--secondary-color)">{product.name}</h2>
        <p className="text-(--primary-color) font-bold">${product.price.toFixed(2)}</p>
      </div>
    </Link>
  );
}

export default ProductCard;
