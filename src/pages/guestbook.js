const { default: Guestbook } = require("@/components/views/guestbook/Guestbook");
const { useRouter } = require("next/router");
import PageHeading from '@/components/common/PageHeading';
import Container from '@/components/layouts/partials/Container';
import { NextSeo } from 'next-seo';
import Head from 'next/head';
import React from 'react'

const PAGE_TITLE = 'Guestbook';
const PAGE_DESCRIPTION = "Leave whatever you like to say, suggestions, questions or anything!";

const GuestbookPage = () => {
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
                <Guestbook/>
            </Container>
        </>
    )
}
export default GuestbookPage
