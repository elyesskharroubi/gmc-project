import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Spinner from "../layout/Spinner";
import { getPosts } from "../../actions/post";

import PostItem from "./PostItem";
import PostForm from "./PostForm";

const Posts = () => {
  const post = useSelector((state) => state.post);
  const { posts, loading } = post;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return loading ? (
    <Spinner />
  ) : (
    <section className="dash">
      <h1 className="dash-title">Posts</h1>
      <p>See what people are saying</p>
      <PostForm />
      {posts.map((post) => (
        <PostItem key={post._id} post={post} />
      ))}
    </section>
  );
};

export default Posts;
