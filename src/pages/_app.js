import Overlay from "@/components/layout/Overlay";
import Sidebar from "@/components/layout/Sidebar";
import ThemeToggle from "@/components/toggles/ThemeToggle";
import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import { Poppins } from 'next/font/google'
 
const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
})
export default function App({ Component, pageProps }) {
  return <>
    <ThemeProvider attribute='class'>

      <ThemeToggle />
      <Sidebar/>
      <main className={`${poppins.className} group lg:ml-[80px]  ml-0`}>
        <Overlay />
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  </>
}
