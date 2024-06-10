import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/logo2.png" sizes="any" />
        <meta name="theme-color" content="#ff774d" />
        <script defer src="https://umami-dwiwijaya.vercel.app/script.js" data-website-id="7e71a6f6-f863-400e-806f-1af37e845ad1"></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
