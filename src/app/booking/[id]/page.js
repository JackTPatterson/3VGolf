'use client'

import {Header} from "@/app/components/header";
import {Button, Secondary} from "@/app/components/Buttons";
import {collection, doc, getDoc, updateDoc, addDoc, setDoc, increment, limit} from "firebase/firestore";
import {db} from "@/app/helpers/firebase";
import {useEffect, useState} from "react";
import dayjs from "dayjs";
import {loadStripe} from "@stripe/stripe-js";
import axios from 'axios';
import {checkout} from "../../../../checkout";
import {redirect, usePathname} from "next/navigation";
import { useRouter } from 'next/navigation'



export default function DetailPage({ params }) {


    const [data, setData] = useState();

    const queryName = new URLSearchParams(window.location.search).get('name')

    const queryEmail = new URLSearchParams(window.location.search).get('email')

    const querySesion = new URLSearchParams(window.location.search).get('session_id')

    const querySuccess = new URLSearchParams(window.location.search).get('success')

    const stripePromise = loadStripe("pk_live_51Nq7cBIX3jzwr7UWhCy02tD1n4EkuPTT5FkNjWvA6HrYPLhzWcYo326R8lwrustPNddnYvH0UlSQc9O86OpNQJ0G00vdeDCOBb");

    const pathname = usePathname()
    const router = useRouter()

    const fetchDoc = async () => {
        const docRef = doc(db, "users", params.id.split("%26")[0]);
        const docSnap = await getDoc(docRef)
        setData(docSnap)
    }

    useState(async()=>{
        fetchDoc().then();

        if(querySuccess === 'true'){
            const docRef = doc(db, "users", params.id.split("%26")[0]);
            const colRef = collection(docRef, "slots")

            await updateDoc(doc(db, "users", params.id.split("%26")[0]), {
                slotAmount: increment(1)
            })

            await addDoc(colRef, {
                name: queryName,
                email: queryEmail,
                session: querySesion
            })

            router.push(`/booking/success?id=${params.id.split("%26")[0]}`)
        }
    })

    const processPayment = async ()=>{

        await checkout({
            lineItems: [
                {
                    price: "price_1NsESIIX3jzwr7UW16hHzw4A",
                    quantity: 1
                }
            ],
        }, `http://127.0.0.1:3000${pathname}?&name=${queryName}&email=${queryEmail}`)



    }

    return <div>
        <Header/>

        <section id={"team"} className={"relative mt-10 overflow-hidden"}>
            <div className="container px-4 mx-auto">
                <div className="">
                    {
                        data ? <h1 className={"text-4xl font-bold "}>Reservation for {queryName}</h1> : <></>
                    }
                    <div className={"mt-10"}>
                        <div className={"flex space-x-4 items-center"}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-10 h-10">
                                <path strokeLinecap="round" d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25" />
                            </svg>
                            {
                                <p className={"font-medium text-2xl"}>{ queryEmail}</p>
                            }
                        </div>
                        <div className={"flex space-x-4 items-center mt-4"}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-10 h-10">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                            </svg>
                            {
                                data ? <p className={"font-medium text-2xl"}>{ dayjs(data.data().time.seconds*1000).format('MMMM DD, YYYY')}</p> : <></>
                            }
                        </div>
                        <div className={"flex space-x-4 items-center mt-4"}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-10 h-10">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {
                                data ? <p className={"font-medium text-2xl"}>{ dayjs(data.data().time.seconds*1000).format('h:mm A')}</p> : <></>
                            }
                        </div>
                    </div>
                </div>
                <div className={"md:w-1/2 mt-10"}>
                    {querySuccess === null ?
                        <Button title={"Reserve"} action={processPayment}>
                            Submit
                        </Button> : <></>
                    }
                </div>


            </div>
        </section>
    </div>
}
