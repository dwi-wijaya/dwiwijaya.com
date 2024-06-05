import PageHeading from "@/components/common/PageHeading";
import Container from "@/components/layout/Container"
import About from "@/components/views/about/About"
import { fetcher } from "@/services/fetcher";
import { NextSeo } from "next-seo";

const PAGE_TITLE = 'About';
const PAGE_DESCRIPTION = "Get to know me a little better, beyond the resume.";

const about = ({ skills, certificates, about }) => {
    return (
        <>

            <NextSeo title={`${PAGE_TITLE} - Dwi Wijaya`} />

            <Container data-aos='fade-up'>
                <PageHeading
                    title={PAGE_TITLE}
                    description={PAGE_DESCRIPTION}
                />
                <About about={about} />
            </Container>
        </>
    )
}

export default about
export const getStaticProps = async () => {
    // const readStats = await getReadStats();

    let about = await fetcher(`${process.env.API_URL}/about`)
    about = about[0]
    return {
        props: {
            about
        },
    };
};
