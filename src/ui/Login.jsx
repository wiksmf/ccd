import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

import "./Form.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { signIn } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await signIn(email, password);
      navigate("/form");
    } catch (err) {
      setError(err.message);
      console.log(err.message);
    }
  };

  return (
    <main id="form" className="login">
      <section className="section">
        <div className="mw-wrapper">
          <form id="form-login" className="form" onSubmit={handleSubmit}>
            <p className="p">Login</p>

            <label htmlFor="email-address" className="label">
              <span>Email</span>
              <input
                id="email-address"
                name="email"
                type="email"
                className="input"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>

            <label htmlFor="password" className="label">
              <span>Hasło</span>
              <input
                id="password"
                name="password"
                type="password"
                className="input"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>

            <button
              type="submit"
              className="btn-form"
            >
              Login
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Login;
