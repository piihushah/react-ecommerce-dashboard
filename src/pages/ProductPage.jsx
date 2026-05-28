import productData from "../data/products";
import { useParams } from "react-router";
import { FaArrowLeft, FaShoppingCart } from "react-icons/fa";

function ProductPage() {
  const { id } = useParams();
  var foundProduct = productData.find((product) => product.id === parseInt(id));

  return (
    <div className="container mx-auto px-6 md:max-w-7xl py-8">
      <button
        onClick={() => window.history.back()}
        className="cursor-pointer mb-4 p-2.5 bg-(--primary-color) text-(--surface-color) hover:text-(--primary-color-hover) transition-colors rounded-full shadow-md flex items-center justify-center"
      >
        <FaArrowLeft />
      </button>
      <h1 className="text-3xl font-bold mb-6 text-(--text-color)">Product Details</h1>
      <div className="bg-(var(--background)) p-6 rounded-lg shadow-md border border-(var(--border))">
        <div className="flex flex-col md:flex-row gap-6">
          <img
            src={foundProduct.image}
            alt={foundProduct.name}
            className="w-full md:w-1/2 h-auto object-cover rounded-md"
          />
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold mb-4 text-(--text-color)">{foundProduct.name}</h2>
            <p className="text-(--primary-color) font-bold text-xl mb-4">
              <span className="text-(--text-color) font-bold">Price: </span>${foundProduct.price.toFixed(2)}
            </p>
            <p className="text-(--text-color) mb-4">
              <span className="text-(--text-color) font-bold">Description:</span> {foundProduct.description}
            </p>
            <p className="text-(--text-color) mb-4">
              <span className="text-(--text-color) font-bold">Category:</span> {foundProduct.category}
            </p>
            <p
              className={`font-bold ${foundProduct.stock > 10 ? "text-green-500" : foundProduct.stock > 1 ? "text-yellow-500" : "text-red-500"}`}
            >
              {foundProduct.stock > 10 ? "In Stock" : foundProduct.stock > 1 ? "Low Stock" : "Out of Stock"}
            </p>
            <p className="text-(--text-color) mb-4">
              <span className="text-(--text-color) font-bold">Stock:</span> {foundProduct.stock}
            </p>
            <p className="text-(--text-color) mb-4">
              <span className="text-(--text-color) font-bold">Rating:</span> {foundProduct.rating} ⭐
            </p>
            <button
              className="mt-4 px-4 py-2 bg-(--primary-color) text-(--surface-color) hover:bg-(--secondary-color) transition-colors rounded-md shadow-md cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed  flex items-center"
              disabled={foundProduct.stock === 0}
            >
              <FaShoppingCart className="mr-2" />
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
