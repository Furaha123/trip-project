import React, { useState } from "react";
import "../CSS/Sign.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import LoginImage from "../Images/Login.svg";

function Login() {
  const [action, setAction] = useState("Login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const Navigate = useNavigate();
  const payload = {
    email,
    password,
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://holidayplanner.onrender.com/auth/login", payload)
      .then((response) => {
        console.log("Response data:", response.data);
        // localStorage.setItem("token", token);

        // console.log(token);
        Navigate("/dashboard");
      });
  };

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
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="submit-button1">
            <div className="submitting">
              <button
                className={action === "Login" ? "login-button" : "submit1"}
              >
                Login In
              </button>
            </div>
          </div>
        </div>
        <img src={LoginImage} alt="Login" className="styled-image" />
      </form>
    </>
  );
}

export default Login;
