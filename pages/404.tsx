import Head from "next/head";
import styles from "../styles/404.module.scss";
import { NextPage } from "next";
import { useEffect } from "react";
import { NextRouter, useRouter } from "next/router";
import { WebsiteUrls } from "../types/enums/index";

const Error: NextPage = () => {
  const router: NextRouter = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push(WebsiteUrls.HOME);
    }, 2000);
  }, [router]);

  return (
    <div className={styles.error}>
      <Head>
        <title>Error</title>
      </Head>
      <h1>Someting error 404</h1>
    </div>
  );
};

export default Error;
