import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CardForm from './CardForm';


// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51IeCK5GGtTsecmPKA66hxCCC0Q2XXDnXptQGQ5ak5qjGAuxrpzRe4Ra6ocsGTOhfopPP82DKoVTo1Q4nr9hlgj7U009ZPd4dSk');

const PaymentProcess = ({ setPaymentId }) => {
  return (
    <Elements stripe={stripePromise}>
      <CardForm setPaymentId={setPaymentId} />
    </Elements>
  );
};

export default PaymentProcess;