import { FC } from "react";
import Content from "../Content";
import Footer from "../Footer";
import Header from "../Header";
import styles from "./index.module.scss";

const Layout: FC = ({ children }) => {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Content>{children}</Content>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
