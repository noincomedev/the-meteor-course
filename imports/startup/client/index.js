import { Meteor } from "meteor/meteor";

Meteor.startup(() => {
  console.log("METEOR STARTED CLIENT SIDE");
  console.log(
    "You should read this on browser devtool console, because we are loggin client side!"
  );
  console.log("https://docs.meteor.com/api/core.html#Meteor-startup");
});
