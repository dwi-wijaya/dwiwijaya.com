import PageHeading from '@/components/common/PageHeading';
import Container from '@/components/layouts/partials/Container'
import Portfolio from '@/components/views/portfolio/Portfolio'
import { fetcher } from '@/services/fetcher';
import { useTranslations } from 'next-intl';
import { NextSeo } from 'next-seo';
import Head from 'next/head';
import { useRouter } from 'next/router';


const PortfolioPage = ({ portfolios }) => {
    
    const t = useTranslations();
    const router = useRouter();
    const canonicalUrl = `${process.env.NEXT_PUBLIC_SITE_URL}${router.asPath}`;
    
    const PAGE_TITLE = t('Portfolio.title');
    const PAGE_DESCRIPTION = t('Portfolio.subtitle');

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