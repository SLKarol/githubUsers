import React from "react";
import ReactDOM from "react-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
} from "@apollo/client";

import "./index.css";
import App from "components/template/App";
import * as serviceWorker from "./serviceWorker";

const token = "YOUR TOKEN";

const httpLink = {
  uri: "https://api.github.com/graphql",
  headers: {
    authorization: `Bearer ${token}`,
  },
};

/**
 * Настройка клиента
 */
const client = new ApolloClient({
  link: new HttpLink(httpLink),
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ApolloProvider>,
  document.getElementById("root")
);

serviceWorker.register();
