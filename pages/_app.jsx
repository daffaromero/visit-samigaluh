import React from "react";
import Head from "next/head";

import { ApolloProvider } from "@apollo/client";
import client from "@/lib/apollo";

import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Head>
        <title>Visit Sidoharjo</title>
        <link rel='icon' href='/logo-bw.png' />
      </Head>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
