import React, { Component } from "react";
import $ from "jquery";
import { PropTypes } from "prop-types";

import validate from "../../../modules/validate";

class FormValidation extends Component {
  componentDidMount() {
    const component = this;
    const { rules, messages, theme } = this.props;
    validate(component.form, {
      rules,
      messages,
      errorPlacement: function(error, element) {
        error
          .insertAfter(element)
          .css("color", "red")
          .css("margin-bottom", "16px");
      },
      submitHandler() {
        component.handleSubmit();
      }
    });
  }

  componentDidUpdate(prevProps, prevState) {
    const component = this;
    const { rules, messages } = this.props;
    validate(component.form, {
      rules,
      messages,
      errorPlacement: function(error, element) {
        error.insertAfter(element).css("color", "red");
      },
      submitHandler() {
        component.handleSubmit();
      }
    });
  }

  handleSubmit = event => {
    this.props.onHandleSubmit();
  };

  render() {
    const { style } = this.props;
    return (
      <form
        style={style}
        ref={form => (this.form = form)}
        onSubmit={event => event.preventDefault()}
      >
        {this.props.children}
      </form>
    );
  }
}

FormValidation.propTypes = {
  rules: PropTypes.object,
  messages: PropTypes.object,
  onHandleSubmit: PropTypes.func.isRequired,
  style: PropTypes.object
};

export default FormValidation;
