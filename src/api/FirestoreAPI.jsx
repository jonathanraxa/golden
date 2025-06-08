import { firestore } from "@/firebaseConfig";
import moment from "moment";
import { getUniqueID } from "@/components/helpers/getUniqueId";
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

const dbRef = collection(firestore, "posts");
const postsRef = collection(firestore, "posts");

const currentTime = moment().format("LLL");
const userRef = collection(firestore, "users");

export const postStatus = ({ currentUser, status }) => {
  const formattedData = {
    status,
    postId: getUniqueID(),
    timeStamp: currentTime,
    userName: currentUser.name,
    userEmail: currentUser.email,
    userID: currentUser.id,
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

export const getAllUsers = (setAllUsers) => {
  onSnapshot(userRef, (response) => {
    setAllUsers(
      response.docs.map((docs) => {
        return { ...docs.data(), id: docs.id };
      }),
    );
  });
};

export const getSingleStatus = (setAllStatus, id) => {
  const singlePostQuery = query(postsRef, where("userID", "==", id));
  onSnapshot(singlePostQuery, (response) => {
    setAllStatus(
      response.docs.map((docs) => {
        return { ...docs.data(), id: docs.id };
      }),
    );
  });
};

export const getSingleUser = (setCurrentUser, email) => {
  const singleUserQuery = query(userRef, where("email", "==", email));
  onSnapshot(singleUserQuery, (response) => {
    setCurrentUser(
      response.docs.map((docs) => {
        return { ...docs.data(), id: docs.id };
      })[0],
    );
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

export const postUserData = (object) => {
  addDoc(userRef, object)
    .then(() => {})
    .catch((err) => {
      console.log(err);
    });
};

export const getCurrentUser = (setCurrentUser) => {
  onSnapshot(userRef, (response) => {
    setCurrentUser(
      response.docs
        .map((docs) => {
          return { ...docs.data(), id: docs.id };
        })
        .filter((item) => {
          return item.email === localStorage.getItem("userEmail");
        })[0],
    );
  });
};

export const editProfile = (userID, payload) => {
  let userToEdit = doc(userRef, userID);

  updateDoc(userToEdit, payload)
    .then(() => {
      success("Profile has been updated successfully");
    })
    .catch((err) => {
      console.log(err);
    });
};
