import React, { Fragment } from "react";
import Moment from "react-moment";
import { useSelector, useDispatch } from "react-redux";
import { deleteExperience } from "../../actions/profile";

const Experience = () => {
  const profileState = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  const { profile } = profileState;
  const { experience } = profile;
  const exps = experience.map((exp) => (
    <div key={exp._id} className="listItem">
      <li>{exp.title}</li>
      <li>{exp.company}</li>
      <li>{exp.location}</li>
      <li>
        <Moment format="DD/MM/YYYY">{exp.from}</Moment> -{" "}
        {exp.to === null ? (
          " Now"
        ) : (
          <Moment format="DD/MM/YYYY">{exp.to}</Moment>
        )}
      </li>
      <li>
        <button
          className="deleteBtn"
          onClick={() => dispatch(deleteExperience(exp._id))}
        >
          X
        </button>
      </li>
    </div>
  ));

  return (
    <>
      <h1 style={{ marginTop: "33px" }}>EXPERIENCE</h1>
      <hr />
      {experience.length > 0 ? (
        <ul>{exps}</ul>
      ) : (
        <p
          style={{
            textAlign: "center",
            padding: "10px 0",
            letterSpacing: "4px",
            opacity: ".5",
          }}
        >
          YOU HAVE NO EXPERIENCES..
        </p>
      )}
      <hr />
    </>
  );
};

export default Experience;
