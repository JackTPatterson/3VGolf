'use client'
import {Header} from "@/app/components/header";
import {Button, Secondary, SecondaryButton} from "@/app/components/Buttons";
import {useState} from "react";
import {collection, doc, getDoc, getDocs} from "firebase/firestore";
import {db} from "@/app/helpers/firebase";
import dayjs from "dayjs";
import {useRouter} from "next/navigation";


export default function Success() {



    const [data, setData] = useState();

    const router = useRouter()




    const fetchDoc = async () => {

        const query = new URLSearchParams(window.location.search).get('id')

        if(query) {
            const docRef = doc(db, "users", query);
            const docSnap = await getDoc(docRef)
            setData(docSnap.data())
        }

    }

    useState(()=>{
        fetchDoc().then();
    })


    return (
        <main>
            <Header/>
            <div className="h-screen">
                <div className="bg-white p-6  md:mx-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-24 h-24 mx-auto text-primary mb-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                    </svg>

                    <div className="text-center">
                        <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">Payment Successful</h3>
                        <p className="text-gray-600 my-2">Thank you for being with Three Village Youth Golf</p>
                        <p className="text-gray-600 mb-2 mt-4">Your scheduled time is for:</p>

                        { data ?
                            <div>
                        <div className={""}><p className={"text-xl font-semibold"}>{
                            dayjs(data.time.seconds * 1000).format('MMM. DD, YYYY') + " at " + dayjs(data.time.seconds * 1000).format('h:mm A')
                        }</p></div>
                        <div><p>{}</p></div>
                            </div> : <></>
                        }
                        <div className="py-10 text-center mx-auto">
                            <Secondary action={()=>router.push("/")} title={"Go Home"}>

                            </Secondary>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

