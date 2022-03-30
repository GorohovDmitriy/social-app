import Layout from "@/components/Layout";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { ApolloProvider } from "@apollo/client";
import client from "lib/apollo";
import "../styles/index.scss";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ApolloProvider client={client}>
        <ThemeProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </ApolloProvider>
    </>
  );
}
