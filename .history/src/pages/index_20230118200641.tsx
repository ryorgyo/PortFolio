import "src/pages/_app";
import styles from "src/styles/css/Home.module.css";
import React from "react";
import { FirstView } from "src/components/top/FirstView";
import { Header } from "src/components/top/Header";
import { List } from "src/components/top/List";
import { SNS } from "src/components/top/SNS";
import { Footer } from "src/components/top/Footer";
import Head from "next/head";
import { GetStaticProps } from "next";
import { getAllPostsForHome } from "lib/api";
import { BlogList } from "src/components/top/TestList";

export type workCardType = {
  createdDate: string;
  cop: string;
  category: string[];
  techUse: string[];
}[];

export type blogCardType = {
  title: string;
  category: string[];
  date: string[];
}[];

const Home = ({ allPosts: { edges }, preview }) => {
  const post = edges.slice();

  const selfTech = [
    "99' / 私文学生 / オールラウンドサークル設立",
    "Web Design / Coding / Edit Movie",
    "HTML / CSS / JavaScript / PHP / Python",
    "23~ IT企業就職",
  ];

  const profileText =
    "ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。ここにテキストが入ります。";

  const slogan = ["Keep Trying", "Wait For Contact"];
  const introduce = ["中村　涼介", "1999年4月", "文系大学卒"];

  const WORKCARDs: workCardType = [
    {
      createdDate: "2022/12/01",
      cop: "salon clear",
      category: ["可愛い", "スタイリッシュ", "Tech"],
      techUse: ["HTML", "CSS", "JavaScript", "WordPress"],
    },
    {
      createdDate: "2022/12/01",
      cop: "株式会社colead様",
      category: ["穏やか", "スタイリッシュ", "Tech"],
      techUse: ["HTML", "CSS", "JavaScript", "WordPress"],
    },
    {
      createdDate: "2022/12/01",
      cop: "ホルモン人生タロちゃん",
      category: ["可愛い", "カッコいい", "Tech"],
      techUse: ["HTML", "CSS", "JavaScript", "WordPress"],
    },
    {
      createdDate: "2022/12/01",
      cop: "株式会社○○様",
      category: ["可愛い", "スタイリッシュ", "爽やか"],
      techUse: ["HTML", "CSS", "JavaScript", "WordPress"],
    },
  ];

  const BLOGCARDs: blogCardType = [
    {
      title: "IT企業の特徴とは？~業界と業種の違いからIT業界を徹底解説~",
      category: ["IT業界", "就活"],
      date: ["2022/11/01", "2022/12/03"],
    },
    {
      title: "IT企業の特徴とは？~業界と業種の違いからIT業界を徹底解説~",
      category: ["IT業界", "就活"],
      date: ["2022/04/01", "2022/11/03"],
    },
    {
      title: "IT企業の特徴とは？~業界と業種の違いからIT業界を徹底解説~",
      category: ["IT業界", "就活"],
      date: ["2022/08/01", "2023/01/03"],
    },
    {
      title: "IT企業の特徴とは？~業界と業種の違いからIT業界を徹底解説~",
      category: ["IT業界", "就活"],
      date: ["2022/12/01", "2023/01/01"],
    },
  ];

  return (
    <div className={styles.container}>
      <Head>
        <title>Portfolio Site</title>
      </Head>
      <Header />
      <main>
        <FirstView
          tech={selfTech}
          profile={profileText}
          slogan={slogan}
          intro={introduce}
        />
        <List workCards={WORKCARDs} style="workList" />
        {/* <List blogCards={BLOGCARDs} style="blogList" /> */}
        <TestList post={post} style="blogList" />
        <SNS />
        <div className={styles.contact}>
          <div className={styles.container}></div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const allPosts = await getAllPostsForHome(preview);

  return {
    props: { allPosts, preview },
    revalidate: 10,
  };
};

export default Home;
