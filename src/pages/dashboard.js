import { GetStaticProps, NextPage } from 'next';
import { NextSeo } from 'next-seo';
import { SWRConfig } from 'swr';
import { getGithubUser } from '@/services/GithubServices';
import { getLeetcode } from '@/services/LeetcodeService';
import { LEETCODE_ACCOUNTS } from '@/constants/leetcode';
import { GITHUB_ACCOUNTS } from '@/constants/github';
import Container from '@/components/layout/Container';
import Dashboard from '@/components/views/dashboard/Dashboard';
import PageHeading from '@/components/common/PageHeading';
import { useRouter } from 'next/router';
import Head from 'next/head';

const PAGE_TITLE = 'Dashboard';
const PAGE_DESCRIPTION = "This is my personal dashboard portfolio.";

const DashboardPage = ({ fallback }) => {

    const router = useRouter();
    const canonicalUrl = `${process.env.NEXT_PUBLIC_SITE_URL}${router.asPath}`;

    return (
        <>
            <SWRConfig value={{ fallback }}>
                <Head>
                    <link rel="canonical" href={canonicalUrl} />
                </Head>
                <NextSeo title={`${PAGE_TITLE} - Dwi Wijaya`} />

                <Container data-aos='fade-up'>
                    <PageHeading
                        title={PAGE_TITLE}
                        description={PAGE_DESCRIPTION}
                    />
                    <Dashboard leetcodeEndpoint='/api/leetcode' githubEndpoint='/api/github' />
                </Container>
            </SWRConfig>
        </>
    );
};

export default DashboardPage;

export const getStaticProps = async () => {

    const githubContribution = await getGithubUser('personal');
    const leetcodeStats = await getLeetcode();

    return {
        props: {
            fallback: {
                '/api/github': githubContribution?.data,
                '/api/leetcode': leetcodeStats?.data,
            },
        },
        revalidate: 1,
    };
};
