import React from "react";
import Typical from "react-typical";
import { Link, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

import "./Landing.css";

const Landing = () => {
  const Auth = useSelector((state) => state.auth.isAuthenticated);

  if (Auth) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <div className="cover">
      <div className="landing-container">
        <p className="landing-sub">DESIGNHUB</p>
        <h1 className="landing-title">
          A community that helps you
          <Typical
            steps={[
              "find design trends",
              1500,
              "find inspiration",
              1500,
              "find creative ideas",
              1500,
              "find useful solutions",
              1500,
              "learn new skills",
              1500,
            ]}
            loop={Infinity}
          />
        </h1>
        <Link to="/register" className="cta-btn">
          JOIN FREE
        </Link>
      </div>
    </div>
  );
};

export default Landing;
