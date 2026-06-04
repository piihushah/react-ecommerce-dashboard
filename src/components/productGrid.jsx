import { useState } from "react";
import ProductCard from "./ProductCard";
import productData from "../data/products";
import SearchProduct from "./SearchProduct";

function ProductGrid() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  return (
    <div className="md:max-w-7xl mx-auto py-6 flex flex-col gap-6">
      <SearchProduct query={query} setQuery={setQuery} category={category} setCategory={setCategory} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-h-55vh overflow-y-scroll scrollbar-thin scrollbar-thumb-(var(--primary-color)) scrollbar-track-(var(--background-color)) px-6 md:px-8">
        {productData
          .filter((product) => {
            const matchesQuery = product.name.toLowerCase().includes(query.toLowerCase());
            const matchesCategory = category === "all" || product.category === category;
            return matchesQuery && matchesCategory;
          })
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
}

export default ProductGrid;
