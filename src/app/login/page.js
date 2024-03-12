'use client'

import { signInWithEmailAndPassword } from "firebase/auth";
import {Header} from "@/app/components/header";
import {useRouter} from "next/navigation";
import {useState} from "react";
import {Button} from "@/app/components/Buttons";
import {auth} from "@/app/helpers/firebase";
import {notify, Toast} from "@/app/helpers/toast";

export default function Login() {

    const [password, setPassword] = useState();
    const [email, setEmail] = useState();

    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password).then(res=>{
            console.log("Signed In")
        }).catch(err=>{
            console.log(err)
        })
    };

    const router = useRouter();



    return (
        <div>
            <Header/>
            <Toast/>
            <section id={"team"} className={"relative mt-10 overflow-hidden"}>
                <div className="container px-4 mx-auto">
                    <div className="mb-20 text-left">
                        <h1 className={"text-4xl font-bold "}>Login</h1>
                    </div>
                </div>


                <div className="container px-4 mx-auto">
                    <div className={"mb-10"}>

                        <div className="mb-4 sm:mb-0">
                            <input onChange={setEmail} placeholder={"Email"}
                                   className="py-3 w-full sm:w-1/2 text-primary text-xl tracking-tighter bg-transparent ring-0 outline-0 border-b-2 border-black focus:border-opacity-40 hover:border-primary focus:ring-4 focus:ring-transparent ring-transparent  transition duration-300"/>
                        </div>
                        <div className="">
                            <input onChange={setPassword} placeholder={"Password"} type={"password"}
                                   className="py-3 w-full sm:w-1/2 mt-10 text-primary text-xl tracking-tighter bg-transparent ring-0 outline-0 border-b-2 border-black focus:border-opacity-40 hover:border-primary focus:ring-4 focus:ring-transparent ring-transparent  transition duration-300"/>
                        </div>

                    </div>
                    <div className={"sm:w-1/2 w-full"}>
                        <Button action={()=>logIn(email.target.value, password.target.value).then(r=>{
                            notify("Logged In", Toast.SUCCESS)
                            router.push("/booking/admin")
                        }).catch(err=>{
                            notify("Error", Toast.ERROR)
                        })} title={"Login"}/>
                    </div>

                </div>

            </section>
        </div>

    )
}
