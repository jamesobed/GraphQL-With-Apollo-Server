import { gql } from "apollo-server";
const myTypeDef = gql`
  type Todo {
    id: ID
    task: String
    age: String
    completed: Boolean
  }
  input TodoInput {
    task: String!
    age: String!
    completed: Boolean!
  }

  type Query {
    todos: [Todo]
    todoById(id: ID!): Todo
  }
  type Mutation {
    addTodo(todo: TodoInput): Todo
    deleteTodo(id: ID!): Todo
    updateTodo(id: ID!, todo: TodoInput): Todo
  }
`;
export default myTypeDef;
//
