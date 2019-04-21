import { Mongo } from "meteor/mongo";

const Todos = new Mongo.Collection("todos");

Todos.allow({
  insert: () => false,
  update: () => false,
  remove: () => false
});

Todos.deny({
  insert: () => true,
  update: () => true,
  remove: () => true
});

Todos.schema = new SimpleSchema({
  _id: {
    type: "String",
    optional: false
  },
  taskName: {
    type: "String",
    optional: false
  },
  createdAt: {
    type: String,
    label: "The date this venue was created.",
    autoValue() {
      if (this.isInsert) return new Date().toISOString();
    }
  },
  updatedAt: {
    type: String,
    label: "The date this venue was last updated.",
    optional: false,
    autoValue() {
      if (this.isInsert || this.isUpdate) return new Date().toISOString();
    }
  }
});

Todos.attachSchema(Todos.schema);

export default Todos;
