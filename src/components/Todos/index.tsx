import gql from 'graphql-tag';
import React from 'react';
import { Query, QueryResult } from 'react-apollo';
import TodosView from './TodosView';

export const GET_TODOS = gql`
  query {
    todos @rest(type: "Todo", path: "todos/") {
      id
      title
    }
  }
`;

interface Todo {
  id: number;
  title: string;
}

export interface TodosData {
  todos: Todo[];
}

class TodosQuery extends Query<TodosData> {}

const Todos = () => (
  <TodosQuery query={GET_TODOS}>
    {({...props}: QueryResult<TodosData>) => <TodosView {...props} />}
  </TodosQuery>
);

export default Todos;
