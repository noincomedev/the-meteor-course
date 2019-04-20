import React from "react";
import gql from "graphql-tag";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { graphql } from "react-apollo";

import Index from "../../pages/IndexPage";

const Router = ({ loading, user }) => {
  if (loading) return <h1>LOADING</h1>;
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Index} />
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
