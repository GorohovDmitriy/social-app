import { FC } from "react";
import Svg from "SVG";
import styles from "../index.module.scss";

const Search: FC = () => {
  return (
    <div className={styles.header__search}>
      <div className={styles.header__search__icon}>
        <Svg id="search" />
      </div>
      <input
        type="text"
        className={styles.header__search__input}
        placeholder="Search"
      />
    </div>
  );
};

export default Search;
