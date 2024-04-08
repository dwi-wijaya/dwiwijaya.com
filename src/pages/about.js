import PageHeading from "@/components/common/PageHeading";
import Container from "@/components/layout/Container"
import About from "@/components/views/about/About"
import { fetcher } from "@/services/fetcher";
import { NextSeo } from "next-seo";
import { SWRConfig } from "swr";

const PAGE_TITLE = 'About';
const PAGE_DESCRIPTION = "Get to know me a little better, beyond the resume.";

const about = ({skills,certificates}) => {
    return (
        <>

            <NextSeo title={`${PAGE_TITLE} - Dwi Wijaya`} />

            <Container data-aos='fade-up'>
                <PageHeading
                    title={PAGE_TITLE}
                    description={PAGE_DESCRIPTION}
                />
                <About skills={skills} certificates={certificates} />
            </Container>
        </>
    )
}

export default about
export const getStaticProps = async () => {
    // const readStats = await getReadStats();
    const skills = await fetcher(`${process.env.API_URL}/skill`)
    console.log(skills)
    const certificates = await fetcher(`${process.env.API_URL}/certificate`)

    return {
        props: {
            skills,certificates
        },
        revalidate: 1,
    };
};
