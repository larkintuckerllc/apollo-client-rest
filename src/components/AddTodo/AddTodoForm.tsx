import React, { ChangeEvent, FormEvent, PureComponent } from 'react';
import { MutationFn } from 'react-apollo';
import { AddTodoData, AddTodoInput } from '../AddTodo';

interface Props {
  addTodo: MutationFn<AddTodoData, AddTodoInput>;
  error: boolean;
  loading: boolean;
}

class AddTodo extends PureComponent<Props> {
  public state = {
    title: '',
  };

  public render() {
    const { error, loading } = this.props;
    const { title } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          disabled={loading}
          onChange={this.handleChange}
          value={title}
        />
        <button
          disabled={loading}
          type="submit"
        >
          Add
        </button>
        {error && <div>Add Failed!</div>}
      </form>
    );
  }

  private handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const title = e.target.value;
    this.setState({ title });
  }

  private handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    const { addTodo } = this.props;
    const { title } = this.state;
    e.preventDefault();
    try {
      await addTodo({ variables: { title } });
      this.setState({ title: '' });
    } catch (e) {
    }
  };
}

export default AddTodo;
