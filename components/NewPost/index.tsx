import { FC } from "react";
import { icon } from "utils/icon";
import { Icon } from "../../types/index";
import Image from "next/image";
import user from "../../public/images/user.jpeg";
import styles from "./index.module.scss";
import IconButton from "./IconButton";

const NewPost: FC = () => {
  return (
    <div className={styles.post}>
      <div className={styles.post__block}>
        <div className={styles.post__input}>
          <Image
            src={user}
            alt="user input"
            className={styles.post__img}
            width={50}
            height={50}
          />
          <input
            type="text"
            className={styles.post__field}
            placeholder="Start a post"
          />
        </div>
        <div className={styles.post__icon}>
          {icon.map((button: Icon) => (
            <IconButton key={button.id} svg={button.svg} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewPost;
