import React from 'react';
import { Query, QueryResult } from 'react-apollo';
import TodosView from './TodosView';
import { GET_TODOS, TodosData } from '../../apis/todos';

class TodosQuery extends Query<TodosData> {}

const Todos = () => (
  <TodosQuery query={GET_TODOS}>
    {({ data, error, loading }: QueryResult<TodosData>) => <TodosView data={data} error={error !== undefined} loading={loading} />}
  </TodosQuery>
);

export default Todos;
