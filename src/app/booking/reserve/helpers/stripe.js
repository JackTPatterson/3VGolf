import {checkout} from "../../../../../checkout";

export const processPayment = async (pathname, queryName, queryEmail, queryExp, queryAge)=>{

    await checkout({
        lineItems: [
            {
                price: "price_1NsER9IX3jzwr7UWudJ7CxsG",
                quantity: 1
            }
        ],
    }, `https://threevillageyouthgolf.com/${pathname}?&name=${queryName}&email=${queryEmail}&exp=${queryExp}&age=${queryAge}`)
}
