import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head>
        <meta name="author" content="Tiago" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
