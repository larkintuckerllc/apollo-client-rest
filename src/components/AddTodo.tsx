import React, { ChangeEvent, FormEvent, PureComponent } from 'react';

class AddTodo extends PureComponent {
  public state = {
    title: '',
  };

  public render() {
    const { title } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleChange} value={title} />
        <button type="submit">Add</button>
      </form>
    );
  }

  private handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const title = e.target.value;
    this.setState({ title });
  }

  private handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    const { title } = this.state;
    e.preventDefault();
    console.log(title);
    this.setState({ title: '' });
  };
}

export default AddTodo;
