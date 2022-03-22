import Layout from "@/components/Layout";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import "../styles/index.scss";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}
