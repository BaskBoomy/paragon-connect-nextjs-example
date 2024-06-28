import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "./Layout.module.css";

const Layout = ({ children, title }) => {
  const router = useRouter();

  return (
    <div className="page">
      <header className={styles.header}>
        <p>TaskLab</p>
        <p style={{ fontWeight: 500, textAlign: "center" }}>{title}</p>
        <div className="user-container"></div>
      </header>
      <nav className={styles.nav}>
        <Link
          href="/tasks"
          className={router.asPath === "/tasks" ? styles.active : ""}
        >
          Tasks
        </Link>
        <Link
          href="/integrations"
          className={router.asPath === "/integrations" ? styles.active : ""}
        >
          Integrations
        </Link>
      </nav>
      {children}
    </div>
  );
};

export default Layout;
