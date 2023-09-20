import {checkout} from "../../../../../checkout";

export const processPayment = async (pathname, queryName, queryEmail)=>{

    await checkout({
        lineItems: [
            {
                price: "price_1NsESIIX3jzwr7UW16hHzw4A",
                quantity: 1
            }
        ],
    }, `http://127.0.0.1:3000${pathname}?&name=${queryName}&email=${queryEmail}`)
}
