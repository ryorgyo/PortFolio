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
  allPosts: { edges };
  preview;
}> = (card, { allPosts: { edges }, preview }) => {
  const heroPost = edges[0]?.node;
  const morePosts = edges.slice(1);
  return (
    <div className={styles.blogDiscription}>
      <h3>{props.card.title}</h3>
      <div className={styles.blogCategory}>
        {props.card.category?.map((cate, index) => {
          return (
            <p className={styles[bgColorChecker(cate)]} key={index}>
              #{cate}
            </p>
          );
        })}
      </div>
      <div className={styles.date}>
        {props.card.date?.map((date, index) => {
          return <p key={index}>{date}</p>;
        })}
      </div>
    </div>
  );
};
