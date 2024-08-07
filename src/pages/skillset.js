import PageHeading from '@/components/common/PageHeading';
import Container from '@/components/layouts/partials/Container';
import Skill from '@/components/views/skill/Skill';
import { fetcher } from '@/services/fetcher';
import { useTranslations } from 'next-intl';
import { NextSeo } from 'next-seo';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react'


const SkillsetPage = ({ skills, certificates }) => {

    const t = useTranslations();
    const router = useRouter();
    const canonicalUrl = `${process.env.NEXT_PUBLIC_SITE_URL}${router.asPath}`;

    const PAGE_TITLE = t('Skillset.title');
    const PAGE_DESCRIPTION = t('Skillset.subtitle');
    
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