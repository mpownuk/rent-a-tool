import React, { useState } from "react";

interface RegisterProps {
  onRegisterSuccess: () => void;
}

const RegisterPage: React.FC<RegisterProps> = ({ onRegisterSuccess }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Your registration logic here
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    // Your registration authentication logic here
    if (email === "user@example.com") {
      setError("User already exists");
    } else {
      onRegisterSuccess();
    }
  };

  return (
    <div className="form">
      <form className="form__form" onSubmit={handleSubmit}>
        <h2 className="form__title">Register</h2>
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
        <div className="form__field">
          <label htmlFor="confirmPassword" className="form__label">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            className="form__input"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
            required
          />
        </div>
        {error && <p className="form__error">{error}</p>}
        <button type="submit" className="form__button">
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
