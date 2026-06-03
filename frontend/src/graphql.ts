import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core'

// Apontamos para a porta onde o teu servidor GraphQL está a correr
const httpLink = createHttpLink({
  uri: 'http://localhost:4002/',
})

// O Cache ajuda o site a ser muito mais rápido, não pedindo dados repetidos
const cache = new InMemoryCache()

export const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
})