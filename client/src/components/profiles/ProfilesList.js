import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Spinner from "../layout/Spinner";
import ProfilesItem from "../dashboard/ProfilesItem";
import { getAllProfiles } from "../../actions/profile";

import "../dashboard/Dashboard.css";

const ProfilesList = () => {
  const dispatch = useDispatch();
  const Profile = useSelector((state) => state.profile);
  const { profiles, loading } = Profile;
  useEffect(() => {
    dispatch(getAllProfiles());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <section className="dash">
      {loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <h1 className="dash-title">Community</h1>
          <p style={{ marginBottom: "20px" }}>
            Connect with other creatives around the world.
          </p>
          <div className="profilesList">
            {profiles.length > 0 ? (
              profiles.map((profile) => (
                <ProfilesItem
                  key={profile._id}
                  profile={profile}
                  user={profile.user}
                />
              ))
            ) : (
              <h3>There are no profiles found...</h3>
            )}
          </div>
        </Fragment>
      )}
    </section>
  );
};

export default ProfilesList;
