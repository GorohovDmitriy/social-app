import { FC, useState } from "react";
import { FaSignOutAlt, FaSignInAlt, FaMoon } from "react-icons/fa";
import { useTheme } from "next-themes";
import Image from "next/image";
import user from "../../../public/images/user.jpeg";
import styles from "../index.module.scss";
import Link from "next/link";
import { WebsiteUrls } from "types/enums";

const User: FC = () => {
  const [isAuth, setIsAuth] = useState(false);
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  const changeTheme = () => {
    isDark ? setTheme("light") : setTheme("dark");
  };

  // temporarily
  const SignIn = () => {
    setIsAuth(true);
  };
  // temporarily
  const SignOut = () => {
    setIsAuth(false);
  };

  return (
    <div className={styles.header__login}>
      {!isAuth ? (
        <button className={styles.header__user__signin}>
          <Link href={WebsiteUrls.SIGNIN}>
            <a>
              <FaSignInAlt onClick={SignIn} size={30} />
            </a>
          </Link>
        </button>
      ) : (
        <div className={styles.header__img}>
          <Image
            src={user}
            alt="User avatar"
            className={styles.header__img__user}
            width={45}
            height={45}
          />
          <span className={styles.header__user}>
            <button className={styles.header__user__signin}>
              <Link href={WebsiteUrls.SIGNUP}>
                <a>
                  <FaSignOutAlt onClick={SignOut} size={30} />
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
