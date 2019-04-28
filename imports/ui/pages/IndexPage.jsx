import React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";

import Todos from "../components/lists/todos/List";

const ALL_TODOS = gql`
  query allTodos {
    allTodos {
      _id
      taskName
      done
    }
  }
`;

export default () => (
  <Query query={ALL_TODOS} fetchPolicy="network-only">
    {({ error, loading, data }) => {
      if (loading) return <h1>LOADING</h1>;
      if (error) return `Error: ${error}`;
      const { allTodos } = data;
      return <Todos todos={allTodos} />;
    }}
  </Query>
);
