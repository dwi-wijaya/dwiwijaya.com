import ThemeToggle from "@/components/toggles/ThemeToggle";
import Overlay from "@/components/layout/Overlay";
import Sidebar from "@/components/layout/Sidebar";
import { ThemeProvider } from "next-themes";
import { Onest } from 'next/font/google'
import { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import "@/styles/globals.css";
import "@/styles/css/fa.min.css";
import 'aos/dist/aos.css';
import 'boxicons/css/boxicons.min.css';
import Aos from "aos";
import dynamic from "next/dynamic";
import { DefaultSeo } from "next-seo";
import defaultSEOConfig from '../../next-seo.config';
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { getLastCommitDate } from "@/services/GithubServices";

const onest = Onest({
  subsets: ['latin'],
})
const ProgressBar = dynamic(
  () => import('../components/elements/ProgressBar'),
  { ssr: false }
);

export default function App({ Component, pageProps, lastCommitDate }) {
  useEffect(() => {
    Aos.init({
      duration: 800,
      delay: 50,
    });
  }, []);

  return <>
    <DefaultSeo {...defaultSEOConfig} />
    <SpeedInsights />
    <Analytics />
    <ThemeProvider attribute='class' enableSystem={false} disableTransitionOnChange={true}>
      <Toaster
        toastOptions={{
          style: {
            background: "var(--container-color)",
            color: "var(--text-color)",
          },
        }}
        position="top-right"
      />
      <ProgressBar />

      <Sidebar className={`${onest.className}`} lastUpdate={lastCommitDate}/>
      <main className={`${onest.className} group/main lg:ml-64  ml-0 min-h-[100vh]`}>
        <Overlay />
        
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  </>
}
App.getInitialProps = async () => {
  const lastCommitDate = await getLastCommitDate();
  return { lastCommitDate };
};