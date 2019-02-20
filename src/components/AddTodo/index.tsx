import gql from "graphql-tag";
import React from 'react';
import { Mutation } from "react-apollo";
import AddTodoForm from './AddTodoForm';

const ADD_TODO = gql`
  mutation addTodo($title: String!) {
    addTodo(input: {
      title: $title,
    })
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

interface Todo {
  id: number;
  title: string;
}
export interface AddTodoData {
  addTodo: Todo;
}

export interface AddTodoInput {
  title: String;
}

class AddTodoMutation extends Mutation<AddTodoData, AddTodoInput> {};

const AddTodo = () => (
  <AddTodoMutation
    mutation={ADD_TODO}
    update={(cache, { data }) => {
      if (data === undefined) {
        return;
      }
      console.log('UPDATE');
      console.log(data);
      /*
      const { todos } = cache.readQuery({ query: GET_TODOS });
      cache.writeQuery({
        query: GET_TODOS,
        data: { todos: todos.concat([addTodo]) },
      });
      */
    }}
  >
    {(addTodo, { error, loading }) => (
        <AddTodoForm
          addTodo={addTodo}
          error={error !== undefined}
          loading={loading}
        />
    )}
  </AddTodoMutation>
);

export default AddTodo;
