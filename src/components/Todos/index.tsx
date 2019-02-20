import gql from 'graphql-tag';
import React from 'react';
import { Query, QueryResult } from 'react-apollo';
import TodosView from './TodosView';
import { GET_TODOS, TodosData } from '../../apis/todos';

class TodosQuery extends Query<TodosData> {}

const Todos = () => (
  <TodosQuery query={GET_TODOS}>
    {({...props}: QueryResult<TodosData>) => <TodosView {...props} />}
  </TodosQuery>
);

export default Todos;
