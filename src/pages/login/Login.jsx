import React from "react";
import { useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { useNavigate } from "react-router-dom";
import "../../styles/Login.scss";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const ErrorFallback = ({ error, resetErrorBoundary }) => {
    return (
      <div role="alert">
        <p>Something went wrong:</p>
        <pre>{error.message}</pre>
        <button onClick={resetErrorBoundary}>Try again</button>
      </div>
    );
  };

  const handleSubmit = (e) => {
    // prevent refresh page
    e.preventDefault();

    // if username and password equals to admin and admin
    if (username === "admin" && password === "admin") {
      localStorage.setItem("admin", "yes");
      navigate("/");
    }

    setError("Username or password is wrong");
  };

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <div className="loginbody">
        <div className="main">
          {/* invoke handle submit when button is pressed */}
          <form className="form1" onSubmit={handleSubmit}>
            <p className="heading">Welcome to Weather App</p>
            <input
              className="un"
              type="text"
              align="center"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <input
              className="pass"
              type="password"
              align="center"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <p className="errortext">{error}</p>

            <button type="submit" className="submit" align="center">
              Sign in
            </button>
          </form>
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default Login;