import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css"; // Import SignUp-specific CSS

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    // Logic for user registration (use backend API for real sign-up)
    console.log("User signed up with:", name, email, mobile);
    // On successful sign-up, navigate to the sign-in page
    navigate("/signin");
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSignUp}>
        <h2>Sign Up</h2>
        <div className="input-field">
          <label htmlFor="signup-name">Name:</label>
          <input
            type="text"
            id="signup-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="input-field">
          <label htmlFor="signup-email">Email:</label>
          <input
            type="email"
            id="signup-email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-field">
          <label htmlFor="signup-mobile">Mobile:</label>
          <input
            type="tel"
            id="signup-mobile"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="signup">
          Sign Up
        </button>
        <p className="signup-link">
          Already have an account? <a href="/signin">Sign in here</a>
        </p>
      </form>
    </div>
  );
}

export default SignUp;
