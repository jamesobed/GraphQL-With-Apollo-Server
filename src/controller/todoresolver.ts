import { todoInstance } from "../model/todo";
import { todoTypes } from "../types/todo";
import { v4 as uuidv4 } from "uuid";

export const todoResolver = {
  Query: {
    todos: async () => {
      return await todoInstance.findAll();
    },
  },
  todoById: async (_: unknown, args: todoTypes) => {
    return await todoInstance.findByPk(args.input.id);
  },
  Mutation: {
    addTodo: async (_: unknown, args: todoTypes) => {
      const todo = {
        id: uuidv4(),
        task: args.input.task,
        age: args.input.age,
        completed: args.input.completed,
      };
      return await todoInstance.create(todo);
    },
    deleteTodo: async (_: unknown, args: todoTypes) => {
      return await todoInstance.destroy({
        where: {
          id: args.input.id,
        },
      });
    },
    updateTodo: async (_: unknown, args: todoTypes) => {
      return await todoInstance.update(
        {
          task: args.input.task,
          age: args.input.age,
          completed: args.input.completed,
        },
        {
          where: {
            id: args.input.id,
          },
        }
      );
    },
  },
};
