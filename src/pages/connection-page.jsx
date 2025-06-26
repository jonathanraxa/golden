import React, { useEffect, useState } from "react";
import { Connection } from "@/components/connection";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebaseConfig";
import { Loader } from "@/components/common/loader/loader";

export const ConnectionPage = ({ currentUser }) => {
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
  return loading ? <Loader /> : <Connection currentUser={currentUser} />;
};
