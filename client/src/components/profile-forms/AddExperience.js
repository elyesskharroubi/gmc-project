import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { addExperience } from "../../actions/profile";

import "../auth/Auth.css";
import "../dashboard/Dashboard.css";

const AddExperience = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const [formData, setFormData] = useState({
        title:'',
        company:'',
        location:'',
        from:'',
        current: false,
        to: '',
        description: ''
    })

    const [toDateDisabled, toggleDisabled] = useState(false)
    const {title, company, location, from, current, to, description} = formData
    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value})
    const onSubmit = e => {
        e.preventDefault()
        dispatch(addExperience(formData, history))
    }
  return (
    <section className="container">
      <form className="profileForm" onSubmit={e => onSubmit(e)}>
        <h1 style={{ fontSize: "30px" }}>Add an Experience</h1>
        <p className="text">
          Add any design / marketing related experience that you have had in the
          past.
        </p>
        <small className="smallDesc">
          <em>* = required fields</em>
        </small>
        <div className="create-profile-input">
          <small className="smallDesc">
            <em>Job title (position)</em>
          </small>
          <input type="text" placeholder="Title *" name="title" value={title} onChange={e=> onChange(e)} required />
        </div>
        <div className="create-profile-input">
          <small className="smallDesc">
            <em>Name of the Company</em>
          </small>
          <input type="text" placeholder="Company *" name="company" value={company} onChange={e=> onChange(e)} required />
        </div>
        <div className="create-profile-input">
          <small className="smallDesc">
            <em>Where did it took place</em>
          </small>
          <input type="text" placeholder="Location *" name="location" value={location} onChange={e=> onChange(e)} />
        </div>
        <div className="create-profile-input">
          <small className="smallDesc">
            <em>From date *</em>
          </small>
          <input type="date" name="from" value={from} onChange={e=> onChange(e)} required />
        </div>
        <div className="create-profile-input">
          <p className="text">
            <input type="checkbox" name="current" checked={current} value={current} onChange={e =>{
                setFormData({...formData, current:!current});
                toggleDisabled(!toDateDisabled)
            }} /> Current Job
          </p>
        </div>
        <div className="create-profile-input">
          <small className="smallDesc">
            <em>To date</em>
          </small>
          <input type="date" name="to" value={to} onChange={e=> onChange(e)} disabled={toDateDisabled ? 'disabled' : ''} />
        </div>
        <div className="create-profile-input">
          <small className="smallDesc">
            <em>Job Description</em>
          </small>
          <textarea
            name="description"
            placeholder="Description"
            cols="30"
            rows="5"
            value={description} onChange={e=> onChange(e)}
          ></textarea>
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

export default AddExperience;
