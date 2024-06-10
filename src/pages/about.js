import PageHeading from "@/components/common/PageHeading";
import Container from "@/components/layout/Container"
import About from "@/components/views/about/About"
import { fetcher } from "@/services/fetcher";
import { NextSeo } from "next-seo";
import Head from "next/head";
import { useRouter } from "next/router";

const PAGE_TITLE = 'About';
const PAGE_DESCRIPTION = "Get to know me a little better, beyond the resume.";

const AboutPage = () => {

    const router = useRouter();
    const canonicalUrl = `${process.env.NEXT_PUBLIC_SITE_URL}${router.asPath}`;

    return (
        <>
            <Head>
                <link rel="canonical" href={canonicalUrl} />
            </Head>
            <NextSeo title={`${PAGE_TITLE} - Dwi Wijaya`} />

            <Container data-aos='fade-up'>
                <PageHeading
                    title={PAGE_TITLE}
                    description={PAGE_DESCRIPTION}
                />
                <About />
            </Container>
        </>
    )
}

export default AboutPage
