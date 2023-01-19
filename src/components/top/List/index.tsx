"use client";
import styles from "src/styles/css/Home.module.css";
import React, { FC, MouseEventHandler, useState } from "react";
import type { workCardType } from "src/pages";
import { WorkCard } from "src/components/top/List/WorkCard";
import { H2Animation } from "src/components/top/List/H2Animation";
import Link from "next/link";
import { BlogCard } from "src/components/top/List/BlogCard";

export const List: FC<{
  workCards?: workCardType;
  posts?: any;
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
        <Link href="/Blog">
          <H2Animation hover={hover} />
        </Link>
      </h2>
      {props.workCards ? (
        <WorkCard workCards={props.workCards} />
      ) : (
        <BlogCard posts={props.posts} />
      )}
    </div>
  );
};
