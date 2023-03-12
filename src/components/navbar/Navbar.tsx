import Link from "next/link";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.hamburger}></div>
      <div className={styles.logo}></div>
      <Link href={"/"}>Log out</Link>
    </div>
  );
};

export default Navbar;
