import React, { useState } from "react";
import "../CSS/Sign.css";
import { Link } from "react-router-dom";
import axios from "axios";
import LoginImage from "../Images/Login.svg"

function SignUp({ openModal }) {
  const [action, setAction] = useState("Login");

  return (
    <>
      <div className="container-form">
        <img src={LoginImage} alt="Login" className="styled-image" />
        <div className="header-form">
          <div className="text-form">{action}</div>
          <div className="underline"></div>
        </div>
        <div className="inputs-form">
          {action === "Login" ? (
            <div></div>
          ) : (
            <div className="input-one">
              <input type="text" placeholder="Full names"></input>
            </div>
          )}

          <div className="input-one">
            <input type="email" placeholder="Enter your email"></input>
          </div>

          <div className="input-one">
            <input type="password" placeholder="Enter password"></input>
          </div>

          <div className="submit-button1">
            {action === "Sign Up" ? (
              <div></div>
            ) : (
              <div className="forgot-password">
                {" "}
                Forgot Password<span>Click Here</span>
              </div>
            )}

            <div className="submitting">
              <div
                className={action === "Login" ? "submit1 gray" : "submit1"}
                onClick={() => {
                  setAction("Sign Up");
                }}
              >
                Sign Up
              </div>
              <div
                className={action === "Sign Up" ? "submit1 gray" : "submit1"}
                onClick={() => {
                  setAction("Login");
                }}
              >
                login
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
