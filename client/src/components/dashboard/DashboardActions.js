import React from "react";
import { Link } from "react-router-dom";

import "./Dashboard.css";

const DashboardActions = () => {
  return (
    <div className="dash-buttons">
      <Link to="/edit-profile" className="primaryBtn">
        Edit Profile
      </Link>
      <Link to="/add-experience" className="primaryBtn">
        Add Experience
      </Link>
      <Link to="/add-education" className="primaryBtn">
        Add Education
      </Link>
    </div>
  );
};

export default DashboardActions;
