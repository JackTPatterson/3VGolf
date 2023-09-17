'use client'

import { getAuth, signOut } from "firebase/auth";
import {auth} from "@/app/helpers/firebase";
import {useRouter} from "next/navigation";

export default function Logout(){

    const router = useRouter();

    signOut(auth).then(() => {
        router.push("/")
    }).catch((error) => {
    });

}

