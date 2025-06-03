import { firestore } from "@/firebaseConfig";
import {
  addDoc,
  collection,
  onSnapshot,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { toast } from "sonner";
import moment from "moment";

let dbRef = collection(firestore, "posts");
let postsRef = collection(firestore, "posts");

const currentTime = moment().format("LLL");
const userEmail = localStorage.getItem("userEmail");

export const postStatus = (status) => {
  const formattedData = {
    status,
    timeStamp: currentTime,
  };

  addDoc(dbRef, formattedData)
    .then(() => {
      console.log("Post added succcessfully!");
      toast("Post added successfully!");
    })
    .catch((err) => {
      console.log("Error: ", err);
    });
};

export const getPosts = (setAllStatus) => {
  // const q = query(postsRef, orderBy("timeStamp"));
  onSnapshot(dbRef, (response) => {
    setAllStatus(
      response.docs.map((docs) => {
        return { ...docs.data(), id: docs.id };
      }),
    );
  });
};

export const deletePost = (id) => {
  let docToDelete = doc(postsRef, id);
  try {
    deleteDoc(docToDelete);
    toast("Post has been Deleted!");
  } catch (err) {
    console.log(err);
  }
};
