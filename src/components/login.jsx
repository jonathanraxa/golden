import React, { useState } from "react";
import { EyeInvisibleOutlined, EyeTwoTone, InfoCircleOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Input, Tooltip } from 'antd';
import { useNavigate } from "react-router-dom";
import { LoginAPI } from "../api/AuthAPI";

import "./login.scss";
// import { toast } from "react-toastify";

export const Login = () => {
  let navigate = useNavigate();
  const [credentails, setCredentials] = useState({});
  const login = async () => {
    try {
      let res = await LoginAPI(credentails.email, credentails.password);
    //   toast.success("Signed In to Linkedin!");
      localStorage.setItem("userEmail", res.user.email);
    //   navigate("/home");
    } catch (err) {
      console.log(err);
    //   toast.error("Please Check your Credentials");
    }
  };

  return (
    <div className="login-wrapper">
      {/* <img src={LinkedinLogo} className="linkedinLogo" /> */}

      <div className="login-wrapper-inner">
        <h1 className="heading">Sign in</h1>
        <p className="sub-heading">Giving back in your golden years</p>

        <div className="auth-inputs">
              <Input
               onChange={(event) =>
                setCredentials({ ...credentails, email: event.target.value })
              }
              type="email"
              className="common-input"
              placeholder="Email or Phone"
                prefix={<UserOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
                suffix={
                    <Tooltip title="Extra information">
                    <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
                    </Tooltip>
                }
                />
            <Input.Password
                placeholder="input password"
                iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                onChange={(event) =>
                    setCredentials({ ...credentails, password: event.target.value })
                  }
                type="password"
            />
        </div>

        <Button type="primary" onClick={login} >Sign in</Button>

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