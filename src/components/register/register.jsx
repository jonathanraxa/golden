import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RegisterAPI } from "@/api/AuthAPI";
import { postUserData } from "@/api/FirestoreAPI";
import { getUniqueID } from "@/components/helpers/getUniqueId";

export const Register = () => {
  const navigate = useNavigate();

  const [credentails, setCredentials] = useState({});

  const register = async () => {
    try {
      let res = await RegisterAPI(credentails.email, credentails.password);
      toast.success("Account created!");
      console.log("getUniqueID: ", getUniqueID());
      postUserData({
        userID: getUniqueID(),
        name: credentails.name,
        email: credentails.email,
        imageLink:
          "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
      });
      navigate("/home");
    } catch (err) {
      console.log(err);
      toast.error("Cannot create your account");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-2xl">Giving back in your golden years</h1>
        <div className="flex flex-col gap-2.5 w-[600px] mt-5">
          <Input
            className="input-common"
            onChange={(event) =>
              setCredentials({ ...credentails, name: event.target.value })
            }
            type="name"
            placeholder="Your name"
          />
          <Input
            className="input-common"
            onChange={(event) =>
              setCredentials({ ...credentails, email: event.target.value })
            }
            type="email"
            placeholder="Email"
          />
          <Input
            className="input-common"
            onChange={(event) =>
              setCredentials({ ...credentails, password: event.target.value })
            }
            type="password"
            placeholder="Input password"
          />
        </div>

        <Button
          className="button-start-common mt-5 w-[600px]"
          onClick={register}
        >
          Agree & join
        </Button>

        <hr className="hr-text mt-5 mb-5" data-content="or" />
        <div className="flex flex-col items-center justify-center">
          <p className="go-to-signup">
            Already in Golden?{" "}
            <span
              className="text-blue-500 text-lg cursor-pointer"
              onClick={() => navigate("/login")}
            >
              Sign in
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
