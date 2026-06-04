function SearchProduct({ query, setQuery }) {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Search Product</h2>
      <input
        type="text"
        placeholder="Search for products..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded-none focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}

export default SearchProduct;
