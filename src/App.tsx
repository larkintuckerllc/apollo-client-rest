import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { RestLink } from 'apollo-link-rest';
import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';
import logo from './logo.svg';
import './App.css';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';

const URI = 'https://jsonplaceholder.typicode.com/';

const restLink = new RestLink({ uri: URI });
const client = new ApolloClient({
  link: restLink,
  cache: new InMemoryCache(),
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
            <AddTodo />
            <Todos />
          </header>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
