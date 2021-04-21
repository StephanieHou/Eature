import React from "react"
import App from "./App"
import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client"
import { ApolloProvider } from "@apollo/client/react"

const { REACT_APP_STEPZEN_API_KEY, REACT_APP_STEPZEN_URI } = process.env

const client = new ApolloClient({
  link: createHttpLink({
    credentials: "same-origin",
    headers: {
      Authorization: `Apikey ${REACT_APP_STEPZEN_API_KEY}`,
    },
    uri: REACT_APP_STEPZEN_URI,
  }),
  cache: new InMemoryCache(),
})

export default (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
)
