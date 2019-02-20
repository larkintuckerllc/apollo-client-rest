import gql from "graphql-tag";
import React from 'react';
import { Mutation } from "react-apollo";
import AddTodoForm from './AddTodoForm';

// TYPING
const ADD_TODO = gql`
  mutation addTodo($input: AddTodoInput!) {
    addTodo(input: $input)
    @rest(
      method: "POST",
      path: "todos/",
      type: "Todo",
    ) {
      id
      title
    }
  }
`;

// TYPING
const AddTodo = () => (
  <Mutation mutation={ADD_TODO}>
    {(addTodo, { data }) => {
      return <AddTodoForm addTodo={addTodo} />
    }}
  </Mutation>
);

export default AddTodo;
