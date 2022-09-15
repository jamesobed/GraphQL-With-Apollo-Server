import { todoResolver } from "../todoresolver";

export default {
  Query: {
    ...todoResolver.Query,
  },
};
