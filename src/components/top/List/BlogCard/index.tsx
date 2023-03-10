import Image from "next/image";
import styles from "src/styles/css/Card.module.css";
import { FC } from "react";
import { Blog } from "./Blog";
import Link from "next/link";

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

export const BlogCard: FC<{
  posts: any;
}> = ({ posts }) => {
  return (
    <div className={styles.Container}>
      {posts.map((post) => {
        return (
          <Link
            className={styles.Card}
            href={`/posts/${post.node.slug}`}
            key={post.node.slug}
          >
            <div className={styles.Img}>
              <Image
                src={
                  post.node.featuredImage
                    ? post.node.featuredImage.node.sourceUrl
                    : "/top/noImage.png"
                }
                alt=""
                fill
                sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"
              ></Image>
            </div>
            <Blog node={post.node} />
          </Link>
        );
      })}
    </div>
  );
};
