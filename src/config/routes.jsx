import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";

const Homepage = lazy(() => import("../pages/homepage"));

const routes = [
  <Route
    key="homepage"
    title="Homepage"
    component={props => <Homepage {...props} />}
    path="/"
    exact
  />,
  <Route
    title="Not found"
    key="notFound"
    component={() => <div>Page not found!</div>}
    path="*"
    exact
  />
];

const Routes = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Switch>{routes}</Switch>
  </Suspense>
);

export default Routes;
