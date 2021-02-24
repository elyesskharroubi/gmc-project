import React, { Fragment, useState } from "react";
import logo from "../../designhub.svg";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../actions/auth";

import "./Navbar.css";

const Navbar = () => {
  const Auth = useSelector((state) => state.auth);
  const { isAuthenticated, loading } = Auth;
  const dispatch = useDispatch();

  const [navBar, setNavBar] = useState(false);

  const [nav, setNav] = useState(false);
  const handleChange = () => {
    setNav(!nav);
  };

  const onClick = () => {
    dispatch(logout());
    handleChange();
  };

  const changeBg = () => {
    if (window.scrollY >= 50) {
      setNavBar(true);
    } else setNavBar(false);
  };
  window.addEventListener("scroll", changeBg);

  const guestLinks = (
    <ul>
      <li className={nav ? "li-active" : ""}>
        <Link className="nav-links" to="/community" onClick={handleChange}>
          Community
        </Link>
      </li>
      <li className={nav ? "li-active" : ""}>
        <Link className="nav-links" to="/login" onClick={handleChange}>
          Login
        </Link>
      </li>
      <li className={nav ? "li-active" : ""}>
        <Link className="nav-links" to="/register" onClick={handleChange}>
          Register
        </Link>
      </li>
    </ul>
  );
  const authLinks = (
    <ul>
      <li className={nav ? "li-active" : ""}>
        <Link className="nav-links" to="/dashboard" onClick={handleChange}>
          Dashboard
        </Link>
      </li>
      <li className={nav ? "li-active" : ""}>
        <Link className="nav-links" to="/posts" onClick={handleChange}>
          Posts
        </Link>
      </li>
      <li className={nav ? "li-active" : ""}>
        <Link className="nav-links" to="/community" onClick={handleChange}>
          Community
        </Link>
      </li>
      <li className={nav ? "li-active" : ""}>
        <a className="nav-links" href="#!" onClick={onClick}>
          Logout
        </a>
      </li>
    </ul>
  );
  return (
    <header className={navBar ? "scrolledNav" : ""}>
      <div className="navbar">
        <Link to="/">
          <img src={logo} alt="designhub logo" className="logo" />
        </Link>
        <nav className={nav ? "nav-active" : ""}>
          {!loading && (
            <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
          )}
        </nav>
        <div className="burger" onClick={handleChange}>
          <div className={nav ? "toggleL1" : ""}></div>
          <div className={nav ? "toggleL2" : ""}></div>
          <div className={nav ? "toggleL3" : ""}></div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
