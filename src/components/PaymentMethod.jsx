function PaymentMethod() {
  return (
    <div>
      <h1>Payment via Credit Card</h1>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="cardNumber">
            Card Number
          </label>
          <input type="text" id="cardNumber" className="w-full p-2 border rounded" placeholder="1234 5678 9012 3456" />
        </div>

        <div className="flex gap-4">
          <div className="flex-1">
            <label className="block text-sm font-medium mb-1" htmlFor="expiryDate">
              Expiry Date
            </label>
            <input type="text" id="expiryDate" className="w-full p-2 border rounded" placeholder="MM/YY" />
          </div>

          <div className="flex-1">
            <label className="block text-sm font-medium mb-1" htmlFor="cvv">
              CVV
            </label>
            <input type="text" id="cvv" className="w-full p-2 border rounded" placeholder="123" />
          </div>
        </div>

        <button type="submit" className="px-6 py-3 rounded-md bg-(--primary-color) text-white">
          Place Order
        </button>
      </form>
    </div>
  );
}

export default PaymentMethod;
