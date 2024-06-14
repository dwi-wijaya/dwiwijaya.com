import PageHeading from '@/components/common/PageHeading'
import Container from '@/components/layouts/partials/Container'
import BackToggle from '@/components/toggles/BackToggle'
import DetailPortfolio from '@/components/views/portfolio/DetailPortfolio'
import { fetcher } from '@/services/fetcher'
import { NextSeo } from 'next-seo'
import React from 'react'

const DetailPortfolioPage = ({portfolio}) => {
    return (
        <>
            <NextSeo title={`${portfolio.name} - Dwi Wijaya`} />
            <BackToggle/>
            <Container data-aos='fade-up'>
                <DetailPortfolio portfolio={portfolio}/>
            </Container>
        </>
    )
}

export default DetailPortfolioPage

export const getServerSideProps = async ({ params }) => {
    const response = await fetcher(`${process.env.API_URL}/portfolio/${params?.slug}`)

    if (response === null) {
        return {
            redirect: {
                destination: '/404',
                permanent: false,
            },
        };
    }

    return {
        props: {
            portfolio: JSON.parse(JSON.stringify(response)),
        },
    };
}