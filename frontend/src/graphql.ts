import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client/core';

// 1. Criamos o link HTTP separadamente
const httpLink = new HttpLink({
  uri: 'http://localhost:4002/graphql',
});

// 2. Passamos o link e o cache para o cliente
export const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});