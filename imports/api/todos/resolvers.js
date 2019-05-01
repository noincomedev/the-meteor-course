import Todos from "./Todos";

export default {
  Query: {
    allTodos(obj, args, context) {
      return Todos.find({}).fetch();
    },
    userTodos(obj, args, { user }) {
      return Todos.find({ owner: user._id }).fetch();
    }
  },
  Todo: {},
  Mutation: {
    createTodo(obj, args, { user }) {
      let _id = Todos.insert({ owner: user._id, ...args });
      return { _id };
    },
    closeTodo(obj, { _id }, context) {
      return Todos.update({ _id }, { $set: { done: true } });
    }
  }
};
