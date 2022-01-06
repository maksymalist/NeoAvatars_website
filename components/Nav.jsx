import styles from "../styles/Nav.module.css";
import Link from "next/link";
import Image from "next/image";
import logo from "../assets/logo.svg";

const Nav = () => {
  return (
    <div className={styles.nav}>
      <div className={styles.leftLinks}>
        <li className={styles.liMargin}>
          <Link href="/">
            <Image width={72} height={72} src={logo} alt="logo" />
          </Link>
        </li>
        <li className={styles.liMargin}>
          <Link href="/about">About</Link>
        </li>
        <li className={styles.liMargin}>
          <Link href="/shop">Shop</Link>
        </li>
      </div>
      <div className={styles.rightLinks}></div>
    </div>
  );
};

export default Nav;
