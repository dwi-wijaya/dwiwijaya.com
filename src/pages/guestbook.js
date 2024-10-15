import PageHeading from "@/components/common/PageHeading"
import Container from "@/components/layouts/partials/Container"
import Guestbook from "@/components/views/guestbook/Guestbook"
import { fetcher } from "@/services/fetcher";
import { data } from "autoprefixer";
import { useTranslations } from "next-intl";
import { NextSeo } from "next-seo";
import Head from "next/head";
import { useRouter } from "next/router";


const GuestbookPage = ({ messages }) => {

    const t = useTranslations();
    const router = useRouter();
    const canonicalUrl = `${process.env.NEXT_PUBLIC_SITE_URL}${router.asPath}`;

    const PAGE_TITLE = t('Guestbook.title');
    const PAGE_DESCRIPTION = t('Guestbook.subtitle');

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
                <Guestbook messages={messages}/>
            </Container>
        </>
    )
}

export default GuestbookPage
export const getServerSideProps = async (context) => {
    const messages = await fetcher(`${process.env.NEXT_PUBLIC_SITE_URL}/api/guestbook`);
    return {
        props: {
            messages,
        },
    };
};