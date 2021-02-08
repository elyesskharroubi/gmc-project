import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { createProfile, getCurrentProfile } from "../../actions/profile";

import "../auth/Auth.css";
import "../dashboard/Dashboard.css";

const EditProfile = () => {
  const Profile = useSelector((state) => state.profile);
  const { profile, loading } = Profile;

  const history = useHistory();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    bio: "",
    status: "",
    company: "",
    location: "",
    website: "",
    facebook: "",
    instagram: "",
    linkedin: "",
    twitter: "",
    youtube: "",
  });

  useEffect(() => {
    dispatch(getCurrentProfile());
    setFormData({
      bio: loading || !profile.bio ? "" : profile.bio,
      status: loading || !profile.status ? "" : profile.status,
      company: loading || !profile.company ? "" : profile.company,
      location: loading || !profile.location ? "" : profile.location,
      website: loading || !profile.website ? "" : profile.website,
      facebook: loading || !profile.social ? "" : profile.social.facebook,
      instagram: loading || !profile.social ? "" : profile.social.instagram,
      linkedin: loading || !profile.social ? "" : profile.social.linkedin,
      twitter: loading || !profile.social ? "" : profile.social.twitter,
      youtube: loading || !profile.social ? "" : profile.social.youtube,
    });
  }, [loading]);

  const {
    bio,
    status,
    company,
    location,
    website,
    facebook,
    instagram,
    twitter,
    linkedin,
    youtube,
  } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(createProfile(formData, history, true));
  };
  return (
    <section className="container">
      <form className="profileForm" onSubmit={(e) => onSubmit(e)}>
        <h1 style={{ fontSize: "30px" }}>Setup Your Profile</h1>
        <p className="text">Make it personal. Make it stand out.</p>
        <div className="create-profile-input">
          <small className="smallDesc">
            <em>Talk about yourself</em>
          </small>
          <input
            type="text"
            placeholder="Bio"
            name="bio"
            value={bio}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="create-profile-input">
          <small className="smallDesc">
            <em>ex; Logo Designer</em>
          </small>
          <input
            type="text"
            placeholder="Status"
            name="status"
            value={status}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="create-profile-input">
          <small className="smallDesc">
            <em>ex; Media Company</em>
          </small>
          <input
            type="text"
            placeholder="Company"
            name="company"
            value={company}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="create-profile-input">
          <small className="smallDesc">
            <em>ex; Manhattan, NY</em>
          </small>
          <input
            type="text"
            placeholder="Location"
            name="location"
            value={location}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="create-profile-input">
          <small className="smallDesc">
            <em>ex; https://www.yourdomain.com/</em>
          </small>
          <input
            type="text"
            placeholder="Website"
            name="website"
            value={website}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="create-profile-input">
          <small className="smallDesc">
            <em>ex; https://www.facebook.com/yourprofile</em>
          </small>
          <input
            type="text"
            placeholder="Facebook"
            name="facebook"
            value={facebook}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="create-profile-input">
          <small className="smallDesc">
            <em>ex; https://www.instagram.com/yourprofile</em>
          </small>
          <input
            type="text"
            placeholder="Instagram"
            name="instagram"
            value={instagram}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="create-profile-input">
          <small className="smallDesc">
            <em>ex; https://www.linkedin.com/yourprofile</em>
          </small>
          <input
            type="text"
            placeholder="LinkedIn"
            name="linkedin"
            value={linkedin}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="create-profile-input">
          <small className="smallDesc">
            <em>ex; https://www.twitter.com/yourusername</em>
          </small>
          <input
            type="text"
            placeholder="Twitter"
            name="twitter"
            value={twitter}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="create-profile-input">
          <small className="smallDesc">
            <em>ex; https://www.youtube.com/yourchannel</em>
          </small>
          <input
            type="text"
            placeholder="Youtube"
            name="youtube"
            value={youtube}
            onChange={(e) => onChange(e)}
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

export default EditProfile;
