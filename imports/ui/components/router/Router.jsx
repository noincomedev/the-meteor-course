import React from "react";
import gql from "graphql-tag";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { graphql } from "react-apollo";

import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

import AddTodo from "../../pages/AddTodoPage";
import Home from "../../pages/HomePage";
import Index from "../../pages/IndexPage";
import NotFound from "../../pages/NotFoundPage";

const Router = ({ loading, user }) => {
  if (loading) return <h1>LOADING</h1>;
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={Meteor.settings.public.router.index.PATH}>
          {user ? (
            <PrivateRoute
              exact
              path={Meteor.settings.public.router.index.PATH}
              name={Meteor.settings.public.router.index.NAME}
              title={Meteor.settings.public.router.index.TITLE}
              content={Meteor.settings.public.router.index.CONTENT}
              component={Home}
            />
          ) : (
            <PublicRoute
              exact
              path={Meteor.settings.public.router.index.PATH}
              name={Meteor.settings.public.router.index.NAME}
              title={Meteor.settings.public.router.index.TITLE}
              content={Meteor.settings.public.router.index.CONTENT}
              component={Index}
            />
          )}
        </Route>
        <PrivateRoute
          exact
          path={Meteor.settings.public.router.private_routes.add_todo.PATH}
          name={Meteor.settings.public.router.private_routes.add_todo.NAME}
          title={Meteor.settings.public.router.private_routes.add_todo.TITLE}
          content={
            Meteor.settings.public.router.private_routes.add_todo.CONTENT
          }
          component={AddTodo}
        />
        <PublicRoute
          name={Meteor.settings.public.router.public_routes.not_found.NAME}
          title={Meteor.settings.public.router.public_routes.not_found.TITLE}
          content={
            Meteor.settings.public.router.public_routes.not_found.CONTENT
          }
          component={NotFound}
        />
      </Switch>
    </BrowserRouter>
  );
};

const CURRENT_USER = gql`
  query user {
    user {
      _id
    }
  }
`;

export default graphql(CURRENT_USER, {
  options: {
    fetchPolicy: "cache-and-network"
  },
  props: ({ data }) => ({ ...data })
})(Router);
