import styles from "src/styles/css/Card.module.css";
import { FC } from "react";
import { bgColorChecker, cardType } from "src/components/top/List/Card";
import { getAllPostsForHome } from "lib/api";
import { GetStaticProps } from "next";

export const TestBlog: FC<{
  node: any;
}> = ({ node }) => {
  // console.log(node.tags.edges);
  return (
    <div className={styles.blogDiscription}>
      <h3>{node.title}</h3>
      <div className={styles.blogCategory}>
        {node.tags.map((tag) => {
          console.log(tag);
          return <p>{tag.edges.node.name}</p>;
        })}
        {/* <p className={styles[bgColorChecker(cate)]} key={index}>
          #{cate}
        </p>
      */}
      </div>
      <div className={styles.date}>
        <p>{node.date}</p>
      </div>
    </div>
  );
};
