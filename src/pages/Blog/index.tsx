import Head from "next/head";
import "src/pages/_app";
import { GetStaticProps } from "next";
import Container from "src/components/container";
import MoreStories from "src/components/more-stories";
import HeroPost from "src/components/hero-post";
import Intro from "src/components/intro";
import Layout from "src/components/layout";
import { getAllPostsForHome } from "lib/api";
import { CMS_NAME } from "lib/constants";

const Index = ({ allPosts: { edges }, preview }) => {
  const heroPost = edges[0]?.node;
  const morePosts = edges.slice(1);

  return (
    <Layout preview={preview}>
      <Head>
        <title>{`Next.js Blog Example with ${CMS_NAME}`}</title>
      </Head>
      <Container>
        <Intro />
        {heroPost && (
          <HeroPost
            title={heroPost.title}
            coverImage={heroPost.featuredImage}
            date={heroPost.date}
            author={heroPost.author}
            slug={heroPost.slug}
            excerpt={heroPost.excerpt}
          />
        )}
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </Container>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const allPosts = await getAllPostsForHome(preview);

  return {
    props: { allPosts, preview },
    revalidate: 10,
  };
};

export default Index;
