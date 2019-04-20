import React from "react";

import Todos from "../components/lists/todos/List";

const TODOS = [{ _id: "asd123", title: "TODO1", done: false }];

export default () => (
  <div className="container col">
    <nav className="nav">
      <h1 className="headline">
        {Meteor.settings.public.constants.pages.index.HEADLINE}
      </h1>
    </nav>
    <Todos todos={TODOS} />
  </div>
);
