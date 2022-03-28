import { FC } from "react";
import { menu } from "utils/navigate";
import { INavigate } from "types/navigate";
import { WebsiteUrls } from "types/enums";
import { NextRouter, useRouter } from "next/router";
import Svg from "SVG";
import styles from "./index.module.scss";
import Navbar from "./Navbar";
import Search from "./Search";
import User from "./User";

const Header: FC = () => {
  const router: NextRouter = useRouter();
  return (
    <div className={styles.header}>
      <div className={styles.header__left}>
        <Svg id="logo" />
        <Search />
      </div>
      <div className={styles.header__right}>
        {router.pathname === WebsiteUrls.SIGNUP ? null : (
          <div className={styles.header__group}>
            {menu.map((item: INavigate) => (
              <Navbar key={item.id} item={item} />
            ))}
          </div>
        )}
        <User />
      </div>
    </div>
  );
};

export default Header;
