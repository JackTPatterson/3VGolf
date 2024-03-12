'use client'
import React from "react";
import signIn from "@/app/context/signin";
import {useRouter} from 'next/navigation'

function Page() {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const router = useRouter()

    const handleForm = async (event) => {
        const {result, error} = await signIn(email, password);
        if (error) {
            return console.log(error)
        }
        return router.push("/booking/admin")
    }

    return (
        <div className="mx-auto flex justify-center">
            <section id={"team"} className={"relative mt-10 overflow-hidden"}>
                <div className="container px-4 mx-auto">
                    <div className="mb-10 text-left flex justify-between items-end">
                        <h1 className={"text-4xl font-bold "}>Login </h1>
                    </div>
                        <label htmlFor="email">
                            <p className={"mb-2 mt-4"}>Email</p>
                            <input className={"py-3 w-full text-primary text-xl tracking-tighter bg-transparent ring-0 outline-0 border-b-2 border-black focus:border-opacity-40 hover:border-primary focus:ring-4 focus:ring-transparent ring-transparent transition duration-300"} onChange={(e) => setEmail(e.target.value)} required type="email" name="email" id="email"
                                   placeholder="Email"/>
                        </label>
                        <label htmlFor="password">
                            <p className={"mb-2 mt-4"}>Password</p>
                            <input className={"py-3 w-full text-primary text-xl tracking-tighter bg-transparent ring-0 outline-0 border-b-2 border-black focus:border-opacity-40 hover:border-primary focus:ring-4 focus:ring-transparent ring-transparent transition duration-300\""} onChange={(e) => setPassword(e.target.value)} required type="password" name="password"
                                   id="password" placeholder="Password"/>
                        </label>
                        <button onClick={()=>{
                            handleForm()
                        }} className={"mt-10 cursor-pointer w-full text-center inline-block px-8 py-3 text-white tracking-tighter bg-primary hover:bg-[#5c9f52ff] border-2 border-primary focus:border-opacity-40 hover:border-green-500 focus:ring-4 focus:ring-green-500 focus:ring-opacity-40 rounded-full transition duration-300"} type="submit">Sign up</button>
                </div>
            </section>
        </div>);
}

export default Page;
