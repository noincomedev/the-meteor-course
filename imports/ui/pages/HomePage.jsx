import React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";

import Todos from "../components/lists/todos/List";

const USER_TODOS = gql`
  query userTodos {
    userTodos {
      _id
      taskName
      done
    }
  }
`;

export default () => (
  <Query query={USER_TODOS} fetchPolicy="network-only">
    {({ error, loading, data }) => {
      if (loading) return <h1>LOADING</h1>;
      if (error) return `Error: ${error}`;
      const { userTodos } = data;
      return <Todos todos={userTodos} />;
    }}
  </Query>
);
