import React, { Component } from "react";

import FormValidation from "../utils/FormValidation";

class TodoForm extends Component {
  onSubmit = () => {
    console.log("ON SUBMIT TODO");
  };

  render() {
    return (
      <FormValidation onHandleSubmit={this.onSubmit}>
        <h1 className="headline">TODO FORM</h1>
      </FormValidation>
    );
  }
}

export default TodoForm;
