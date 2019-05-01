import { Mongo } from "meteor/mongo";
import SimpleSchema from "simpl-schema";

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
    type: String,
    optional: false
  },
  owner: {
    type: String,
    optional: false
  },
  taskName: {
    type: String,
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
  },
  done: {
    type: Boolean,
    label: "done",
    optional: false,
    autoValue() {
      if (this.isInsert) return false;
    }
  }
});

Todos.attachSchema(Todos.schema);

export default Todos;
