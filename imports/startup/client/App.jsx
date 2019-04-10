import React from "react";
import { Accounts } from "meteor/accounts-base";
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";

import { Query } from "react-apollo";
import gql from "graphql-tag";

const client = new ApolloClient({
  uri: "/graphql",
  request: operation =>
    operation.setContext(() => ({
      headers: {
        authorization: Accounts._storedLoginToken()
      }
    }))
});

const ROOT_QUERY = gql`
  query rootQuery {
    user {
      _id
      name
    }
  }
`;

export default () => (
  <ApolloProvider client={client}>
    <h1>Hello APOLLO</h1>
  </ApolloProvider>
);
