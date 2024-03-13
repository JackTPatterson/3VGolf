'use client'


import {Header} from "@/app/components/header";
import dayjs from "dayjs";

import {collection, getDocs} from "firebase/firestore";
import {db} from '../helpers/firebase';
import {useEffect, useRef, useState, Fragment} from "react";
import {
    RedirectButton,
    DisabledButton
} from "@/app/components/Buttons";
import {Toast} from "@/app/helpers/toast";

export default function Page() {

    const [dates, setDates] = useState([]);


    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [experienceLevel, setExperienceLevel] = useState("");
    const [age, setAge] = useState("");


    useEffect(() => {
        if (dates.length < 1) {
            fetchAvailableTimes().then()
        }
    })


    const fetchAvailableTimes = async () => {

        let dat = []
        await getDocs(collection(db, "users"))
            .then((querySnapshot) => {
                querySnapshot.forEach(data => {
                    if (data.data().time.seconds * 1000 > Date.now()) {
                        dat.push({...data.data(), id: data.id})
                    }
                })
                setDates(dat);
            })
    }




    const Row = () => {
        return (
            dates?.map((date, i) => (

                <div key={i}>
                    <div className="p-6 rounded-2xl bg-gray-100 w-full">
                        <div className="flex mb-2">
                            <h3 className="text-sm text-gray-600">{
                                dayjs(date.time.seconds * 1000).format('MMM. DD, YYYY')
                            } • {dayjs(date.time.seconds * 1000).format('h:mm A')}</h3>
                            <span
                                className={!(date.maxSlots - date.slotAmount === 0) ? "inline-block ml-auto px-2 py-1 text-xs text-white bg-primary rounded-full" : "inline-block ml-auto px-2 py-1 text-xs text-white bg-red-500 rounded-full"}>{(date.maxSlots - date.slotAmount === 0) ? "Booked" : "Open"}</span>
                        </div>
                        <div className={"flex justify-between w-full items-center mt-4 mb-2"}>
                            <div>
                                <h2 className="text-3xl font-bold">{`${date.maxSlots - date.slotAmount}`}</h2>
                                <p className={"text-xs text-gray-600 mt-1"}>Slots Available</p>
                            </div>
                            {(!(date.maxSlots - date.slotAmount <= 0) && email && name && age && experienceLevel) ?
                                <RedirectButton
                                    action={`/booking/reserve/${date.id}?name=${name}&email=${email}&age=${age}&exp=${experienceLevel}`}
                                    title={"Reserve"}/> : <DisabledButton title={"Reserve"}/>
                            }
                        </div>

                    </div>

                </div>
            ))
        )
    }

    return (
        <div className={"flex-col justify-between h-full flex-1"}>
            <div>
                <Header/>
                <Toast/>
                <section id={"team"} className={"relative mt-10 overflow-hidden"}>
                    <div className="container px-4 mx-auto">
                        <div className="mb-10 text-left">
                            <h1 className={"text-4xl font-bold "}>Reserve a Session</h1>

                        </div>
                    </div>


                    <div className="container px-4 mx-auto">
                        <p className={"mb-4"}>Enter Personal Info</p>
                        <div className={"sm:flex md:space-x-4 items-center mb-4"}>

                            <div className="mb-4 sm:mb-0">
                                <input onChange={e=>setName(e.currentTarget.value)} placeholder={"Full Name"}
                                       className="py-3 w-full sm:w-auto text-primary text-xl tracking-tighter bg-transparent ring-0 outline-0 border-b-2 border-black focus:border-opacity-40 hover:border-primary focus:ring-4 focus:ring-transparent ring-transparent  transition duration-300"/>
                            </div>
                            <div className="">
                                <input onChange={e=>setEmail(e.currentTarget.value)} placeholder={"Email"}
                                       className="py-3 w-full sm:w-auto text-primary text-xl tracking-tighter bg-transparent ring-0 outline-0 border-b-2 border-black focus:border-opacity-40 hover:border-primary focus:ring-4 focus:ring-transparent ring-transparent  transition duration-300"/>
                            </div>
                            <div className="">
                                <input type={"number"} onChange={e=>setAge(e.currentTarget.value)} placeholder={"Age"}
                                       className="py-3 w-full sm:w-auto text-primary text-xl tracking-tighter bg-transparent ring-0 outline-0 border-b-2 border-black focus:border-opacity-40 hover:border-primary focus:ring-4 focus:ring-transparent ring-transparent  transition duration-300"/>
                            </div>
                            <div className="">
                                <input type={"number"} onChange={e=>setExperienceLevel(e.currentTarget.value)} placeholder={"Experience Level"}
                                       className="py-3 w-full sm:w-auto text-primary text-xl tracking-tighter bg-transparent ring-0 outline-0 border-b-2 border-black focus:border-opacity-40 hover:border-primary focus:ring-4 focus:ring-transparent ring-transparent transition duration-300"/>
                            </div>

                        </div>

                        <div
                            className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 space-y-4 md:space-y-0 md:space-x-4">
                            <Row/>
                        </div>
                        {!dates.length ?
                            <div className={"mt-10"}>
                                <h1 className={"text-2xl"}>There are no session yet</h1>
                            </div> : <></>
                        }

                    </div>



                </section>




            </div>

        </div>


    )
}
