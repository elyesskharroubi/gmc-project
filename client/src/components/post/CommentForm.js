import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {addComment} from '../../actions/post'

const CommentForm = ({ postId }) => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  return (
    <div className="post-container">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(addComment(postId, { text }));
          setText("");
        }}
      >
        <div className="add-post-input">
          <textarea
            name="text"
            rows="2"
            value={text}
            placeholder="Add a comment on this post..."
            onChange={(e) => setText(e.target.value)}
            required
          ></textarea>
          <button className="add-post-btn" type="submit">
            Add Comment
          </button>
        </div>
      </form>
    </div>
  );
};

export default CommentForm;
