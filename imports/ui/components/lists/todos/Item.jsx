import React from "react";

export default ({ _id, title, done }) => (
  <div className="container col-1-3 todo align-items-center justify-space-bet">
    <h1 className="todo-title">{title}</h1>
    {!done && (
      <button onClick={event => console.log("CLOSE TODO")}>
        {Meteor.settings.public.constants.lists.todos.item.ACTION_BTN_LBL}
      </button>
    )}
  </div>
);
