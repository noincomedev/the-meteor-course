import { Meteor } from "meteor/meteor";
import { render } from "react-dom";
import React from "react";

Meteor.startup(() => {
  render(<h1>Hello React</h1>, document.getElementById("react-root"));
});
