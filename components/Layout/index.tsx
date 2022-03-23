import { FC } from "react";
import Footer from "../Footer";
import Header from "../Header";
import styles from "./index.module.scss";

const Layout: FC = ({ children }) => {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
