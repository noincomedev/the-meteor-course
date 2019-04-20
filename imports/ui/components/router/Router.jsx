import React from "react";
import gql from "graphql-tag";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { graphql } from "react-apollo";

import PublicRoute from "./PublicRoute";

import AddTodo from "../../pages/AddTodoPage";
import Index from "../../pages/IndexPage";

const Router = ({ loading, user }) => {
  if (loading) return <h1>LOADING</h1>;
  return (
    <BrowserRouter>
      <Switch>
        <PublicRoute
          exact
          path={Meteor.settings.public.router.public_routes.index.PATH}
          name={Meteor.settings.public.router.public_routes.index.NAME}
          title={Meteor.settings.public.router.public_routes.index.TITLE}
          content={Meteor.settings.public.router.public_routes.index.CONTENT}
          component={Index}
        />
        <PublicRoute
          exact
          path={Meteor.settings.public.router.public_routes.add_todo.PATH}
          name={Meteor.settings.public.router.public_routes.add_todo.NAME}
          title={Meteor.settings.public.router.public_routes.add_todo.TITLE}
          content={Meteor.settings.public.router.public_routes.add_todo.CONTENT}
          component={AddTodo}
        />
      </Switch>
    </BrowserRouter>
  );
};

const CURRENT_USER = gql`
  query currentUser {
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
