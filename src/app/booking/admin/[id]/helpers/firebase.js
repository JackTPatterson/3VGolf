import {collection, deleteDoc, doc, getDoc, getDocs, increment, updateDoc} from "firebase/firestore";
import {db} from "@/app/helpers/firebase";
import {useState} from "react";



export const removeSlot = async (id, params) => {
    const docRef = doc(db, "users", params.id, "slots", id);
    await deleteDoc(docRef).then(r => {
    })
    await updateDoc(doc(db, "users", params.id), {
        slotAmount: increment(-1)
    })
}
