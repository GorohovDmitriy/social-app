import Content from "@/components/Content";
import { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home page</title>
      </Head>
      <Content>Home page</Content>
    </>
  );
};

export default Home;
