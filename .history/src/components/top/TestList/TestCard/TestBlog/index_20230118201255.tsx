import styles from "src/styles/css/Card.module.css";
import { FC } from "react";
import { bgColorChecker, cardType } from "src/components/top/List/Card";
import { getAllPostsForHome } from "lib/api";
import { GetStaticProps } from "next";

export const TestBlog: FC<{
  card: any;
}> = ({ card }) => {
  return (
    <div className={styles.blogDiscription}>
      <h3>{card.title}</h3>
      <div className={styles.blogCategory}>
        {/* <p className={styles[bgColorChecker(cate)]} key={index}>
          #{cate}
        </p>
      </div>
      <div className={styles.date}>
        <p key={index}>{date}</p>; */}
      </div>
    </div>
  );
};
