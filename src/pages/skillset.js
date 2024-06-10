import PageHeading from '@/components/common/PageHeading';
import Container from '@/components/layout/Container';
import Skill from '@/components/views/skill/Skill';
import { fetcher } from '@/services/fetcher';
import { NextSeo } from 'next-seo';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react'

const PAGE_TITLE = 'Skillset';
const PAGE_DESCRIPTION = "Explore professional skillset and expertise";

const SkillsetPage = ({ skills, certificates }) => {

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
                <Skill skills={skills} certificates={certificates} />
            </Container>
        </>
    )
}

export default SkillsetPage
export const getStaticProps = async () => {

    const skills = await fetcher(`${process.env.API_URL}/skill`)
    const certificates = await fetcher(`${process.env.API_URL}/certificate`)

    return {
        props: {
            skills, certificates
        },
    };
};