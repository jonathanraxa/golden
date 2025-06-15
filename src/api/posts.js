import { firestore } from "@/firebaseConfig";
import moment from "moment";
import {
  addDoc,
  collection,
  onSnapshot,
  doc,
  updateDoc,
  query,
  where,
  deleteDoc,
  orderBy,
} from "firebase/firestore";
import { toast } from "sonner";

const postsRef = collection(firestore, "posts");
const currentTime = moment().format("LLL");

export const postStatus = ({ currentUser, status }) => {
  const formattedData = {
    status,
    postId: getUniqueID(),
    timeStamp: currentTime,
    userName: currentUser.name,
    userEmail: currentUser.email,
    userID: currentUser.id,
  };

  addDoc(postsRef, formattedData)
    .then(() => {
      console.log("Post added succcessfully!");
      toast("Post added successfully!");
    })
    .catch((err) => {
      console.log("Error: ", err);
    });
};

export const getStatus = (setAllStatus) => {
  const q = query(postsRef, orderBy("timeStamp"));
  onSnapshot(q, (response) => {
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

export const getPosts = (setAllStatus) => {
  onSnapshot(postsRef, (response) => {
    setAllStatus(
      response.docs.map((docs) => {
        return { ...docs.data(), id: docs.id };
      }),
    );
  });
};

export const getSingleStatus = (setAllPosts, id) => {
  const singlePostQuery = query(postsRef, where("userID", "==", id));
  onSnapshot(singlePostQuery, (response) => {
    setAllPosts(
      response.docs.map((docs) => {
        return { ...docs.data(), id: docs.id };
      }),
    );
  });
};
