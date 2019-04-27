import Todos from "./Todos";

export default {
  Query: {},
  Todo: {},
  Mutation: {
    createTodo(obj, args, context) {
      return Todos.insert({ ...args });
    }
  }
};
