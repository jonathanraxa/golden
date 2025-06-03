import React, { useState } from "react";
import { toast } from "react-toastify";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { useNavigate } from "react-router-dom";

import { RegisterAPI } from "../../api/AuthAPI";

export const Register = () => {
  const navigate = useNavigate();

  const [credentails, setCredentials] = useState({});

  const register = async () => {
    try {
      let res = await RegisterAPI(credentails.email, credentails.password);
      toast.success("Account created!");
      localStorage.setItem("userEmail", res.user.email);
      navigate("/home");
    } catch (err) {
      console.log(err);
      toast.error("Cannot create your account");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-2xl">Giving back in your golden years</h1>
        <div className="flex flex-col gap-2.5 w-[600px] mt-5">
          <Input
            onChange={(event) =>
              setCredentials({ ...credentails, email: event.target.value })
            }
            type="email"
            className="common-input"
            placeholder="Email or Phone"
          />
          <Input
            onChange={(event) =>
              setCredentials({ ...credentails, password: event.target.value })
            }
            type="password"
            className="common-input"
            placeholder="input password"
          />
        </div>

        <Button className="mt-5 w-[600px]" onClick={register}>
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
