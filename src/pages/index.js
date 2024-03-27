// pages/index.js
import { NextSeo } from "next-seo";
import HomePage from "./home";

export default function Home() {
  return (
    <>
        <NextSeo title='Dwi Wijaya - Personal Website' />
        <HomePage />
    </>
  );
}
