import productData from "../data/products";
import { useParams } from "react-router";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import BackButton from "../components/BackButton";
import Button from "../components/Button";

function ProductPage({ addToCart }) {
  const { id } = useParams();
  const foundProduct = productData.find((product) => product.id === Number(id));
  if (!foundProduct) {
    return <p>Product not found.</p>;
  }

  return (
    <>
      <div className="container mx-auto px-6 md:max-w-7xl py-8">
        <BackButton />
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
              <div className="flex items-center gap-4 mt-4">
                <Button
                  variant="primary"
                  disabled={foundProduct.stock === 0}
                  onClick={() => addToCart(foundProduct)}
                  className="flex items-center"
                >
                  <FaShoppingCart className="mr-2" />
                  Add to Cart
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {foundProduct.category && (
        <div className="container mx-auto px-6 md:max-w-7xl py-8">
          <h2 className="text-2xl font-bold mb-4 text-(--text-color)">Related Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {productData
              .filter((product) => product.category === foundProduct.category && product.id !== foundProduct.id)
              .slice(0, 3)
              .map((product) => (
                <Link
                  key={product.id}
                  to={`/product/${product.id}`}
                  className="bg-(var(--background)) p-4 rounded-lg shadow-md border border-(var(--border)) hover:shadow-lg transition-shadow"
                >
                  <img src={product.image} alt={product.name} className="w-full h-auto object-cover rounded-md" />
                  <h3 className="text-lg font-bold mt-4 text-(--text-color)">{product.name}</h3>
                  <p className="text-(--primary-color) font-bold text-xl mt-2">${product.price.toFixed(2)}</p>
                </Link>
              ))}
          </div>
        </div>
      )}
    </>
  );
}

export default ProductPage;
