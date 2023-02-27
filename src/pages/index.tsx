import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Landing.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Landing() {
  return (
    <div className={styles.main}>
      <div className={styles.overlay}>
        <p className={styles.title}>buckit.</p>
        <p className={styles.text}>
          Lorem, ipsum dolor. Lorem ipsum dolor, sit amet consectetur
          adipisicing elit.
        </p>
        <button type="button" className={styles.registerBtn}>
          sign up
        </button>
        <button type="button" className={styles.signInBtn}>
          sign in
        </button>
      </div>
    </div>
  );
}
