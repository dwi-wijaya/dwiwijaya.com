import Image from "next/image";
import { Inter } from "next/font/google";
import Container from "@/components/layout/Container";
import Homepage from "@/components/views/Home";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className='!text-primary toggle top-6 lg:left-[105px] left-[80px] gap-2'>
        <span class="relative flex h-3 w-3 ">
        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
        <span class="relative inline-flex rounded-full h-3 w-3 bg-[#d87237]"></span>
      </span>
      Open for collabs ! </div>
      <div className="z-[-1] absolute bg-container top-0 left-0 w-full h-[30%] bg-endless-clouds"></div>
      <section data-aos="fade-right" data-section className="mt-[22vh] ">
        <Homepage />

      </section>
    </>
  );
}
