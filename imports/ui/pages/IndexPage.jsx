import React from "react";

import Todos from "../components/lists/todos/List";

const TODOS = [
  { _id: "asd123", title: "sdjfasd", done: false },
  { _id: "asd124", title: "TODO1", done: false }
];

export default () => <Todos todos={TODOS} />;
