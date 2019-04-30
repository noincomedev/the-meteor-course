import {Meteor} from 'meteor/meteor'
import {render} from 'react-dom'
import React from  'react'

import "../../ui/App.js"
Meteor.startup( () =>{
   console.log("Meteor start up");
   render( <App /> , document.getElementById("app") );
});