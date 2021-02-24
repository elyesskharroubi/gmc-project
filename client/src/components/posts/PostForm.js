import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../../actions/post";

import './PostForm.css'

const PostForm = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  return (
    <div className="post-container">
      <div className="">
        <h1>What's on your mind ?</h1>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(addPost({ text }));
          setText("");
        }}
      >
        <div className="add-post-input">
          <textarea
            name="text"
            rows="5"
            value={text}
            placeholder="Create a post..."
            onChange={(e) => setText(e.target.value)}
            required
          ></textarea>
          <button className="add-post-btn" type="submit">
            Add Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default PostForm;
