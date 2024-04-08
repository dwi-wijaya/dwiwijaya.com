import PageHeading from "@/components/common/PageHeading";
import Container from "@/components/layout/Container"
import About from "@/components/views/about/About"
import { fetcher } from "@/services/fetcher";
import { NextSeo } from "next-seo";
import { SWRConfig } from "swr";

const PAGE_TITLE = 'About';
const PAGE_DESCRIPTION = "Get to know me a little better, beyond the resume.";

const about = ({skills,certificates,about}) => {
    return (
        <>

            <NextSeo title={`${PAGE_TITLE} - Dwi Wijaya`} />

            <Container data-aos='fade-up'>
                <PageHeading
                    title={PAGE_TITLE}
                    description={PAGE_DESCRIPTION}
                />
                <About skills={skills} certificates={certificates} about={about} />
            </Container>
        </>
    )
}

export default about
export const getStaticProps = async () => {
    // const readStats = await getReadStats();
    const skills = await fetcher(`${process.env.API_URL}/skill`)
    const certificates = await fetcher(`${process.env.API_URL}/certificate`)
    let about = await fetcher(`${process.env.API_URL}/about`)
    about = about[0]
    return {
        props: {
            skills,certificates,about
        },
        revalidate: 1,
    };
};
