import React, { useState } from "react";
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { routes } from '../../routes/routes';
import { GoogleSignInAPI, LoginAPI } from "../../api/AuthAPI";
import LinkedinLogo from '../../assets/linkedinLogo.png';

import "./login.css";
// import { toast } from "react-toastify";

export const Login = () => {
  let navigate = useNavigate();
  const [credentails, setCredentials] = useState({});
  const login = async () => {
    try {
      let res = await LoginAPI(credentails.email, credentails.password);
      toast.success("Signed In to Linkedin!");
      localStorage.setItem("userEmail", res.user.email);
      navigate(routes.home);
    } catch (err) {
      console.log(err);
      toast.error("Please Check your Credentials");
    }
  };

  // const googleSignIn = () => {
  //   let response = GoogleSignInAPI();
  //   console.log(response);
  // }

  return (
    <div className="login-wrapper">
      <img src={LinkedinLogo} className="linkedinLogo" />

      <div className="login-wrapper-inner">
        <h1>Sign in</h1>
        <p className="sub-heading">Giving back in your golden years</p>

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
                  onClick={login}
                  >Sign in</Button>

      </div>
      <hr className="hr-text" data-content="or" />
      <div className="google-btn-container">
        <p className="go-to-signup">
          New to LinkedIn?{" "}
          <span className="join-now" onClick={() => navigate("/register")}>
            Join now
          </span>
        </p>
      </div>
    </div>
  );
}