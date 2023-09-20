import {checkout} from "../../../../../checkout";

export const processPayment = async (pathname, queryName, queryEmail)=>{

    await checkout({
        lineItems: [
            {
                price: "price_1NsESIIX3jzwr7UW16hHzw4A",
                quantity: 1
            }
        ],
    }, `https://threevillageyouthgolf.com/${pathname}?&name=${queryName}&email=${queryEmail}`)
}
