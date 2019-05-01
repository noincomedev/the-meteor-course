import {Meteor} from 'meteor/meteor'
import {render} from 'react-dom'
import React from  'react'

import App from "../../ui/App"
Meteor.startup( () =>{
   console.log("Meteor start up");
   render( <App /> , document.getElementById("app") );
});