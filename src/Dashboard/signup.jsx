import React, { useState } from "react";
import "../CSS/signup.css";
import { Link } from "react-router-dom";

function SignUpForm({ openModal }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });

    // Validate the input field
    if (name === "email") {
      if (!validateEmail(value)) {
        setErrors({ ...errors, email: "Invalid email address" });
      } else {
        setErrors({ ...errors, email: "" });
      }
    } else {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let formIsValid = true;
    const newErrors = { ...errors };

    if (formData.firstName.trim() === "") {
      newErrors.firstName = "First name is required";
      formIsValid = false;
    }

    if (formData.lastName.trim() === "") {
      newErrors.lastName = "Last name is required";
      formIsValid = false;
    }

    if (formData.email.trim() === "" || !validateEmail(formData.email)) {
      newErrors.email = "Invalid email address";
      formIsValid = false;
    }

    if (formData.password.trim() === "") {
      newErrors.password = "Password is required";
      formIsValid = false;
    }

    if (formIsValid) {
      console.log("Form data submitted:", formData);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="signup-form">
      <form onSubmit={handleSubmit}>
        <h2 className="form-title">Sign Up</h2>
        <div className="form-group">
          <button type="button" className="cancel-button" onClick={openModal}>
            &#10005;
          </button>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
          />
          <span className="error">{errors.firstName}</span>
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
          />
          <span className="error">{errors.lastName}</span>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          <span className="error">{errors.email}</span>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
          <span className="error">{errors.password}</span>
        </div>

        <button type="submit" className="submit-btn">
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default SignUpForm;
