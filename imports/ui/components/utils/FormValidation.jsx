import React, { Component } from "react";
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
        var parent = $(element)
          .parent()
          .parent();
        if (parent) {
          $(parent)
            .append(error)
            .css("color", "red");
        } else {
          error.insertAfter(parent).css("color", "red");
        }
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
        var parent = $(element)
          .parent()
          .parent();
        if (parent) {
          $(parent)
            .append(error)
            .css("color", "red");
        } else {
          error.insertAfter(parent).css("color", "red");
        }
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
