// pages/index.js
import { NextSeo } from "next-seo";
import HomePage from "./homePage";

export default function Home() {
  return (
    <>
        <NextSeo title='Dwi Wijaya - Personal Website' />
        <HomePage />
    </>
  );
}
