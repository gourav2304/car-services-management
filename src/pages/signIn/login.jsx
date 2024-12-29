import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    // Logic for user authentication (use backend API for real authentication)
    console.log("Signed in with:", email, password);
    // On successful sign-in, navigate to the dashboard or home page
    navigate("/");
  };

  return (
    <div className="signin-container">
      <form className="signin-form" onSubmit={handleSignIn}>
        <h2>Sign In</h2>
        <div className="input-field">
          <label htmlFor="signin-email">Email:</label>
          <input
            type="email"
            id="signin-email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-field">
          <label htmlFor="signin-password">Password:</label>
          <input
            type="password"
            id="signin-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="signIn">
          Sign In
        </button>
        <p className="signin-link">
          Don't have an account? <a href="/signup">Sign up here</a>
        </p>
      </form>
    </div>
  );
}

export default SignIn;
