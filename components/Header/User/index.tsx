import Image from "next/image";
import styles from "../index.module.scss";
import Link from "next/link";
import { FC } from "react";
import { FaSignOutAlt, FaMoon } from "react-icons/fa";
import { useTheme } from "next-themes";
import { WebsiteUrls } from "types/enums";
import { NextRouter, useRouter } from "next/router";

const User: FC = () => {
  const router: NextRouter = useRouter();
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  const changeTheme = () => {
    isDark ? setTheme("light") : setTheme("dark");
  };

  return (
    <div className={styles.header__login}>
      {router.pathname === WebsiteUrls.SIGNUP ? null : (
        <div className={styles.header__img}>
          <Image
            src={"/"}
            alt="User avatar"
            className={styles.header__img__user}
            width={45}
            height={45}
          />

          <span className={styles.header__user}>
            <button className={styles.header__user__signin}>
              <Link href={WebsiteUrls.SIGNUP}>
                <a>
                  <FaSignOutAlt size={30} />
                </a>
              </Link>
            </button>
          </span>
        </div>
      )}
      <span className={styles.header__user__theme}>
        <span onClick={changeTheme}>
          <FaMoon size={25} />
        </span>
      </span>
    </div>
  );
};

export default User;
