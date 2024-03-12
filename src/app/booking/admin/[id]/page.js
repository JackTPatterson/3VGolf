'use client'

import {Header} from "@/app/components/header";
import {Button, DisabledButton, ModifyButton, RedirectButton, Secondary} from "@/app/components/Buttons";
import {collection, deleteDoc, doc, getDoc, getDocs, updateDoc, increment} from "firebase/firestore";
import {db} from "@/app/helpers/firebase";
import {useEffect, useState} from "react";
import dayjs from "dayjs";
import {loadStripe} from "@stripe/stripe-js";
import {notify, Toast} from "@/app/helpers/toast";
import {router} from "next/client";
import {useAuthContext} from "@/app/context/auth_context";
import {useRouter} from "next/navigation";
import {data, fetchDoc, queryEmail, setGetAuth, slots} from "@/app/booking/admin/[id]/helpers/firebase";
import {issueRefund} from "@/app/booking/admin/[id]/helpers/stripe";


export default function DetailPage({params}) {
    const [data, setData] = useState();

    const [slots, setSlots] = useState([]);

    const queryName = new URLSearchParams(window.location.search).get('name')

    const queryEmail = new URLSearchParams(window.location.search).get('email')

    const [getAuth, setGetAuth] = useState(false);

    const { user } = useAuthContext()
    const router = useRouter()

    const fetchDoc = async () => {
        const docRef = doc(db, "users", params.id);
        const docSnap = await getDoc(docRef)
        setData(docSnap.data())

        await getDocs(collection(db, "users", docSnap.id, 'slots'))
            .then((querySnapshot) => {
                const newData = querySnapshot.docs
                    .map((doc) => ({...doc.data(), id: doc.id}));
                setSlots(newData);
            })

        return docSnap.data()
    }

    useState(() => {
        fetchDoc().then();
    })

    useEffect(() => {
        if (user == null) router.push("/booking/admin/login")
        else{
            setGetAuth(true)
                fetchDoc().then();
        }
    }, [router, user])

    const Row = () => {
        return (
            slots?.map((slot, i) => (
                <div key={i}>
                    <div className="p-6 rounded-2xl bg-gray-100 w-full">
                        <div className="mb-2 flex justify-between items-center space-x-10">
                            <div>
                                <h3 className="text-sm text-gray-600 mb-2">{
                                    slot.name
                                }</h3>
                                <h3 className="text-sm text-gray-600">
                                    {slot.email}
                                </h3>
                            </div>

                            <ModifyButton modify title={"Refund"} action={ async ()=>{await issueRefund(slot, params); fetchDoc().then();}}/>
                        </div>
                    </div>
                </div>
            ))
        )
    }


    return <div>
        <Header/>
        <section id={"team"} className={"relative mt-10 overflow-hidden"}>
            <div className="container px-4 mx-auto">
                <div className="">
                    {
                        data ?

                            <h1 className={"text-4xl font-bold "}>Reservation
                                for {dayjs(data?.time.seconds * 1000).format('MMMM DD, YYYY')} at {dayjs(data?.time.seconds * 1000).format('h:mm A')}</h1> : <></>
                    }

                    <div className={"mt-10"}>
                        <div className={"flex space-x-4 items-center"}>

                            {
                                <p className={"font-medium text-2xl"}>{queryEmail}</p>
                            }
                        </div>


                    </div>
                </div>
                <div
                    className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 space-y-4 md:space-y-0 md:space-x-4">
                    <Row/>
                </div>


            </div>


        </section>

    </div>
}
