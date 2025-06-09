import React, { useState } from "react";
import { toast } from "react-toastify";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { routes } from "@/routes/routes";
import { LoginAPI } from "@/api/AuthAPI";

export const Login = () => {
  const navigate = useNavigate();
  const [credentails, setCredentials] = useState({});
  const login = async () => {
    try {
      let res = await LoginAPI(credentails.email, credentails.password);
      toast.success("Signed in to Golden!");
      localStorage.setItem("userEmail", res.user.email);
      navigate(routes.home);
    } catch (err) {
      console.log(err);
      toast.error("Please check your credentials.");
    }
  };

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-white">
      <div className="flex h-full flex-col items-center justify-center">
        <h1 className="text-2xl">Sign in</h1>
        <p className="sub-heading mt-5">Giving back in your golden years</p>
        <div className="mt-5 flex w-[400px] flex-col gap-2.5">
          <Input
            onChange={(event) =>
              setCredentials({ ...credentails, email: event.target.value })
            }
            type="email"
            className="input-common"
            placeholder="Email or Phone"
          />
          <Input
            onChange={(event) =>
              setCredentials({ ...credentails, password: event.target.value })
            }
            type="password"
            className="input-common"
            placeholder="input password"
          />
        </div>

        <Button onClick={login} className="button-start-common mt-5 w-[300px]">
          Sign in
        </Button>

        <hr className="hr-text mt-5 mb-5" data-content="or" />
        <div className="flex flex-col items-center justify-center">
          <p className="go-to-signup">
            New to LinkedIn?{" "}
            <span
              className="cursor-pointer text-lg text-blue-500"
              onClick={() => navigate("/register")}
            >
              Join now
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
