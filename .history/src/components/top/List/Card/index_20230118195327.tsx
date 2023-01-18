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

export const Card: FC<{
  workCards?: workCardType;
  blogCards?: Node[];
}> = (props) => {
  const cards = props.workCards ? props.workCards! : props.blogCards!;

  return (
    {if(props.workCards){
      return(

        <div className={styles.Container}>
        {cards.map((card: cardType, index) => {
          return (
            <div className={styles.Card} key={index}>
            <div className={styles.Img}>
            <Image src="" alt="" layout=""></Image>
            </div>
            {/* workCardsが空欄でない時のdiscription欄のレイアウト */}
            {props.workCards && <WorkCard card={card} />}
            {/* blogCardsが空欄でない時のdiscription欄のレイアウト */}
            {props.blogCards && <BlogCard card={card} />}
            </div>
            );
          })}
          </div>
          )
        }}
  );
};
