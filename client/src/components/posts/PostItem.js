import React, { Fragment } from "react";
import "./Posts.css";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { addLike, removeLike, deletePost } from "../../actions/post";

import trashAsset from "../../img/assets/trash.svg";
import likeAsset from "../../img/assets/like.svg";
import dislikeAsset from "../../img/assets/dislike.svg";
import commentAsset from "../../img/assets/comment.svg";

const PostItem = ({
  post: { _id, text, firstName, lastName, avatar, user, likes, comments, date },
  showActions,
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
            onClick={(e) => dispatch(deletePost(_id))}
            type="button"
          >
            <div className="del-post-btn-inner">
              <img
                src={trashAsset}
                alt="delete post"
                className="del-post-icon"
              />
              <span className="del-post-txt">Delete Post</span>
            </div>
          </button>
        )}
      </div>
      <hr />
      <p className="post-text">{text}</p>
      <hr />
      <div className="post-footer">
        <div className="dynamic">
          {showActions && (
            <Fragment>
              <button
                className="post-box"
                onClick={(e) => dispatch(addLike(_id))}
                type="button"
              >
                <img src={likeAsset} alt="like icon" className="post-icons" />
                {likes.length > 0 && <span>{likes.length}</span>}
              </button>
              <button
                className="post-box"
                onClick={(e) => dispatch(removeLike(_id))}
                type="button"
              >
                <img
                  src={dislikeAsset}
                  alt="dislike icon"
                  className="post-icons"
                />
              </button>
              <Link to={`/post/${_id}`} style={{ textDecoration: "none" }}>
                <button className="post-box">
                  <img
                    src={commentAsset}
                    alt="comment icon"
                    className="post-icons"
                  />
                  {
                    <span>
                      <span className="comment-txt">Comments</span>{" "}
                      {comments.length}
                    </span>
                  }
                </button>
              </Link>
            </Fragment>
          )}
        </div>
        <p className="post-date">
          Posted on <Moment format="DD/MM/YYYY">{date}</Moment>
        </p>
      </div>
    </div>
  );
};

PostItem.defaultProps = {
  showActions: true,
};

export default PostItem;
