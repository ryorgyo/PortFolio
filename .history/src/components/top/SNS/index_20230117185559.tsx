"use client";
import { MouseEventHandler, useEffect, useState } from "react";
import styles from "styles/css/Home.module.css";
import { H2Animation } from "src/components/top/List/H2Animation";

export const SNS = () => {
  useEffect(() => {
    // scriptを読み込み
    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    document.body.appendChild(script);

    const s = document.createElement("script");
    s.setAttribute("src", "//www.instagram.com/embed.js");
    s.setAttribute("async", "true");
    document.body.appendChild(s);
    if ((window as any).instgrm) {
      (window as any).instgrm.Embeds.process();
    }
    // アンマウント時に一応scriptタグを消しておく
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const [hover, setHover] = useState(false);
  const handleMouseOver: MouseEventHandler<HTMLHeadingElement> = () => {
    setHover((hover) => !hover);
  };

  return (
    <div className={styles.snsList}>
      <h2
        className={styles.title}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOver}
      >
        <H2Animation hover={hover} />
      </h2>
      <div className={styles.twitterAcaunt} id={styles.hello}>
        <blockquote className="twitter-tweet">
          <p lang="ja" dir="ltr">
            プライベートで一切SNSでの発信を行なってこなかったので、今年は練習としてこのアカウント動かしてみます。よろしくお願いします🤲
            <a href="https://twitter.com/hashtag/23%E5%8D%92?src=hash&amp;ref_src=twsrc%5Etfw">
              #23卒
            </a>
            <a href="https://twitter.com/hashtag/%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0%E5%88%9D%E5%BF%83%E8%80%85?src=hash&amp;ref_src=twsrc%5Etfw">
              #プログラミング初心者
            </a>
            <a href="https://twitter.com/hashtag/%E9%A7%86%E3%81%91%E5%87%BA%E3%81%97%E3%82%A8%E3%83%B3%E3%82%B8%E3%83%8B%E3%82%A2%E3%81%A8%E7%B9%8B%E3%81%8C%E3%82%8A%E3%81%9F%E3%81%84?src=hash&amp;ref_src=twsrc%5Etfw">
              #駆け出しエンジニアと繋がりたい
            </a>
          </p>
          &mdash; り (@wryotten){" "}
          <a href="https://twitter.com/wryotten/status/1611195577349599232?ref_src=twsrc%5Etfw">
            January 6, 2023
          </a>
        </blockquote>
      </div>

      {/* <div className={styles.instagram}>
        <blockquote
          className="instagram-media"
          data-instgrm-permalink="https://www.instagram.com/p/CmLtDeiLAJ-/?utm_source=ig_embed&amp;utm_campaign=loading"
          data-instgrm-version="14"
        >
          <a
            href="https://www.instagram.com/p/CmLtDeiLAJ-/?utm_source=ig_embed&amp;utm_campaign=loading"
            target="_blank"
          ></a>
          <a
            href="https://www.instagram.com/p/CmLtDeiLAJ-/?utm_source=ig_embed&amp;utm_campaign=loading"
            target="_blank"
          >
            Zlatan Ibrahimović(@iamzlatanibrahimovic)がシェアした投稿
          </a>
        </blockquote>{" "}
      </div> */}
    </div>
  );
};
