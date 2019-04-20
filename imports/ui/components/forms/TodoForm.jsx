import React, { Component } from "react";

import FormValidation from "../utils/FormValidation";

class TodoForm extends Component {
  onSubmit = () => {
    console.log("TRIGGER CREATE TODO MUTATION");
  };

  render() {
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

export default TodoForm;
