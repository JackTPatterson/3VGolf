import { loadStripe } from "@stripe/stripe-js";
import '.env';
export async function checkout({lineItems}, origin){
  let stripePromise = null

  const getStripe = () => {
    if(!stripePromise) {
      stripePromise = loadStripe("pk_live_51Nq7cBIX3jzwr7UWhCy02tD1n4EkuPTT5FkNjWvA6HrYPLhzWcYo326R8lwrustPNddnYvH0UlSQc9O86OpNQJ0G00vdeDCOBb")
    }
    return stripePromise
  }
  const stripe = await getStripe()

  await stripe.redirectToCheckout({
    mode: 'payment',
    lineItems,
    successUrl: `${origin}&session_id={CHECKOUT_SESSION_ID}&success=true`,
    cancelUrl: `${origin}&success=false`
  })

}
