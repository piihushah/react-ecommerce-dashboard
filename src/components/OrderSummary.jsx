function OrderSummary({ cart }) {
  return (
    <div>
      <h1>Order Details:</h1>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} - Quantity: {item.quantity} - Price: ${item.price * item.quantity}
          </li>
        ))}
      </ul>
      <h2>Total Price: ${cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</h2>
      <h4>
        Discount Coupon: <input type="text" placeholder="Enter coupon code" />
      </h4>
    </div>
  );
}

export default OrderSummary;
