import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getCurrentProfile } from "../../actions/profile";

import "./Dashboard.css";

import facebook from "../../img/facebook.svg";
import instagram from "../../img/insta.svg";
import linkedin from "../../img/linkedin.svg";
import twitter from "../../img/twitter.svg";
import website from "../../img/website.svg";
import youtube from "../../img/youtube.svg";

import Spinner from "../layout/Spinner";

const Dashboard = () => {
  const dispatch = useDispatch();
  const Auth = useSelector((state) => state.auth);
  const Profile = useSelector((state) => state.profile);
  const { loading, profile } = Profile;
  const { user } = Auth;

  useEffect(() => {
    dispatch(getCurrentProfile());
  }, []);

  return (
    <section className="container dash">
      {loading && profile === null ? (
        <Spinner />
      ) : (
        <Fragment>
          <h1 className="dash-title">Welcome {user && user.firstName}</h1>
          <div className="dashboardContainer">
            {profile !== null ? (
              <Fragment>
                <div className="profileInfo">
                  <img
                    src={user && user.avatar}
                    alt="Avatar"
                    style={{
                      width: "60px",
                      borderRadius: "50%",
                      border: "2px solid #eee",
                      marginBottom: "25px",
                    }}
                  />
                  <p className="userName">
                    {user && user.firstName} {user && user.lastName}
                  </p>
                  <p className="userStatus">{profile.status}</p>
                  <div className="social">
                    {profile.website && (
                      <a
                        href={profile.website}
                        target="_blank"
                        rel="noreferrer"
                        className="socialLink"
                      >
                        <img src={website} alt="website icon" width="25px" />
                      </a>
                    )}
                    {profile.social.facebook && (
                      <a
                        href={profile.social.facebook}
                        target="_blank"
                        rel="noreferrer"
                        className="socialLink"
                      >
                        <img src={facebook} alt="facebook icon" width="25px" />
                      </a>
                    )}
                    {profile.social.instagram && (
                      <a
                        href={profile.social.instagram}
                        target="_blank"
                        rel="noreferrer"
                        className="socialLink"
                      >
                        <img
                          src={instagram}
                          alt="instagram icon"
                          width="25px"
                        />
                      </a>
                    )}
                    {profile.social.linkedin && (
                      <a
                        href={profile.social.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="socialLink"
                      >
                        <img src={linkedin} alt="linkedin icon" width="25px" />
                      </a>
                    )}
                    {profile.social.twitter && (
                      <a
                        href={profile.social.twitter}
                        target="_blank"
                        rel="noreferrer"
                        className="socialLink"
                      >
                        <img src={twitter} alt="twitter icon" width="25px" />
                      </a>
                    )}
                    {profile.social.youtube && (
                      <a
                        href={profile.social.youtube}
                        target="_blank"
                        rel="noreferrer"
                        className="socialLink"
                      >
                        <img src={youtube} alt="youtube icon" width="25px" />
                      </a>
                    )}
                  </div>
                </div>
              </Fragment>
            ) : (
              <Fragment>
                <p style={{ marginBottom: "20px" }}>
                  You haven't setup a profile. Please provide more information.
                </p>
                <Link to="/create-profile" className="primaryBtn">
                  Create Profile
                </Link>
              </Fragment>
            )}
          </div>
        </Fragment>
      )}
    </section>
  );
};

export default Dashboard;
