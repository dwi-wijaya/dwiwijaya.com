import Sidebar from "../components/layout/Sidebar";
import ThemeToggle from "../components/toggles/ThemeToggle";
import "../styles/_globals.scss";
import "../styles/_sidebar.scss";
import Aos from "aos";
import { ThemeProvider } from "next-themes";
import { useEffect } from "react";
import ProgressBar from "../components/elements/ProgressBar";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    Aos.init({
      duration: 500,
      delay: 50,
    });
  }, []);

  return (
    <ThemeProvider>
      <ThemeToggle />
      <Sidebar />
      <main >
        <div className="layout-overlay layout-menu-toggle"></div>
        <ProgressBar>
          <Component {...pageProps} />
        </ProgressBar>
      </main>
    </ThemeProvider>
  );
}
