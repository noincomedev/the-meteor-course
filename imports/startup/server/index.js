import { Meteor } from "meteor/meteor";

import "./accounts";
import "./api";

Meteor.startup(() => {
  console.log("SERVER STARTED");
});
