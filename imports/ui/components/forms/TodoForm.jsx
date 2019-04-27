import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

import FormValidation from "../utils/FormValidation";

class TodoForm extends Component {
  state = {
    taskName: ""
  };

  handleChange = event => {
    let name = event.target.name,
      value = event.target.value;
    this.setState({ [name]: value });
  };

  onSubmit = () => {
    const { taskName } = this.state;
    this.props
      .createTodo({ variables: { taskName } })
      .then(console.log("TODO CREATED"));
  };

  render() {
    const { taskName } = this.state;
    return (
      <FormValidation onHandleSubmit={this.onSubmit}>
        <div className="container col align-items-center">
          <input
            type="text"
            className="input-text"
            required
            placeholder={
              Meteor.settings.public.forms.add_todo.input.PLACEHOLDER
            }
            name="taskName"
            onChange={this.handleChange}
          />
          <input
            className="button"
            type="submit"
            value={Meteor.settings.public.forms.add_todo.submit.LABEL}
          />
        </div>
      </FormValidation>
    );
  }
}

const CREATE_TODO = gql`
  mutation createTodo($taskName: String!) {
    createTodo(taskName: $taskName) {
      _id
    }
  }
`;

export default graphql(CREATE_TODO, {
  name: "createTodo",
  options: {
    refetchQueries: ["allTodos"]
  }
})(TodoForm);
