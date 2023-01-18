import Image from "next/image";
import styles from "src/styles/css/Home.module.css";
import Link from "next/dist/client/link";
import { AiOutlineSwapRight } from "react-icons/ai";
import React from "react";

type props = {
  tech: string[];
  slogan: string[];
  profile: string;
  intro: string[];
};

export const FirstView = (props: props) => {
  return (
    <div className={styles.hero}>
      <div className={styles.dummy}></div>
      <div className={styles.left}>
        <h2>Ryosuke Nakamura</h2>
      </div>
      <div className={styles.right}>
        <div className={styles.headline}>
          {props.tech.map((tech: string, index) => {
            return <p key={index}>{tech}</p>;
          })}
        </div>
        <div className={styles.slogan}>
          {props.slogan.map((slo: string, index) => {
            return <h3 key={index}>{slo}</h3>;
          })}
        </div>
        <div className={styles.card}>
          <p className={styles.discription}>{props.profile}</p>
          <div className={styles.selfIntro}>
            <div className={styles.profile}>
              <Image
                src="/profile.jpg"
                alt="profile"
                // layout="fill"
                fill
                // sizes="(max-width: 768px) 100vw,
                //             (max-width: 1200px) 50vw,
                //             33vw"
              />
            </div>
            <div className={styles.profileRight}>
              <div className={styles.intro}>
                {props.intro.map((intro: string, index) => {
                  return <p key={index}>{intro}</p>;
                })}
              </div>
              <Link className={styles.link} href={"/"}>
                <AiOutlineSwapRight className={styles.svg} />
                <p>略歴</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
