import { loadStripe } from "@stripe/stripe-js";
import '.env';
export async function checkout({lineItems}, origin){
  let stripePromise = null

  const getStripe = () => {
    if(!stripePromise) {
      stripePromise = loadStripe("pk_test_51Nq7cBIX3jzwr7UWS1EH1M2UCyL5IU2ig7yhXvxBXcNyOyv0iQzFm8I1ejEhM3sQ94bDoPShw78rN8Fmz1pcKYyN00lVHybZRh")
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
