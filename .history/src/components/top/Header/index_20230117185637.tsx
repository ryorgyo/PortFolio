import Image from "next/image";
import styles from "src/styles/css/Home.module.css";
import React from "react";

export const Header = () => {
  return (
    <div>
      <header className={styles.header}>
        <div className={styles.logo}>
          <Image
            src="/logo.jpg"
            alt="logo"
            fill
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          />
        </div>
        <h1>Ryo Design</h1>
      </header>
    </div>
  );
};
