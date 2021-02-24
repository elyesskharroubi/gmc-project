import React from "react";
import Moment from "react-moment";
import { useSelector, useDispatch } from "react-redux";
import { deleteEducation } from "../../actions/profile";

const Education = () => {
  const profileState = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  const { profile } = profileState;
  const { education } = profile;
  const edus = education.map((edu) => (
    <div key={edu._id} className="listItem">
      <li>{edu.school}</li>
      <li>{edu.degree}</li>
      <li>
        <span></span>
      </li>
      <li>
        <Moment format="MM/YYYY">{edu.from}</Moment> -{" "}
        {edu.to === null ? " Now" : <Moment format="MM/YYYY">{edu.to}</Moment>}
      </li>
      <li>
        <button
          className="deleteBtn"
          onClick={() => dispatch(deleteEducation(edu._id))}
        >
          X
        </button>
      </li>
    </div>
  ));

  return (
    <>
      <h1 style={{ fontSize: "18px", marginTop: "25px" }}>EDUCATION</h1>
      <hr />
      {education.length > 0 ? (
        <ul>{edus}</ul>
      ) : (
        <p
          style={{
            textAlign: "center",
            padding: "10px 0",
            letterSpacing: "4px",
            opacity: ".5",
          }}
        >
          YOU HAVE NO EDUCATION..
        </p>
      )}
      <hr />
    </>
  );
};

export default Education;
