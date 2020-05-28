import React, { Fragment } from "react";
import BlogPostsListItem from "./BlogPostsListItem";

const BlogPostsList = (props) => {
  const { posts } = props;
  var size = 3;
  var postsList = posts
    .slice(0, size)
    .map((post) => <BlogPostsListItem key={post.id} post={post} />);
  return <Fragment>{postsList}</Fragment>;
};

export default BlogPostsList;
