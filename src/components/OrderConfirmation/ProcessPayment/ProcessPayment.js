import React from "react";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import SimpleCardForm1 from "./SimpleCardForm1";
import SimpleCardForm from "./SimpleCardForm";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  "pk_test_51Ie1RRGHr4odbP2lkG25yrIYzXIPn9WsJUZO3QYp24VMxf1koKj37L5rh6rtPBtFcvtMcf1Wqn8chKsUXwhj7H5500o8TD7MuP"
);
const ProcessPayment = () => {
  return (
    <div>
      <Elements stripe={stripePromise}>
        <SimpleCardForm></SimpleCardForm>
      </Elements>
    </div>
  );
};

export default ProcessPayment;
