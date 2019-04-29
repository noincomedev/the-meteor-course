import {Meteor} from 'meteor/meteor'
import {render} from 'react-dom'
import React from  'react'

Meteor.startup( () =>{
   console.log("Meteor start up");
   render(<h1>Mr React </h1>, document.getElementById("App") );
});