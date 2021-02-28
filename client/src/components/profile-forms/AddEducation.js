import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {  useHistory } from "react-router-dom";
import { addEducation } from "../../actions/profile";

import "../auth/Auth.css";
import "../dashboard/Dashboard.css";

const AddEducation = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    school: "",
    degree: "",
    from: "",
    current: false,
    to: "",
  });

  const [toDateDisabled, toggleDisabled] = useState(false);
  const { school, degree, from, current, to } = formData;
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(addEducation(formData, history));
  };
  return (
    <section className="container">
      <form className="profileForm" onSubmit={(e) => onSubmit(e)}>
        <h1 style={{ fontSize: "30px" }}>Add an Education</h1>
        <p className="text">Add any education that you have had in the past.</p>
        <small className="smallDesc">
          <em>* = required fields</em>
        </small>
        <div className="create-profile-input">
          <small className="smallDesc">
            <em>School or Bootcamp</em>
          </small>
          <input
            type="text"
            placeholder="School *"
            name="school"
            value={school}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div className="create-profile-input">
          <small className="smallDesc">
            <em>Degree / Diploma</em>
          </small>
          <input
            type="text"
            placeholder="Degree *"
            name="degree"
            value={degree}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div className="create-profile-input">
          <small className="smallDesc">
            <em>From date *</em>
          </small>
          <input
            type="date"
            name="from"
            value={from}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div className="create-profile-input">
          <p className="text">
            <input
              type="checkbox"
              name="current"
              checked={current}
              value={current}
              onChange={(e) => {
                setFormData({ ...formData, current: !current });
                toggleDisabled(!toDateDisabled);
              }}
            />{" "}
            Current Education
          </p>
        </div>
        <div className="create-profile-input">
          <small className="smallDesc">
            <em>To date</em>
          </small>
          <input
            type="date"
            name="to"
            value={to}
            onChange={(e) => onChange(e)}
            disabled={toDateDisabled ? "disabled" : ""}
          />
        </div>
        <button
          className="register-btn"
          type="submit"
          style={{ marginBottom: "40px" }}
        >
          Save
        </button>
      </form>
    </section>
  );
};

export default AddEducation;
