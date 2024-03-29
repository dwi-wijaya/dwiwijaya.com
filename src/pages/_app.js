import Overlay from "@/components/layout/Overlay";
import Sidebar from "@/components/layout/Sidebar";
import ThemeToggle from "@/components/toggles/ThemeToggle";
import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";

export default function App({ Component, pageProps }) {
  return <>
    <ThemeProvider attribute='class'>

      <ThemeToggle />
      <Sidebar />
      <main className="group lg:ml-[80px] pt-[5.5rem] pb-12 ml-0 px-8">
        <Overlay />
        <Component {...pageProps} />;
      </main>
    </ThemeProvider>
  </>
}
