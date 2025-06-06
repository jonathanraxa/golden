import React, { useEffect, useState } from "react";
import { Profile } from "@/components/profile";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebaseConfig";
import { Loader } from "@/components/common";

export const ProfilePage = ({ currentUser }) => {
  const [loading, setLoading] = useState(true);
  let navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, (res) => {
      if (!res?.accessToken) {
        navigate("/");
      } else {
        setLoading(false);
      }
    });
  }, []);
  return (
    <div className="w-screen flex justify-center items-center">
      {loading ? (
        <Loader size={48} colorClass="text-blue-600" borderClass="border-4" />
      ) : (
        <Profile currentUser={currentUser} />
      )}
    </div>
  );
};
