import React, { useState } from "react";
import { Link } from "react-router-dom"; 
import "./Login.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      errors.email = "Email is required";
    } else if (!emailRegex.test(email)) {
      errors.email = "Invalid email format";
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      alert("Password reset instructions sent to your email!");
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="upper-body">
          <h2>Forgot Password</h2>
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <button type="submit" className="login-button">
          Submit
        </button>
        <div className="signup-link">
          <p>
            Remember your password?{" "}
            <Link to="/login" className="register-link">
              Login here
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;
