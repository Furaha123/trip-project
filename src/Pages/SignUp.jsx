import React, { useEffect, useRef, useState } from "react";
import "../CSS/Sign.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import LoginImage from "../Images/Login.svg";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullNames, setFullname] = useState("");
  const [location, setLocation] = useState("");
  const [role, setRole] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const Navigate = useNavigate();
  const payload = {
    email,
    password,
    fullNames,
    location,
    role,
    phoneNumber,
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://holidayplanner.onrender.com/auth/signup", payload)
      .then(() => {
        Navigate("/login");
        console.log(payload);
      });
  };

  const [action, setAction] = useState("Sign Up");

  return (
    <>
      <form
        className="container-form"
        method="post"
        onSubmit={handleFormSubmit}
      >
        <div className="inputs-form">
          <div className="header-form">
            <div className="text-form">{action}</div>
            <div className="underline"></div>
          </div>
          {action === "Login" ? (
            <div></div>
          ) : (
            <div className="input-one">
              <input
                type="text"
                placeholder="full name "
                value={fullNames}
                onChange={(e) => setFullname(e.target.value)}
              ></input>
            </div>
          )}

          <div className="input-one">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="input-one">
            <input
              type="text"
              placeholder="Tel+"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <div className="input-one">
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="input-one">
            <input
              type="text"
              placeholder="Enter Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>

          <div className="input-one">
            <input
              type="text"
              placeholder="Enter your role "
              value={role}
              onChange={(e) => setRole(e.target.value)}
            />
          </div>
          <div className="submit-button1">
            <p className="login-link">
              Already have an account? <Link to="/login">Login here</Link>
            </p>
            <div className="submitting">
              <button
                className={action === "Login" ? "submit1 gray" : "submit1"}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
        <img src={LoginImage} alt="Login" className="styled-image" />
      </form>
    </>
  );
}

export default SignUp;
