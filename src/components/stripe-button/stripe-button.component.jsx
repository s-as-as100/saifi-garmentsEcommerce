import React from 'react'
import StripeChechkout from 'react-stripe-checkout';

const StripeChechkoutButton  = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51IQR4QLHmmyK9MKateyVuGoEb5UsFoCCdWWdRvSEGyzzDeo3UUm8QfSzhYrqrmumrWpNUaad2ybW6dXsyqSj7h3y002HV6reto';

     const onToken = token => {
        console.log(token);
        alert('Payment Succesful')
    }

 return (
     <StripeChechkout
      label= 'Pay Now'
      name = 'Saifi Clothings Ltd.'
      billingAdddress
      shippingAddress
      image
      description = {`Your total is $${price}`}
      amount= {priceForStripe}
     panelLabel= 'Pay Now'
     token = {onToken}
     stripeKey = {publishableKey}
     />

 )


}

export default StripeChechkoutButton;