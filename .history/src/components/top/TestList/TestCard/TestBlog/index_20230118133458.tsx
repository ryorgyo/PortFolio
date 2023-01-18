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

export const TestBlog: FC<{
  test: any;
}> = ({ test }) => {
  return (
    <div className={styles.blogDiscription}>
      <h3>{test.node.title}</h3>
      <div className={styles.blogCategory}></div>
      <div className={styles.date}>
        {/* <p>{test.node.slug}</p> */}
        {/* <p>{test.node.featuredImage}</p> */}
        {/* <p>{test.node.author}</p> */}
        {/* <p>{test.node.except}</p> */}
        <p>{test.node.date}</p>
      </div>
    </div>
  );
};
