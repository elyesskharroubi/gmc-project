import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getCurrentProfile } from "../../actions/profile";

import SocialLinks from "./SocialLinks";
import "./Dashboard.css";

import Spinner from "../layout/Spinner";

const Dashboard = () => {
  const dispatch = useDispatch();
  const Auth = useSelector((state) => state.auth);
  const Profile = useSelector((state) => state.profile);
  const { loading, profile } = Profile;
  const { user } = Auth;

  useEffect(() => {
    dispatch(getCurrentProfile());
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
                    <SocialLinks />
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
