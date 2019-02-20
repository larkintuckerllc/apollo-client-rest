import gql from 'graphql-tag';

export const GET_TODOS = gql`
  query {
    todos @rest(type: "Todo", path: "todos/") {
      id
      title
    }
  }
`;

export const ADD_TODO = gql`
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

export interface Todo {
  id: number;
  title: string;
}

export interface TodosData {
  todos: Todo[];
}

export interface AddTodoData {
  addTodo: Todo;
}

export interface AddTodoInput {
  title: String;
}
