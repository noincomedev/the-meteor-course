import React from "react";

import Item from "./Item";

export default ({ todos }) => (
  <div className="container col align-items-center">
    {todos.map(todo => (
      <Item key={todo._id} {...todo} />
    ))}
  </div>
);
