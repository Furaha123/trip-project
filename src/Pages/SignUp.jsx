import React, { useEffect, useRef, useState } from "react";
import "../CSS/Sign.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import LoginImage from "../Images/Login.svg";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullname, setFullname] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");

  const Navigate = useNavigate();
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    try {
      const response = await axios.post(
        "https://holiday-planner-4lnj.onrender.com/api/v1/auth/signup",
        {
          email,
          password,
          fullname,
        }
      );
      console.log(response);
      console.log(response.data);
      Navigate("/login");
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

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
              <input type="text"></input>
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
                onClick={(e) => {
                  handleFormSubmit(e);
                  setAction("Sign Up");
                }}
              >
                Sign Up
              </div>
              <div
                className={action === "Sign Up" ? "submit1 gray" : "submit1"}
                onClick={(e) => {
                  handleFormSubmit(e);
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
