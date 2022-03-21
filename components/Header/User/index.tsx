import { FC } from "react";
import { IoMdMoon } from "react-icons/io";
import Image from "next/image";
import user from "../../../public/images/user.jpeg";
import styles from "../index.module.scss";
import { useTheme } from "next-themes";

const User: FC = () => {
  const { theme, setTheme } = useTheme();
  const light = theme === "light";
  const dark = theme === "dark";

  const lightTheme = () => {
    setTheme("light");
  };

  const darkTheme = () => {
    setTheme("dark");
  };
  return (
    <div className={styles.header__login}>
      <div className={styles.header__img}>
        <Image
          src={user}
          alt="User avatar"
          className={styles.header__img__user}
          width={45}
          height={45}
        />
      </div>
      <span className={styles.header__user}>Dmitriy </span>
      <span className={styles.header__user__theme}>
        {light && (
          <span onClick={darkTheme}>
            <IoMdMoon size={34} />
          </span>
        )}
        {dark && (
          <span onClick={lightTheme}>
            <IoMdMoon size={34} />
          </span>
        )}
      </span>
    </div>
  );
};

export default User;
