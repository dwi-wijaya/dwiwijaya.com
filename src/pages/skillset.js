import PageHeading from '@/components/common/PageHeading';
import Container from '@/components/layout/Container';
import Skill from '@/components/views/skill/Skill';
import { fetcher } from '@/services/fetcher';
import { NextSeo } from 'next-seo';
import React from 'react'

const PAGE_TITLE = 'Skillset';
const PAGE_DESCRIPTION = "Explore professional skillset and expertise";

const skillset = ({skills,certificates}) => {
    return (
        <>

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

export default skillset
export const getStaticProps = async () => {
    // const readStats = await getReadStats();
    const skills = await fetcher(`${process.env.API_URL}/skill`)
    const certificates = await fetcher(`${process.env.API_URL}/certificate`)
    return {
        props: {
            skills,certificates
        },
    };
};