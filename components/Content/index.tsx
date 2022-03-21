import { FC } from "react";
import Left from "../Sidebar/Left";
import Right from "../Sidebar/Right";
import styles from "./index.module.scss";

const Content: FC = ({ children }) => {
  return (
    <div className={styles.content}>
      <Left />
      <div className={styles.center}>{children}</div>
      <Right />
    </div>
  );
};

export default Content;
