import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/logo2.png" sizes="any" />
        <meta name="theme-color" content="#ff774d" />
        <script defer src="https://cloud.umami.is/script.js" data-website-id="44cc0099-d876-4ca8-a19d-f4bd88fce292"></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
