import { Html, Head, Main, NextScript } from "next/document";

const Document = () => {
  return (
    <Html lang="ja">
      <Head>
        <link rel="stylesheet" href="src/styles/css/globals.css" />
        <link rel="stylesheet" href="src/styles/css/index.css" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};
export default Document;
