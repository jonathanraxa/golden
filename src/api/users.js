import { firestore, auth } from "@/firebaseConfig";
import {
  addDoc,
  collection,
  onSnapshot,
  doc,
  updateDoc,
  query,
  where,
} from "firebase/firestore";

const userRef = collection(firestore, "users");

export const getAllUsers = (setAllUsers) => {
  onSnapshot(userRef, (response) => {
    setAllUsers(
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

export const postUserData = (object) => {
  addDoc(userRef, object)
    .then(() => {})
    .catch((err) => {
      console.log(err);
    });
};

// export const getCurrentUser = (setCurrentUser) => {
//   onSnapshot(userRef, (response) => {
//     setCurrentUser(
//       response.docs
//         .map((docs) => {
//           return { ...docs.data(), id: docs.id };
//         })
//         .filter((item) => {
//           return item.email === localStorage.getItem("userEmail");
//         })[0],
//     );
//   });
// };

export const getCurrentUser = (setCurrentUser) => {
  // const uid = auth.currentUser?.uid;
  // const docRef = doc(db, "users", uid);

  onSnapshot(userRef, (docSnap) => {
    if (docSnap.exists()) {
      setCurrentUser({ ...docSnap.data(), id: docSnap.id });
    }
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
