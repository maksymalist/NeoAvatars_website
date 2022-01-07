import styles from "../styles/Nav.module.css";
import Link from "next/link";
import Image from "next/image";
import logo from "../assets/logo.svg";

const Nav = () => {
  return (
    <div className={styles.nav}>
      <div className={styles.leftLinks}>
        <li className={styles.liMargin}>
          <Link href="/" passHref>
            <a className={styles.link}>HOME</a>
          </Link>
        </li>
        <li className={styles.liMargin}>
          <Link href="/" passHref>
            <a className={styles.link}>ABOUT</a>
          </Link>
        </li>
        <li className={styles.liMargin}>
          <Link href="/" passHref>
            <a className={styles.link}>CONTACT</a>
          </Link>
        </li>
      </div>
      <div className={styles.rightLinks}></div>
    </div>
  );
};

export default Nav;
