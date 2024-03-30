import PageHeading from '@/components/common/PageHeading';
import Container from '@/components/layout/Container'
import Portfolio from '@/components/views/portfolio/Portfolio'
import { NextSeo } from 'next-seo';

const PAGE_TITLE = 'My Works';
const PAGE_DESCRIPTION = "Explore my latest projects and creations.";

const portfolio = () => {
    return (
        <>
            <NextSeo title={`${PAGE_TITLE} - Dwi Wijaya`} />
            <Container>
                <PageHeading
                    title={PAGE_TITLE}
                    description={PAGE_DESCRIPTION}
                />
                <Portfolio />
            </Container>
        </>
    )
}

export default portfolio