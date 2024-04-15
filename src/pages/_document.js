import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="google-site-verification" content="S1rDLWd3VsUHpwRkB-BVpQG4Xf6Hk4hOe6lOKKsNmNo" />
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet' />
        <link rel="icon"  href="/logo2.png" sizes="any"/>
        {/* <link rel="icon" href="/logo.jpg" sizes="any" /> */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
