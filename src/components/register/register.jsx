import React, { useState } from "react";
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { GoogleSignInAPI, RegisterAPI } from "../../api/AuthAPI";
import LinkedinLogo from '../../assets/linkedinLogo.png';

import "./register.css";

export const Register = () => {
  let navigate = useNavigate();
  const [credentails, setCredentials] = useState({});

  const register = async () => {
    try {
      let res = await RegisterAPI(credentails.email, credentails.password);
      toast.success("Account created!");
    //   localStorage.setItem("userEmail", res.user.email);
      navigate("/home");
    } catch (err) {
      console.log(err);
      toast.error("Cannot create your account");
    }
  };


  return (
    <div className="register-wrapper">
      <img src={LinkedinLogo} className="linkedinLogo" />

      <div className="register-wrapper-inner">
        <h1>Giving back in your golden years</h1>
        <div className="auth-inputs">
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
            onClick={register}
            >Agree & join</Button>

            
      </div>
      <hr className="hr-text" data-content="or" />
      <div className="google-btn-container">
        <p className="go-to-signup">
          Already in Golden?{" "}
          <span className="join-now" onClick={() => navigate("/login")}>
            Sign in
          </span>
        </p>
      </div>
    </div>
  );
}