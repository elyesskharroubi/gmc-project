import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Moment } from "react-moment";
import { deleteComment } from "../../actions/post";

import trashAsset from "../../img/assets/trash.svg";

const CommentItem = ({
  postId,
  comment: { _id, text, firstName, lastName, avatar, user, date },
}) => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  return (
    <div className="post-container">
      <div className="post-header">
        <div className="user-infos">
          <img src={avatar} alt="user avatar" className="user-avatar" />
          <p className="user-fullname">
            {firstName} {lastName}
          </p>
        </div>
        {!auth.loading && user === auth.user._id && (
          <button
            className="del-post-btn"
            type="button"
            onClick={(e) => dispatch(deleteComment(postId, _id))}
          >
            <img src={trashAsset} alt="delete post" className="del-post-icon" />
          </button>
        )}
      </div>
      <hr />
      <p className="post-text">{text}</p>
      <hr />
      <div className="post-footer">
        <p className="post-date">
          Posted on <Moment format="DD/MM/YYYY">{date}</Moment>
        </p>
      </div>
    </div>
  );
};

export default CommentItem;
