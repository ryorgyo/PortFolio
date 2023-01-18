import styles from "src/styles/css/Card.module.css";
import { FC } from "react";
import { bgColorChecker } from "src/components/top/List/Card";

export const TestBlog: FC<{
  node: any;
}> = ({ node }) => {
  return (
    <div className={styles.blogDiscription}>
      <h3>{node.title}</h3>
      <div className={styles.blogCategory}>
        {node.tags.edges.map((tag, index) => {
          return (
            <p className={styles[bgColorChecker(tag.node.name)]} key={index}>
              {tag.node.name}
            </p>
          );
        })}
      </div>
      <div className={styles.date}>
        <p>{node.date}</p>
      </div>
    </div>
  );
};
