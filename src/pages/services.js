import PageHeading from '@/components/common/PageHeading';
import Container from '@/components/layout/Container'
import Services from '@/components/views/service/Services'
import { NextSeo } from 'next-seo';
import React from 'react'

const PAGE_TITLE = 'Services';
const PAGE_DESCRIPTION = "Learn about the specialized services I offer to clients.";

const services = () => {
    return (
        <>
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

export default services