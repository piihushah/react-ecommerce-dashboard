import { useState } from "react";
import ProductCard from "./ProductCard";
import productData from "../data/products";
import SearchProduct from "./SearchProduct";

function ProductGrid() {
  const [query, setQuery] = useState("");
  return (
    <div className="md:max-w-7xl mx-auto py-6 md:py-12 px-6 flex flex-col gap-6">
      <SearchProduct query={query} setQuery={setQuery} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {productData
          .filter((product) => product.name.toLowerCase().includes(query.toLowerCase()))
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
}

export default ProductGrid;
