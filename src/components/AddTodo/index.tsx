import React from 'react';
import { Mutation } from "react-apollo";
import AddTodoForm from './AddTodoForm';
import {
  AddTodoData,
  AddTodoInput,
  ADD_TODO,
  GET_TODOS,
  TodosData,
} from '../../apis/todos';

class AddTodoMutation extends Mutation<AddTodoData, AddTodoInput> {};

const AddTodo = () => (
  <AddTodoMutation
    mutation={ADD_TODO}
    update={(cache, { data }) => {
      if (data === undefined) {
        return;
      }
      const todosData = cache.readQuery<TodosData>({ query: GET_TODOS });
      if (todosData === null) {
        return;
      }
      const { todos } = todosData;
      const { addTodo } = data;
      cache.writeQuery({
        query: GET_TODOS,
        data: { todos: [...todos, addTodo] },
      });
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
