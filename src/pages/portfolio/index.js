import PageHeading from '@/components/common/PageHeading';
import Container from '@/components/layout/Container'
import Portfolio from '@/components/views/portfolio/Portfolio'
import { fetcher } from '@/services/fetcher';
import { NextSeo } from 'next-seo';

const PAGE_TITLE = 'My Works';
const PAGE_DESCRIPTION = "Explore my latest projects and creations.";

const portfolio = ({portfolios}) => {
    return (
        <>
            <NextSeo title={`${PAGE_TITLE} - Dwi Wijaya`} />
            <Container data-aos='fade-up'>
                <PageHeading
                    title={PAGE_TITLE}
                    description={PAGE_DESCRIPTION}
                />
                <Portfolio portfolios={portfolios}/>
            </Container>
        </>
    )
}

export default portfolio
export const getStaticProps = async () => {
    // const readStats = await getReadStats();
    const portfolios = await fetcher(`${process.env.API_URL}/portfolio`)

    return {
        props: {
            portfolios
        },
        revalidate: 1,
    };
};