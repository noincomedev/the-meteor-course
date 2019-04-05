import { Meteor } from "meteor/meteor";

Meteor.startup(() => {
  console.log("SERVER STARTED");
  console.log("==================");
  console.log("WE IMPORTED THE FILE PATH");
  console.log("../imports/startup/server/");
  console.log("on server init.js");
  console.log("but we are loggin from ../imports/startup/server/index.js");
  console.log("WHY?");
  console.log(
    "BECAUSE  METEOR AUTOMATICALLY LOOKS FOR main.js, index.js or init.js in case of JS files"
  );
  console.log("ALSO looks their .css and .html variation.");
  console.log("SO WE CAN IMPORT ../imports/startup/server/index.js");
  console.log("with RELATIVE PATH ../imports/startup/server/");
  console.log("");
  console.log("");
  console.log(
    "All this logging has been server side! So you should have read it from the therminal console!"
  );
  console.log("We are going to stop working server side from now on!");
  console.log("Open your browser on localhost:3000");
  console.log("As we move, we are going to log on CLIENT SIDE");
  console.log("Also open DEVTOOLS CONSOLE of your browser");
  console.log("TO START READING CLIENT SIDE CONSOLE MESSAGES!");
});
