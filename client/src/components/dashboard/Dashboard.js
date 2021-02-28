import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getCurrentProfile } from "../../actions/profile";
import DashboardActions from "./DashboardActions";
import Experience from "./Experience";
import Education from "./Education";
import ProfileInfo from "./ProfileInfo";

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
                <ProfileInfo profile={profile} user={user} />
                <div className="dashboard-content">
                  <DashboardActions />
                  <Experience />
                  <Education />
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
