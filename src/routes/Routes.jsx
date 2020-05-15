import React from "react";
import { Switch, Route } from "react-router-dom";
import Features from "../components/features/Features";
import Blog from "../components/Blog";
import Questions from "../components/Questions";
import People from "../components/People";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Features} />
      <Route path="/blog" component={Blog} />
      <Route path="/People" component={People} />
      <Route path="/questions" component={Questions} />
    </Switch>
  );
};

export default Routes;
