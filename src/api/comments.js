import { firestore } from "@/firebaseConfig";
import {
  collection,
  addDoc,
  onSnapshot,
  doc,
  query,
  where,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import { toast } from "sonner";

const commentsRef = collection(firestore, "comments");

export const postComment = (postId, comment, timeStamp, name) => {
  try {
    addDoc(commentsRef, {
      postId,
      comment,
      timeStamp,
      name,
    });
  } catch (err) {
    console.log(err);
  }
};

export const deleteComment = (id) => {
  const docToDelete = doc(commentsRef, id);
  try {
    deleteDoc(docToDelete);
    toast("Comment has been Deleted!");
  } catch (err) {
    console.log(err);
  }
};

export const updateComment = (id, comment) => {
  let docToUpdate = doc(commentsRef, id);
  try {
    updateDoc(docToUpdate, { comment });
    toast("Comment has been updated!");
  } catch (err) {
    console.log(err);
  }
};

export const getComments = (postId, setComments) => {
  try {
    let singlePostQuery = query(commentsRef, where("postId", "==", postId));

    onSnapshot(singlePostQuery, (response) => {
      const comments = response.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });

      setComments(comments);
    });
  } catch (err) {
    console.log(err);
  }
};
