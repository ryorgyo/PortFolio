import { AppProps } from "next/app";
import "styles/css/globals.css";
import "styles/css/index.css";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
