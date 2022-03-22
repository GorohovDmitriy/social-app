import Link from "next/link";
import { FC } from "react";
import { AiFillFacebook, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { LinkSocial, WebsiteUrls } from "types/enums";
import styles from "./index.module.scss";

const Footer: FC = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__item}>
        <AiFillFacebook />
        <Link href={LinkSocial.LINKEDIN}>Linkedin</Link>
      </div>
      <div className={styles.footer__item}>
        <AiFillLinkedin /> <Link href={LinkSocial.FACEBOOK}>Facebook</Link>
      </div>
      <div className={styles.footer__item}>
        <div className={styles.footer__item}>
          <AiFillGithub /> <Link href={LinkSocial.GITHUB}> GitHub</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
