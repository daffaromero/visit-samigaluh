import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://visitsamigaluh.local/graphql",
  cache: new InMemoryCache(),
});

export default client;
