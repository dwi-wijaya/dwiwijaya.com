import PageHeading from "@/components/common/PageHeading"
import Container from "@/components/layouts/partials/Container"
import Blog from "@/components/views/blog/Blog"
import { useTranslations } from "next-intl";
import { NextSeo } from "next-seo";
import Head from "next/head";
import { useRouter } from "next/router";


const BlogPage = () => {

    const t = useTranslations();
    const router = useRouter();
    const canonicalUrl = `${process.env.NEXT_PUBLIC_SITE_URL}${router.asPath}`;

    const PAGE_TITLE = t('Blog.title');
    const PAGE_DESCRIPTION = t('Blog.subtitle');

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