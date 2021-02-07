import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setAlert } from "../../actions/alert";
import { register } from "../../actions/auth";

import "./Auth.css";

const Register = () => {

  const Auth = useSelector(state => state.auth.isAuthenticated)

  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    password2: "",
  });

  const { firstName, lastName, email, password, password2 } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== password2) {
      dispatch(setAlert("Passwords do not match", "danger"));
    } else {
      dispatch(register({ firstName, lastName, email, password }));
      // setFormData({
      //   firstName: "",
      //   lastName: "",
      //   email: "",
      //   password: "",
      //   password2: "",
      // });
    }
  };

   if(Auth) {
    return <Redirect to='/dashboard' />
  }

  return (
    <section className="container">
      <form className="register-container" onSubmit={(e) => onSubmit(e)}>
        <h1 style={{ fontSize: "30px" }}>Sign Up</h1>
        <p className="text">
          Take part in one of the most amazing design communities
        </p>
        <div className="inputs">
          <input
            type="text"
            name="firstName"
            value={firstName}
            onChange={(e) => onChange(e)}
            required
          />
          <label htmlFor="firstName" className="content-label">
            <span className="content-name">First Name</span>
          </label>
        </div>
        <div className="inputs">
          <input
            type="text"
            name="lastName"
            value={lastName}
            onChange={(e) => onChange(e)}
            required
          />
          <label htmlFor="lastName" className="content-label">
            <span className="content-name">Last Name</span>
          </label>
        </div>
        <div className="inputs">
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
        <div className="inputs">
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => onChange(e)}
            minLength="6"
            required
          />
          <label htmlFor="password" className="content-label">
            <span className="content-name">Password</span>
          </label>
        </div>
        <div className="inputs">
          <input
            type="password"
            name="password2"
            value={password2}
            onChange={(e) => onChange(e)}
            minLength="6"
            required
          />
          <label htmlFor="password2" className="content-label">
            <span className="content-name">Repeate Password</span>
          </label>
        </div>
        <p className="text">
          Already a member? <Link to="/login">Log In</Link>
        </p>
        <button className="register-btn" type="submit">
          Sign Up
        </button>
      </form>
    </section>
  );
};

export default Register;
