import { useState, ChangeEvent, FormEvent } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { BUTTON_TYPE_CLASSES } from '../button/button.component';
import {
  PaymentButton,
  PaymentFormContainer,
  FormContainer,
} from './payment-form.styles';

import { selectCurrentUser } from '../../store/user/user.selector';
import { selectCartTotal } from '../../store/cart/cart.selector';
import { useSelector } from 'react-redux';

export const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const amount = useSelector(selectCartTotal);
  const currentUser = useSelector(selectCurrentUser);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  const paymentHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    setIsProcessingPayment(true);

    const response = await fetch('/.netlify/functions/create-payment-intent', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount: amount }),
    }).then((res) => {
      return res.json();
    });
    const client_secret = response.paymentIntent.client_secret;

    const cardDetails = elements.getElement(CardElement);

    if (cardDetails === null) return;

    const paymentResult = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: cardDetails,
        billing_details: {
          name: currentUser ? currentUser.displayName : 'Guest',
        },
      },
    });

    setIsProcessingPayment(false);

    if (paymentResult.error) {
      alert(paymentResult.error);
    } else {
      if (paymentResult.paymentIntent.status === 'succeeded') {
        alert('Payment Successful');
      }
    }
  };

  return (
    <PaymentFormContainer>
      <FormContainer onSubmit={paymentHandler}>
        <h2>Credit Card Payment:</h2>
        <CardElement />
        <PaymentButton
          isLoading={isProcessingPayment}
          buttonType={BUTTON_TYPE_CLASSES.inverted}
        >
          Pay Now
        </PaymentButton>
      </FormContainer>
    </PaymentFormContainer>
  );
};
