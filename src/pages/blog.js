import PageHeading from "@/components/common/PageHeading"
import Container from "@/components/layout/Container"
import Blog from "@/components/views/blog/Blog"
import { NextSeo } from "next-seo";
import Head from "next/head";
import { useRouter } from "next/router";

const PAGE_TITLE = 'Blog';
const PAGE_DESCRIPTION = "Exploring the world of code, creativity, and constant learning.";

const BlogPage = () => {

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
                <Blog />
            </Container>
        </>
    )
}

export default BlogPage
export const getStaticProps = async () => {

    return {
        props: {
        },
    };
};