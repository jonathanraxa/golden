import React, { useState } from "react";
import { toast } from 'react-toastify';
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { useNavigate } from "react-router-dom";
import { routes } from '../../routes/routes';
import { LoginAPI } from "../../api/AuthAPI";

export const Login = () => {
  const navigate = useNavigate();
  const [credentails, setCredentials] = useState({});
  const login = async () => {
    try {
      let res = await LoginAPI(credentails.email, credentails.password);
      toast.succes("Signed In to Linkedin!");
      localStorage.setItem("userEmail", res.user.email);
      navigate(routes.home);
    } catch (err) {
      console.log(err);
      toast.error("Please Check your Credentials");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-2xl">Sign in</h1>
        <p className="sub-heading mt-5">Giving back in your golden years</p>
        <div className="flex flex-col gap-2.5 w-[400px] mt-5">
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

         <Button 
            onClick={login}
            className='mt-5'
          >Sign in</Button>
          
    <hr className="hr-text mt-5 mb-5" data-content="or" />
      <div className="flex flex-col items-center justify-center">
        <p className="go-to-signup">
          New to LinkedIn?{" "}
          <span className="text-blue-500 text-lg cursor-pointer" onClick={() => navigate("/register")}>
            Join now
          </span>
        </p>
      </div>
      </div>
   
    </div>
  );
}