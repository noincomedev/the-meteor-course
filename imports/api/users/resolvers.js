import { resultKeyNameFromField } from "apollo-utilities";

export default {
  User: {},
  Query: {
    user(obj, args, { user }) {
      return user;
    }
  }
};
