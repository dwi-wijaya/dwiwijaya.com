import PageHeading from '@/components/common/PageHeading';
import Container from '@/components/layout/Container'
import Experience from '@/components/views/experience/Experience'
import { fetcher } from '@/services/fetcher';
import { NextSeo } from 'next-seo';
import React from 'react'

const PAGE_TITLE = 'Experience';
const PAGE_DESCRIPTION = "Discover my professional background and valuable experiences.";

const experience = ({experience}) => {
    return (
        <>
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

export default experience
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