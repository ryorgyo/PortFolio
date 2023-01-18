import Image from "next/image";
import styles from "src/styles/css/Card.module.css";
import { FC } from "react";
import type { workCardType, blogCardType } from "src/pages";
import { WorkCard } from "src/components/top/List/Card/Work";
import { BlogCard } from "src/components/top/List/Card/Blog";

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
  test: Node[];
}> = ({ test }) => {
  return (
    <div className={styles.Container}>
      {test.map((test: Node, index) => {
        return (
          <div className={styles.Card} key={index}>
            <div className={styles.Img}>
              <Image src="" alt="" layout=""></Image>
            </div>
            <BlogCard test={test} />
          </div>
        );
      })}
    </div>
  );
};
