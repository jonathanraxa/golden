import { firestore } from "@/firebaseConfig";
import { addDoc, collection } from "firebase/firestore";
import { toast } from "sonner"

let dbRef = collection(firestore, 'posts');

export const postStatus = (status) => {
    let obj = {
        status,
    }
    addDoc(dbRef, obj)
    .then(() => {
        console.log('Post added succcessfully!')
        toast('Post added successfully!');
    })
    .catch((err) => {
        console.log('Error: ', err);
    });
}