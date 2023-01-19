import styles from "src/styles/css/Card.module.css";
import { FC } from "react";
import { bgColorChecker } from "src/components/top/List/WorkCard";
import Date from "src/components/date";

export const Blog: FC<{
  node: any;
}> = ({ node }) => {
  const dateChange = (date) => {
    const str = date;
    const year = parseInt(str.substring(0, 4));
    const month = parseInt(str.substring(5, 7));
    const day = parseInt(str.substring(8, 10));
    return `執筆日 ${year}/${month}/${day}`;
  };
  return (
    <div className={styles.blogDiscription}>
      <h3>{node.title}</h3>
      <div className={styles.blogCategory}>
        {node.tags.edges.map((tag, index: number) => {
          return (
            <p className={styles[bgColorChecker(tag.node.name)]} key={index}>
              {tag.node.name}
            </p>
          );
        })}
      </div>
      <div className={styles.date}>
        <p>{dateChange(node.date)}</p>
      </div>
    </div>
  );
};
