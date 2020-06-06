import React from "react";
import { Switch, Route } from "react-router-dom";
import Features from "../components/features/Features";
import Questions from "../components/Questions";
import Blog from "../components/blog/Blog";
import CreatePost from "../components/blog/CreatePost";
import AllBlogPostsList from "../components/blog/AllBlogPostsList";
import BlogPostDetailed from "../components/blog/BlogPostDetailed";
import People from "../components/people/People";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Features} />
      <Route path="/blog" component={Blog} />
      <Route path="/People" component={People} />
      <Route path="/questions" component={Questions} />
      <Route path="/createpost" component={CreatePost} />
      <Route path="/allposts" component={AllBlogPostsList} />
      <Route path="/posts/:id" component={BlogPostDetailed} />
    </Switch>
  );
};

export default Routes;
