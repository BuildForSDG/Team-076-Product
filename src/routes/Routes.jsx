import React from "react";
import { Switch, Route } from "react-router-dom";
import Features from "../components/features/Features";
import Questions from "../components/Questions";
import People from "../components/People";
import Blog from "../components/blog/Blog";
import CreatePost from "../components/blog/CreatePost";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Features} />
      <Route path="/blog" component={Blog} />
      <Route path="/People" component={People} />
      <Route path="/questions" component={Questions} />
      <Route path="/createpost" component={CreatePost} />
    </Switch>
  );
};

export default Routes;
