import React from "react";

import SocialLinks from "./SocialLinks";

import "./Dashboard.css";

const ProfileInfo = ({ profile, user }) => {
  return (
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

      {profile && <p className="user">{profile.bio}</p>}
      {profile && <p className="user">{profile.company}</p>}
      {profile && <p className="user">{profile.location}</p>}

      <div className="social">
        <SocialLinks profile={profile} />
      </div>
    </div>
  );
};

export default ProfileInfo;
