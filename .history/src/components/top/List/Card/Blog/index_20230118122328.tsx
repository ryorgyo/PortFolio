import styles from "src/styles/css/Card.module.css";
import { FC } from "react";
import { bgColorChecker, cardType } from "src/components/top/List/Card";
import { getAllPostsForHome } from "lib/api";
import { GetStaticProps } from "next";

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const allPosts = await getAllPostsForHome(preview);

  return {
    props: { allPosts, preview },
    revalidate: 10,
  };
};

export const BlogCard: FC<{
  card: cardType;
}> = ({ card }) => {
  return (
    <div className={styles.blogDiscription}>
      <h3>{card.title}</h3>
      <div className={styles.blogCategory}>
        {card.category?.map((cate, index) => {
          return (
            <p className={styles[bgColorChecker(cate)]} key={index}>
              #{cate}
            </p>
          );
        })}
      </div>
      <div className={styles.date}>
        {card.date?.map((date, index) => {
          return <p key={index}>{date}</p>;
        })}
      </div>
    </div>
  );
};
