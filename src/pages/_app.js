import Overlay from "@/components/layout/Overlay";
import Sidebar from "@/components/layout/Sidebar";
import ThemeToggle from "@/components/toggles/ThemeToggle";
import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import { Poppins } from 'next/font/google'
import { Toaster } from "react-hot-toast";
 
const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
})
export default function App({ Component, pageProps }) {
  return <>
    <ThemeProvider attribute='class'>

      <ThemeToggle />
      <Toaster
        toastOptions={{
          style: {
            background: "var(--container-color)",
            color: "var(--text-color)",
          },
        }}
        position="top-right"
      />
      <Sidebar/>
      <main className={`${poppins.className} group lg:ml-[80px]  ml-0`}>
        <Overlay />
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  </>
}
