import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/favicon/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='180x180'
          href='/favicon/favicon-180.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='48x48'
          href='/favicon/favicon-48.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon/favicon-32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon/favicon-16.png'
        />
        <meta name="theme-color" content="#ff774d" />
        <script defer src="https://analytics.dwiwijaya.com/script.js" data-website-id="7e71a6f6-f863-400e-806f-1af37e845ad1"></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
