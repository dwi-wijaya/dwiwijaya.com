import PageHeading from "@/components/common/PageHeading";
import Container from "@/components/layouts/partials/Container";
import Guestbook from "@/components/views/guestbook/Guestbook";
import { fetcher } from "@/services/fetcher";
import { useTranslations } from "next-intl";
import { NextSeo } from "next-seo";
import Head from "next/head";
import { useRouter } from "next/router";
import useSWR, { SWRConfig } from 'swr';

const GuestbookPage = ({ fallback }) => {
    const t = useTranslations();
    const router = useRouter();
    const canonicalUrl = `${process.env.NEXT_PUBLIC_SITE_URL}${router.asPath}`;

    const PAGE_TITLE = t('Guestbook.title');
    const PAGE_DESCRIPTION = t('Guestbook.subtitle');

    return (
        <>
            <SWRConfig value={{ fallback }}>

                <Head>
                    <link rel="canonical" href={canonicalUrl} />
                </Head>
                <NextSeo title={`${PAGE_TITLE} - Dwi Wijaya`} />

                <Container data-aos='fade-up'>
                    <PageHeading
                        title={PAGE_TITLE}
                        description={PAGE_DESCRIPTION}
                    />
                    <Guestbook/>
                </Container>
            </SWRConfig>
        </>
    );
};

export default GuestbookPage;

export const getStaticProps = async (context) => {
    const res = await fetcher(`${process.env.NEXT_PUBLIC_SITE_URL}/api/guestbook`);
    const messages = res.messages || [];

    return {
        props: {
            fallback: {
                '/api/guestbook': messages,
            },
        },
        revalidate: 1,
    };
};
