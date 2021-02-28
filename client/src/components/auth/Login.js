import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "./Auth.css";
import { login } from "../../actions/auth";

const Login = () => {
  const Auth = useSelector((state) => state.auth.isAuthenticated);

  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  // redirect if logged in 
  if(Auth) {
    return <Redirect to='/dashboard' />
  }
  return (
    <section className="container">
      <form className="register-container" onSubmit={(e) => onSubmit(e)}>
        <h1 style={{ fontSize: "30px" }}>Sign In</h1>
        <p className="text">Log into your account</p>
        <div className="inputs login-inputs">
          <input
            type="text"
            name="email"
            value={email}
            onChange={(e) => onChange(e)}
            required
          />
          <label htmlFor="email" className="content-label">
            <span className="content-name">E-mail</span>
          </label>
        </div>
        <div className="inputs login-inputs">
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => onChange(e)}
            required
          />
          <label htmlFor="password" className="content-label">
            <span className="content-name">Password</span>
          </label>
        </div>
        <p className="text">
          Not a member? <Link to="/register">Sign Up</Link>
        </p>
        <button className="register-btn" type="submit">
          Sign In
        </button>
      </form>
    </section>
  );
};

export default Login;
