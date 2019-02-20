
import React, { PureComponent } from 'react';
import { QueryResult } from 'react-apollo';
import { TodosData } from '../Todos';

class TodosView extends PureComponent<QueryResult<TodosData>> {
  public render() {
    const { error, loading, data } = this.props;
    if (loading) {
      return <div>fetching</div>;
    }
    if (error || data === undefined) {
      return <div>errored</div>;
    }
    const todos = data.todos;
    return (
      <ul>
        {todos.map(todo => <li key={todo.id}>{todo.title}</li>)}
      </ul>
    )
  }
}

export default TodosView;
