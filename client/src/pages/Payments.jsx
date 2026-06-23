import { useState } from "react";

function Payment() {
  const [paid, setPaid] = useState(false);

  const handlePayment = () => {
    setTimeout(() => {
      setPaid(true);
    }, 1500);
  };

  return (
    <div>
      <h2>Course Price: ₹499</h2>

      {!paid ? (
        <>
          <input
            type="text"
            placeholder="Card Number"
          />
          <br />

          <input
            type="text"
            placeholder="MM/YY"
          />
          <br />

          <input
            type="password"
            placeholder="CVV"
          />
          <br />

          <button onClick={handlePayment}>
            Pay Now
          </button>
        </>
      ) : (
        <h3>✅ Payment Successful</h3>
      )}
    </div>
  );
}

export default Payment;