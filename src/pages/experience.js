import PageHeading from '@/components/common/PageHeading';
import Container from '@/components/layouts/partials/Container'
import Experience from '@/components/views/experience/Experience'
import { fetcher } from '@/services/fetcher';
import { NextSeo } from 'next-seo';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react'

const PAGE_TITLE = 'Experience';
const PAGE_DESCRIPTION = "Discover my professional background and valuable experiences.";

const ExperiencePage = ({ experience }) => {

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
                <Experience experience={experience} />
            </Container>
        </>
    )
}

export default ExperiencePage
export const getStaticProps = async () => {
    // const readStats = await getReadStats();
    const experience = await fetcher(`${process.env.API_URL}/experience`)

    return {
        props: {
            experience
        },
        revalidate: 1,
    };
};