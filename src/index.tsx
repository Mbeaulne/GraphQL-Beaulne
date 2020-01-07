import React from "react";
import ReactDOM from "react-dom";

import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { ApolloProvider } from "@apollo/client";
import { resolvers } from "./resolvers";

import Router from "./router";

import * as serviceWorker from "./serviceWorker";

import "./index.css";

// const client = new ApolloClient({ uri: 'https://nx9zvp49q7.lp.gql.zone/graphql' });

const client = new ApolloClient({
  cache: new InMemoryCache({}),
  link: new HttpLink({
    uri: "https://graphql-pokemon.now.sh"
  }),
  resolvers: resolvers as any
});

const ApolloApp = (AppComponent: any) => (
  <ApolloProvider client={client}>
    <AppComponent />
  </ApolloProvider>
);

ReactDOM.render(ApolloApp(Router), document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
