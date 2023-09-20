'use client'
import {Header} from "@/app/components/header";
import dayjs from "dayjs";
import {collection, setDoc, getDocs, doc, deleteDoc, updateDoc} from "firebase/firestore";
import {db} from '../../helpers/firebase';
import {Fragment, useEffect, useRef, useState} from "react";
import {
    IconButton,
    ModifyButton,
    Secondary,
} from "@/app/components/Buttons";
import {Dialog, Transition} from "@headlessui/react";
import {useRouter} from "next/navigation";
import {notify, Toast} from "@/app/helpers/toast";
import {toast} from "react-toastify";
import { SessionProvider } from "next-auth/react"
import {useAuthContext} from "@/app/context/auth_context";



export default function Page() {



    const [dates, setDates] = useState([]);

    const [date, setDate] = useState(null);
    const [time, setTime] = useState(null);

    const [getAuth, setGetAuth] = useState(false);

    const [open, setOpen] = useState({o: false, d: null});

    const cancelButtonRef = useRef(null);

    const Modal = () => {

        return (
            <Transition.Root show={open.o} as={Fragment}>
                <Dialog
                    as="div"
                    className="fixed z-10 inset-0 overflow-y-auto"
                    initialFocus={cancelButtonRef}
                    onClose={setOpen}
                >
                    <div
                        className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
                    >
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"/>
                        </Transition.Child>

                        {/* This element is to trick the browser into centering the modal contents. */}
                        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
            &#8203;
          </span>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <div
                                className="inline-block align-bottom bg-white rounded-2xl
            text-left
            overflow-hidden shadow-xl
            transform transition-all
            sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
                            >
                                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                    <div className="sm:flex sm:items-start">
                                        <div
                                            className="mx-auto flex-shrink-0 flex items-center
                   justify-center h-12 w-12 rounded-full bg-red-700 sm:mx-0
                    sm:h-10 sm:w-10"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                 strokeWidth={1.5} stroke="white" className="w-5 h-5">
                                                <path strokeLinecap="round" strokeLinejoin="round"
                                                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"/>
                                            </svg>

                                        </div>
                                        <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                            <Dialog.Title as="h3"
                                                          className="text-lg leading-6 font-medium text-gray-900">
                                                Confirm Deletion
                                            </Dialog.Title>
                                            <div className="mt-2 ">
                                                <p className="text-sm text-gray-500 px-14 sm:px-0">
                                                    Are you sure you want to delete this time slot for:
                                                </p>

                                                <div className={"mt-4"}>
                                                    <div className={"flex space-x-4 items-center justify-center sm:justify-start"}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                             viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"
                                                             className="w-5 h-5 sm:block hidden ">
                                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"/>
                                                        </svg>

                                                        {
                                                            open.d ?
                                                                <p className={"font-medium text-md text-center mx-auto sm:text-left"}>{dayjs(open.d.time.seconds * 1000).format('MMMM. DD, YYYY')}</p> : <></>
                                                        }
                                                    </div>
                                                    <div className={"flex space-x-4 items-center justify-center sm:justify-start sm:mt-4 mb-4"}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                             viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"
                                                             className="w-5 h-5 sm:block hidden">
                                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                                        </svg>
                                                        {
                                                            open.d ?
                                                                <p className={"font-medium text-md text-center sm:text-left"}>{dayjs(open.d.time.seconds * 1000).format('h:mm A')}</p> : <></>
                                                        }
                                                    </div>
                                                    {open.d && open.d.reserved ?
                                                    <div
                                                        className="mx-auto mt-2 flex-shrink-0 flex items-center
                   justify-center w-full py-2 rounded-full bg-red-700
                    "
                                                    >
                                                        <p className={"text-white"}>Warning: This reservation is booked</p>

                                                    </div> : <></>
                                                    }


                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div className=" px-4 py-3 sm:px-6 flex flex-row-reverse justify-center sm:justify-start">
                                    <div className={"sm:w-1/3 pl-4 mb-[13px]"}>
                                        <ModifyButton action={() => {
                                            removeTime(open.d.id).then(() => {
                                                setOpen({o: false, d: null})
                                            })
                                        }}
                                                      title={"Delete"} />
                                    </div>

                                    <div className={"mb-[13px]"}>

                                    <ModifyButton modify
                                        title="Close"
                                        action={() => setOpen({o: false, d: null})}
                                        ref={cancelButtonRef}
                                    >
                                    </ModifyButton>
                                    </div>

                                </div>

                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root>
        )
    }

    const { user } = useAuthContext()
    const router = useRouter()

    useEffect(() => {
        if (user == null) router.push("/booking/admin/login")
        else{
            if (dates.length < 1) {
                setGetAuth(true)
                fetchData().then()
            }
        }
    }, [dates.length, router, user])



    const fetchData = async () => {


        await getDocs(collection(db, "users"))
            .then((querySnapshot) => {
                const newData = querySnapshot.docs
                    .map((doc) => ({...doc.data(), id: doc.id}));
                setDates(newData);
            })
    }

    const removeTime = async (id) => {
        await deleteDoc(doc(db, "users", id)).then(()=>{
            fetchData();
            toast("Session Deleted")
        })
    }


    const updateTime = async (id) => {
        try {
        let dt = new Date(date.target.value + "T" + time.target.value + ":00")

            await updateDoc(doc(db, "users", id), {
                time: dt
            }).then(() => {
                fetchData();
                notify("Time Updated")

            })
        }
        catch (e) {
            notify("Please add date and time to update")

        }

    }

    const addTime = async (e) => {
        e.preventDefault();

        let dt = new Date(date.target.value + "T" + time.target.value + ":00")

        try {
            const docRef = await setDoc(doc(collection(db, "users")), {
                time: dt,
                slotAmount: 0,
                maxSlots: 25
            })
            toast("Session Created")
            fetchData().then()

        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }



    const Row = () => {
        return (
                    dates?.map((date,i)=>(

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
                                    <div className={"flex space-x-4 justify-start"}>
                                        <IconButton color={"black"} svg={
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                                            </svg>

                                        } action={()=>updateTime(date.id)} title={"Change"}/>
                                        <IconButton delete color={"red-500"} svg={
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                            </svg>

                                        } action={()=>setOpen({o: true, d:date})} title={"Delete"} />
                                        <a
                                            className={"cursor-pointer flex justify-center items-center w-12 h-12 text-center text-black tracking-tighter bg-transparent hover:bg-black hover:text-white  border-2 border-black  focus:border-opacity-40  focus:ring-4 focus:ring-opacity-40 rounded-full transition duration-300"}
                                            href={`/booking/admin/${date.id}`}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                                            </svg>


                                        </a>
                                    </div>
                                </div>

                            </div>

                        </div>


                    ))



        )
    }






    return (
        getAuth ? (
        <div>
            <Header/>
            <Modal/>
            <Toast/>


            <section id={"team"} className={"relative mt-10 overflow-hidden"}>
                <div className="container px-4 mx-auto">
                    <div className="mb-10 text-left flex justify-between items-end">
                        <h1 className={"text-4xl font-bold "}>Sessions <span className={"text-sm"}>(ADMIN)</span></h1>
                    </div>
                </div>

                <div className="container px-4 mx-auto">

                    <div className={"sm:flex md:space-x-4 items-center mb-4"}>

                        <div className="mb-4 sm:mb-0">
                            <input onChange={setDate} type={"date"}
                                   className="py-3 w-full sm:w-auto sm:text-center text-primary text-xl tracking-tighter bg-transparent ring-0 outline-0 border-b-2 border-black focus:border-opacity-40 hover:border-primary focus:ring-4 focus:ring-transparent ring-transparent  transition duration-300"/>
                        </div>
                        <div className="">
                            <input onChange={setTime} type={"time"}
                                   className="py-3 w-full sm:w-auto sm:text-center text-primary text-xl tracking-tighter bg-transparent ring-0 outline-0 border-b-2 border-black focus:border-opacity-40 hover:border-primary focus:ring-4 focus:ring-transparent ring-transparent  transition duration-300"/>
                        </div>
                        <div className={"sm:mt-0 pt-4 pb-4 flex justify-end"}>
                            <Secondary action={addTime} title={"Add Session"}/>

                        </div>

                    </div>


                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 space-y-4 md:space-y-0 md:space-x-4">
                        <Row/>
                    </div>
                </div>

            </section>
        </div> ) : <></>

)
}
