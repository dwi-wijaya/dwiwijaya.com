import { Html, Head, Main, NextScript } from "next/document";
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from "@vercel/analytics/react"

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="google-site-verification" content="S1rDLWd3VsUHpwRkB-BVpQG4Xf6Hk4hOe6lOKKsNmNo" />
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet' />
        <link rel="icon"  href="/logo2.png" sizes="any"/>
        <meta name="google-site-verification" content="vSWLUOfzaGmniX0J55YW3eB1xePdFkyD6_jSK6___Ww" />
        {/* <link rel="icon" href="/logo.jpg" sizes="any" /> */}
      </Head>
      <body>
        <SpeedInsights />
        <Analytics />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
