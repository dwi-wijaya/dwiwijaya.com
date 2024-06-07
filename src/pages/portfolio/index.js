import PageHeading from '@/components/common/PageHeading';
import Container from '@/components/layout/Container'
import Portfolio from '@/components/views/portfolio/Portfolio'
import { fetcher } from '@/services/fetcher';
import { NextSeo } from 'next-seo';
import Head from 'next/head';
import { useRouter } from 'next/router';

const PAGE_TITLE = 'My Works';
const PAGE_DESCRIPTION = "Explore my latest projects and creations.";

const PortfolioPage = ({ portfolios }) => {

    const router = useRouter();
    const canonicalUrl = `${process.env.NEXT_PUBLIC_BASE_URL}${router.asPath}`;

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
                <Portfolio portfolios={portfolios} />
            </Container>
        </>
    )
}

export default PortfolioPage
export const getStaticProps = async () => {
    
    const portfolios = await fetcher(`${process.env.API_URL}/portfolio`)

    return {
        props: {
            portfolios
        },
        revalidate: 1,
    };
};