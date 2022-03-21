import { FC } from "react";
import { menu } from "utils/navigate";
import { INavigate } from "types/navigate";
import Svg from "SVG";
import styles from "./index.module.scss";
import Navbar from "./Navbar";
import Search from "./Search";
import User from "./User";

const Header: FC = () => {
  const isAuth = false;

  return (
    <div className={styles.header}>
      <div className={styles.header__left}>
        <Svg id="logo" />
        <Search />
      </div>
      {isAuth ? (
        <button>Sign Up</button>
      ) : (
        <div className={styles.header__right}>
          <div className={styles.header__group}>
            {menu.map((item: INavigate) => (
              <Navbar key={item.id} item={item} />
            ))}
          </div>
          <User />
        </div>
      )}
    </div>
  );
};

export default Header;
