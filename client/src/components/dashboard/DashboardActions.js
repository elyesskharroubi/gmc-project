import React from "react";
import { Link } from "react-router-dom";
import {deleteAccount} from '../../actions/profile'
import {useDispatch} from 'react-redux'

import "./Dashboard.css";
import editAsset from "../../img/assets/edit.svg";
import expAsset from "../../img/assets/add-exp.svg";
import eduAsset from "../../img/assets/add-edu.svg";
import trashAsset from "../../img/assets/trash.svg";

const DashboardActions = () => {
  const dispatch = useDispatch()
  return (
    <div className="dash-buttons">
      <button className="delAccBtn" onClick={() => dispatch(deleteAccount())}>
        <div
          className='delBtn-inner'
        >
          <img
            src={trashAsset}
            alt="delete account"
            width="16px"
            className="delAcc"
          />{" "}
          <span>
            <span className="dash-btns-text"> Delete My</span> Account
          </span>
        </div>
      </button>
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
