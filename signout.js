import auth from "@/app/helpers/firebase";
import signOut from 'firebase/auth';

export default function SignOut(){
    return signOut(auth)
}
