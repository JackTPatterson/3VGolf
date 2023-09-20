import {notify} from "@/app/helpers/toast";
import {removeSlot} from "@/app/booking/admin/[id]/helpers/firebase";

export const issueRefund = async (slot, params) => {
    const stripe = require('stripe')('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');

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
