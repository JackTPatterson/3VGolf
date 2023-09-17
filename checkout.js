import { loadStripe } from "@stripe/stripe-js";
import '.env';
export async function checkout({lineItems}, origin){
  let stripePromise = null

  const getStripe = () => {
    if(!stripePromise) {
      stripePromise = loadStripe(process.env.STRIPE_PK)
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
