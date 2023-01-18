import "../src/styles/css/globals.css";
import { AppProps } from "next/app";
// import "src/styles/css/index.css";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
