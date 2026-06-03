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
    </div>
  );
}

export default OrderSummary;
