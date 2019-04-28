import Todos from "./Todos";

export default {
  Query: {
    allTodos(obj, args, context) {
      return Todos.find({}).fetch();
    }
  },
  Todo: {},
  Mutation: {
    createTodo(obj, args, context) {
      let _id = Todos.insert({ ...args });
      return { _id };
    },
    closeTodo(obj, { _id }, context) {
      return Todos.update({ _id }, { $set: { done: true } });
    }
  }
};
