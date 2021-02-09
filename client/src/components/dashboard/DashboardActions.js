import React from "react";
import { Link } from "react-router-dom";

import "./Dashboard.css";
import editAsset from "../../img/assets/edit.svg";
import expAsset from "../../img/assets/add-exp.svg";
import eduAsset from "../../img/assets/add-edu.svg";

const DashboardActions = () => {
  return (
    <div className="dash-buttons">
      <Link to="/edit-profile" className="primaryBtn">
        <img
          src={editAsset}
          alt="edit profile"
          width="16px"
          className="dash-icons"
        />
        <span className="dash-btns-text">Edit Profile</span>
      </Link>
      <Link to="/add-experience" className="primaryBtn">
        <img
          src={expAsset}
          alt="add experience"
          width="16px"
          className="dash-icons"
        />
        <span className="dash-btns-text">Add Experience</span>
      </Link>
      <Link to="/add-education" className="primaryBtn">
        <img
          src={eduAsset}
          alt="add education"
          width="16px"
          className="dash-icons"
        />
        <span className="dash-btns-text">Add Education</span>
      </Link>
    </div>
  );
};

export default DashboardActions;
