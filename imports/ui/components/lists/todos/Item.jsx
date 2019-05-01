import React from "react";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";

const CLOSE_TODO = gql`
  mutation closeTodo($_id: ID!) {
    closeTodo(_id: $_id) {
      _id
    }
  }
`;

export default ({ _id, taskName, done }) => (
  <Mutation mutation={CLOSE_TODO}>
    {(closeTodo, { data, loading, error }) => {
      if (loading) return <h1>LOADING</h1>;
      if (error) return `Error: ${error}`;
      return (
        <div className="container col-1-3 todo align-items-center justify-space-bet paper">
          <h1 className="todo-title">{taskName}</h1>
          {!done && (
            <button
              className="button-secondary"
              onClick={event =>
                closeTodo({
                  variables: { _id },
                  refetchQueries: ["allTodos"]
                })
              }
            >
              {Meteor.settings.public.constants.lists.todos.item.ACTION_BTN_LBL}
            </button>
          )}
        </div>
      );
    }}
  </Mutation>
);
