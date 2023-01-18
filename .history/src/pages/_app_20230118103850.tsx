import "src/styles/css/globals.css";
import "src/styles/css/index.css";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
