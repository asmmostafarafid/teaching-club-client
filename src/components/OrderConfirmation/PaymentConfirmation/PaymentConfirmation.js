import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckOutForm";

const stripePromise = loadStripe(
  "pk_test_51J5Ev4B6APo759sKEpMYbgVwOaay3pPIzeThTzd5SBebWwD4jDcN8J1LFn3PmrD0NYGMArKlaZNNq1GJ0OqLGS6m00LKZtH6f6"
);

const PaymentConfirmation = ({ handlePayment }) => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm handlePayment={handlePayment}></CheckoutForm>
    </Elements>
  );
};

export default PaymentConfirmation;
