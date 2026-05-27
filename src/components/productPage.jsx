import productData from "../data/productData";

function productPage() {
  return (
    <div className="container mx-auto px-6 md:max-w-7xl py-8">
      <h1 className="text-3xl font-bold mb-6 text-(--text-color)">Product Details</h1>
      <div className="bg-(var(--background)) p-6 rounded-lg shadow-md border border-(var(--border))">
        <div className="flex flex-col md:flex-row gap-6">
          <img
            src={productData.image}
            alt={productData.name}
            className="w-full md:w-1/2 h-auto object-cover rounded-md"
          />
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold mb-4 text-(--text-color)">{productData.name}</h2>
            <p className="text-(--primary-color) font-bold text-xl mb-4">${productData.price.toFixed(2)}</p>
            <p className="text-(--text-color) mb-4">{productData.description}</p>
            <p
              className={`font-bold ${productData.status === "Active" ? "text-green-500" : productData.status === "Low Stock" ? "text-yellow-500" : "text-red-500"}`}
            >
              {productData.status}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default productPage;
