import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Spinner from "../layout/Spinner";
import PostItem from "../posts/PostItem";
import { getPost } from "../../actions/post";
import CommentForm from "./CommentForm";
import CommentItem from "./CommentItem";

const Post = () => {
  const postState = useSelector((state) => state.post);
  const { id } = useParams();
  const dispatch = useDispatch();
  const { post, loading } = postState;
  useEffect(() => {
    dispatch(getPost(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return loading || post === null ? (
    <Spinner />
  ) : (
    <section className="dash">
      <PostItem showActions={false} post={post} />
      <CommentForm postId={post._id} />
      {post.comments.map((comment) => (
        <CommentItem key={comment._id} comment={comment} postId={post._id} />
      ))}
    </section>
  );
};

export default Post;
