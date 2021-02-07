import React from "react";
import { useSelector } from "react-redux";

import facebook from "../../img/facebook.svg";
import instagram from "../../img/insta.svg";
import linkedin from "../../img/linkedin.svg";
import twitter from "../../img/twitter.svg";
import website from "../../img/website.svg";
import youtube from "../../img/youtube.svg";

const SocialLinks = () => {
  const Profile = useSelector((state) => state.profile);
  const { profile } = Profile;
  return (
    <>
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
          <img src={instagram} alt="instagram icon" width="25px" />
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
    </>
  );
};

export default SocialLinks;
