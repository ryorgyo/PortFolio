import styles from "src/styles/css/Card.module.css";
import { FC } from "react";
import { bgColorChecker, cardType } from "src/components/top/List/Card";

export const WorkCard: FC<{
  card: cardType;
}> = (props) => {
  return (
    <div className={styles.workDiscription}>
      <p>{props.card.createdDate}</p>
      <p>{props.card.cop}</p>
      <div className={styles.workCategory}>
        {props.card.category?.map((cate, index) => {
          return (
            <p className={styles[bgColorChecker(cate)]} key={index}>
              #{cate}
            </p>
          );
        })}
      </div>
      <p>HTML / CSS / Next.js / WordPress</p>
    </div>
  );
};