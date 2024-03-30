import PageHeading from "@/components/common/PageHeading"
import Container from "@/components/layout/Container"
import Blog from "@/components/views/blog/Blog"
import { NextSeo } from "next-seo";

const PAGE_TITLE = 'Blog';
const PAGE_DESCRIPTION = "Exploring the world of code, creativity, and constant learning.";

const blog = () => {
    return (
        <>
            <NextSeo title={`${PAGE_TITLE} - Dwi Wijaya`} />
            
            <PageHeading
                title={PAGE_TITLE}
                description={PAGE_DESCRIPTION}
            />
            <Container>
                <Blog />
            </Container>
        </>
    )
}

export default blog