import PageHeading from '@/components/common/PageHeading';
import Container from '@/components/layouts/partials/Container'
import Services from '@/components/views/service/Services'
import { useTranslations } from 'next-intl';
import { NextSeo } from 'next-seo';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react'

const PAGE_TITLE = 'Services';
const PAGE_DESCRIPTION = "Learn about the specialized services I offer to clients.";

const ServicesPage = () => {

    const t = useTranslations();
    const router = useRouter();
    const canonicalUrl = `${process.env.NEXT_PUBLIC_SITE_URL}${router.asPath}`;

    return (
        <>
            <Head>
                <link rel="canonical" href={canonicalUrl} />
            </Head>
            <NextSeo title={`${t('Services.title')} - Dwi Wijaya`} />

            <Container data-aos='fade-up'>
                <PageHeading
                    title={t('Services.title')}
                    description={t('Services.subtitle')}
                />
                <Services />
            </Container>
        </>
    )
}

export default ServicesPage
export const getStaticProps = async () => {

    return {
        props: {
        },
    };
};