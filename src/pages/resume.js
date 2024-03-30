import PageHeading from '@/components/common/PageHeading';
import Container from '@/components/layout/Container'
import Resume from '@/components/views/resume/Resume'
import { NextSeo } from 'next-seo';
import React from 'react'

const PAGE_TITLE = 'Experience';
const PAGE_DESCRIPTION = "Discover my professional background and valuable experiences.";

const resume = () => {
    return (
        <>
            <NextSeo title={`${PAGE_TITLE} - Dwi Wijaya`} />
            <Container>
                <PageHeading
                    title={PAGE_TITLE}
                    description={PAGE_DESCRIPTION}
                />
                <Resume />
            </Container>
        </>
    )
}

export default resume