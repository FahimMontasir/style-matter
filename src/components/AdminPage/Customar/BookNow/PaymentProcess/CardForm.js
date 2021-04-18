import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import Button from '@material-ui/core/Button'

const CardForm = ({ setPaymentId }) => {
  const [paymentError, setPaymentError] = useState(null)
  const [paymentSuccess, setPaymentSuccess] = useState(null)
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      setPaymentError(error.message)
      setPaymentSuccess(null)
    } else {
      setPaymentSuccess(paymentMethod)
      setPaymentError(null)
      setPaymentId(paymentMethod.id)
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement />
        <br />
        <Button variant="contained" color="secondary" type="submit" disabled={!stripe}>
          Pay
        </Button>
        {
          paymentError && <h3 style={{ textAlign: "center", color: "red" }}>{paymentError}</h3>
        }
        {
          paymentSuccess && <h3 style={{ textAlign: "center", color: "green" }}>payment was successful</h3>
        }
      </form>
    </div>
  );
};
export default CardForm;