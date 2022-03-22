import Link from "next/link";
import { FC, ReactNode } from "react";
import { INavigate } from "types/navigate";
import styles from "../index.module.scss";

interface NavbarProps {
  item: INavigate;
}

const Navbar: FC<NavbarProps> = ({ item }) => {
  return (
    <Link href={item.link}>
      <a className={styles.header__icon}>{item.svg}</a>
    </Link>
  );
};

export default Navbar;
