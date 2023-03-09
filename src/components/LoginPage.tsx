import React, { useState } from "react";
import { Link } from "react-router-dom";

interface LoginProps {
  onLoginSuccess: () => void;
}

const LoginPage: React.FC<LoginProps> = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Your login authentication logic here
    if (email === "user@example.com" && password === "password123") {
      onLoginSuccess();
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="form">
      <form className="form__form" onSubmit={handleSubmit}>
        <h2 className="form__title">Login</h2>
        <div className="form__field">
          <label htmlFor="email" className="form__label">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="form__input"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </div>
        <div className="form__field">
          <label htmlFor="password" className="form__label">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="form__input"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </div>
        {error && <p className="form__error">{error}</p>}
        <button type="submit" className="form__button">
          Login
        </button>
        <Link className="form__registration" to="../register">
          Don't have account?
        </Link>
      </form>
    </div>
  );
};

export default LoginPage;
