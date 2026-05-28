import ProductCard from "./ProductCard";
import productData from "../data/products";

function ProductGrid() {
  return (
    <div className="md:max-w-7xl mx-auto py-6 md:py-12 px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {productData.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductGrid;
