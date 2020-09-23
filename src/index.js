import React from 'react';
import { render } from 'react-dom';
import { ApolloProvider } from '@apollo/react-hooks';

import ApolloClient from 'apollo-client';
import { InMemoryCache } from "apollo-cache-inmemory";
import { createHttpLink } from "apollo-link-http";

import Users from './Users'

const client = new ApolloClient({
  link: createHttpLink({ uri: "http://18.134.13.114/graphql/" }),
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
      <h1>React + Apollo Hooks</h1>
      <Users />
    </ApolloProvider>
  );
}

render(<App />, document.getElementById('root'));
     