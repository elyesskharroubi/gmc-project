import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getCurrentProfile } from "../../actions/profile";
import DashboardActions from "./DashboardActions";

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
    <section className="dash">
      {loading && profile === null ? (
        <Spinner />
      ) : (
        <Fragment>
          <h1 className="dash-title">Welcome {user && user.firstName}</h1>
          <div className="dashboardContainer">
            {profile !== null ? (
              <div className="dashContent">
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
                  <p className="user">{profile.status}</p>
                  <p className="user">{profile.location}</p>
                  <div className="social">
                    <SocialLinks profile={profile} />
                  </div>
                </div>
                <div className="dashboard-content">
                  <DashboardActions />
                </div>
              </div>
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
