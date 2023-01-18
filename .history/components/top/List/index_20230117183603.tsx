"use client";
import "styles/css/globals.css";
import styles from "styles/css/Home.module.css";
import React, { FC, MouseEventHandler, useState } from "react";
// import type { workCardType, blogCardType } from "";
import { Card } from "compornents/top/Card";
import { H2Animation } from "compornents/top/List/H2Animation";

export const List: FC<{
  workCards?: workCardType;
  blogCards?: blogCardType;
  style: string;
}> = (props) => {
  const [hover, setHover] = useState(false);
  const handleMouseOver: MouseEventHandler<HTMLHeadingElement> = () => {
    setHover((hover) => !hover);
  };

  return (
    <div className={styles[props.style]}>
      <h2
        className={styles.title}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOver}
      >
        <H2Animation hover={hover} />
      </h2>
      {props.workCards ? (
        <Card workCards={props.workCards} />
      ) : (
        <Card blogCards={props.blogCards} />
      )}
    </div>
  );
};
