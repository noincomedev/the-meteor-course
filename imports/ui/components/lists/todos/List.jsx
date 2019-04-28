import React from "react";
import { withRouter } from "react-router-dom";

import Item from "./Item";

export default withRouter(({ history, todos }) => (
  <div className="container col align-items-center">
    {todos.length > 0
      ? todos.map(todo => <Item key={todo._id} {...todo} />)
      : history.push(Meteor.settings.public.router.public_routes.add_todo.PATH)}
  </div>
));
