function ProductCard({ product }) {
  return (
    <div className="bg-white text-black p-4 rounded-lg shadow-md">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-md" />
      <h2 className="text-xl font-bold mt-2">{product.name}</h2>
      <p className="text-gray-600">${product.price.toFixed(2)}</p>
    </div>
  );
}

export default ProductCard;
