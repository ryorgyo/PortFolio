import Image from "next/image";
import styles from "src/styles/css/Card.module.css";
import { FC } from "react";
import { TestBlog } from "./TestBlog";

export type cardType = {
  createdDate?: string;
  cop?: string;
  category: string[];
  techUse?: string[];
  title?: string;
  date?: string[];
};

export const bgColorChecker = (category: string) => {
  if (category == "可愛い") {
    return "pink";
  }
  if (category == "スタイリッシュ") {
    return "blue";
  }
  if (category == "Tech") {
    return "green";
  }
  if (category == "カッコいい") {
    return "black";
  }
  if (category == "穏やか") {
    return "orange";
  }
  return "gray";
};

export const TestCard: FC<{
  posts: any;
}> = ({ posts }) => {
  return (
    <div className={styles.Container}>
      {posts.map((post) => {
        console.log(post);
        return (
          <div className={styles.Card}>
            <div className={styles.Img}>
              <Image
                src={post.node.featuredImage?.node.sourceUrl}
                alt={`Cover Image for ${post.node.title}`}
                fill
                //   sizes="(max-width: 768px) 100vw,
                // (max-width: 1200px) 50vw,
                // 33vw"
              ></Image>
            </div>
            <TestBlog node={post.node} />
          </div>
        );
      })}
    </div>
  );
};
