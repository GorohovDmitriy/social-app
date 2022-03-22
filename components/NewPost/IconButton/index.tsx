import { FC, ReactNode } from "react";
import styles from "../index.module.scss";

interface IconButtonProps {
  svg: ReactNode;
}

const IconButton: FC<IconButtonProps> = ({ svg }) => {
  return (
    <button className={styles.post__btn}>
      <div className={styles.post__btn__icon}>{svg}</div>
    </button>
  );
};

export default IconButton;
