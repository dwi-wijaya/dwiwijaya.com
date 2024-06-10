import PageHeading from '@/components/common/PageHeading';
import Container from '@/components/layout/Container'
import Services from '@/components/views/service/Services'
import { NextSeo } from 'next-seo';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react'

const PAGE_TITLE = 'Services';
const PAGE_DESCRIPTION = "Learn about the specialized services I offer to clients.";

const ServicesPage = () => {

    const router = useRouter();
    const canonicalUrl = `${process.env.SITE_URL}${router.asPath}`;

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
                <Services />
            </Container>
        </>
    )
}

export default ServicesPage