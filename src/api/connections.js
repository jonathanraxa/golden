import { firestore } from "@/firebaseConfig";
import {
  collection,
  onSnapshot,
  doc,
  query,
  where,
  setDoc,
} from "firebase/firestore";

const connectionRef = collection(firestore, "connections");

export const addConnection = (userId, targetId) => {
  try {
    let connectionToAdd = doc(connectionRef, `${userId}_${targetId}`);

    setDoc(connectionToAdd, { userId, targetId });

    toast.success("Connection Added!");
  } catch (err) {
    console.log(err);
  }
};

export const getConnections = (userId, targetId, setIsConnected) => {
  try {
    let connectionsQuery = query(
      connectionRef,
      where("targetId", "==", targetId),
    );

    onSnapshot(connectionsQuery, (response) => {
      let connections = response.docs.map((doc) => doc.data());

      const isConnected = connections.some(
        (connection) => connection.userId === userId,
      );

      setIsConnected(isConnected);
    });
  } catch (err) {
    console.log(err);
  }
};
