import React, { useEffect, useState } from "react";
import APIClient from "../classes/APIClient";

interface RegisterProps {
  onRegisterSuccess: () => void;
}

const ApiClient = new APIClient("data/users.json");

const RegisterPage: React.FC<RegisterProps> = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [usersLength, setUsersLength] = useState<number | null>();

  useEffect(() => {
    async function fetchData(): Promise<void> {
      const lengthOfUsers = await ApiClient.getUsersLength();
      setUsersLength(lengthOfUsers);
    }
    fetchData();
  }, []);

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
    }
    if (!usersLength) {
      setError("Cannot create user");
    } else {
      const showStatus = async () => {
        const isSucces = await ApiClient.createUser(
          usersLength + 1,
          firstName,
          lastName,
          email,
          password
        );
        setError(isSucces);
      };
      showStatus();
    }
  };

  return (
    <div className="form">
      <form className="form__form" onSubmit={handleSubmit}>
        <h2 className="form__title">Register</h2>
        <div className="form__field">
          <label htmlFor="firstName" className="form__label">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            className="form__input"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
            required
          />{" "}
          <label htmlFor="lastName" className="form__label">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            className="form__input"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
            required
          />{" "}
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
