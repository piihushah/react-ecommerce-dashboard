import productData from "../data/products";
import Button from "./Button";

function SearchProduct({ query, setQuery, category, setCategory }) {
  return (
    <div className="flex flex-col md:flex-row gap-6 items-center justify-between w-full">
      <div className="p-4 w-full">
        <h2 className="text-2xl font-semibold mb-4">Search Product:</h2>
        <input
          type="text"
          placeholder="Search for products..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-none focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="p-4 w-full">
        <h2 className="text-2xl font-semibold mb-4">Filter by Category:</h2>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-none focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="all">All Categories</option>
          {Array.from(new Set(productData.map((product) => product.category))).map((cat) => (
            <option key={cat} value={cat} className="capitalize bg-(var(--background-color)) text-(var(--text-color))">
              {cat}
            </option>
          ))}
        </select>
      </div>
      <div className="w-full mt-10!">
        <Button
          variant="secondary"
          onClick={() => {
            setQuery("");
            setCategory("all");
          }}
        >
          Clear Filters
        </Button>
      </div>
    </div>
  );
}

export default SearchProduct;
