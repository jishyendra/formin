import React from "react";
import styles from "./styles/page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
        <Link href='/dashboard'>Dasbboard</Link>
    </div>
  );
}
