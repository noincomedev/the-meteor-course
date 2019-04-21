export default {
  Query: {},
  Todo: {},
  Mutation: {
    createTodo(obj, args, context) {
      console.log("INSERT TODO ON DB");
    }
  }
};
