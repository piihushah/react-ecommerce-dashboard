import PaymentMethod from "../components/PaymentMethod";
import OrderSummary from "../components/OrderSummary";
import BackButton from "../components/BackButton";

function CheckoutPage({ cart }) {
  return (
    <div className="container mx-auto px-6 md:max-w-7xl py-8">
      <BackButton />
      <h2 className="text-2xl font-semibold mb-4">Checkout</h2>
      <div className="mt-8">
        <h3 className="text-xl font-medium mb-4">Payment Information</h3>
        <PaymentMethod />
      </div>
      <div className="mt-8">
        <h3 className="text-xl font-medium mb-4">Order Summary</h3>
        <OrderSummary cart={cart} />
      </div>
    </div>
  );
}

export default CheckoutPage;
