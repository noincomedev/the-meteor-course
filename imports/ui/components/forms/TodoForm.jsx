import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { withRouter } from "react-router-dom";

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
    const { history } = this.props;
    const { taskName } = this.state;
    this.props
      .createTodo({
        variables: { taskName },
        refetchQueries: "allTodos"
      })
      .then(() => history.push(Meteor.settings.public.router.index.PATH));
  };

  render() {
    const { taskName } = this.state;
    return (
      <FormValidation onHandleSubmit={this.onSubmit}>
        <div className="container col align-items-center paper">
          <input
            type="text"
            className="input-text"
            required
            placeholder={
              Meteor.settings.public.forms.add_todo.input.PLACEHOLDER
            }
            name="taskName"
            value={taskName}
            onChange={this.handleChange}
          />
          <input
            className="button-primary"
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
})(withRouter(TodoForm));
