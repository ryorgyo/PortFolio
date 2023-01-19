import Image from "next/image";
import styles from "src/styles/css/Card.module.css";
import { FC } from "react";
import type { workCardType } from "src/pages";
import { Work } from "./Work";

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

export const WorkCard: FC<{
  workCards: workCardType;
}> = (props) => {
  const cards = props.workCards;

  return (
    <div className={styles.Container}>
      {cards.map((card: cardType, index) => {
        return (
          <div className={styles.Card} key={index}>
            <div className={styles.Img}>
              <Image
                src="/top/noImage.png"
                alt=""
                layout=""
                fill
                sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"
              ></Image>
            </div>
            {/* workCardsが空欄でない時のdiscription欄のレイアウト */}
            <Work card={card} />
          </div>
        );
      })}
    </div>
  );
};
