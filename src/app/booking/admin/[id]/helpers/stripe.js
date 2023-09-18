import {notify} from "@/app/helpers/toast";
import {removeSlot} from "@/app/booking/admin/[id]/helpers/firebase";

export const issueRefund = async (slot, params) => {
    const stripe = require('stripe')('sk_test_51Nq7cBIX3jzwr7UWZSTJUnmFKCKHV3hs4xdUBvcnvD1fO0LkweENDB0PTgOzMqGP2q7L5pXraALCXGwq185p3b9C00yVn2EZ8l');

    const session = await stripe.checkout.sessions.retrieve(
        slot.session
    )
    const paymentIntent = await stripe.paymentIntents.retrieve(
        session.payment_intent
    );

    await stripe.refunds.create({
        charge: paymentIntent.latest_charge
    }).then(() => {
        removeSlot(slot.id, params)
    })
    notify("Refund Issued")

}
