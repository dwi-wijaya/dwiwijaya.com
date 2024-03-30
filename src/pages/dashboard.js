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

const PAGE_TITLE = 'Dashboard';
const PAGE_DESCRIPTION = "This is my personal dashboard portfolio.";

const DashboardPage = ({ fallback }) => {
    return (
        <>
            <NextSeo title={`${PAGE_TITLE} - Dwi Wijaya`} />
            <SWRConfig value={{ fallback }}>
                <Container data-aos='fade-up'>
                    <PageHeading
                        title={PAGE_TITLE}
                        description={PAGE_DESCRIPTION}
                    />
                    <Dashboard leetcodeEndpoint={LEETCODE_ACCOUNTS.endpoint} githubEndpoint={GITHUB_ACCOUNTS[0].endpoint} />
                </Container>
            </SWRConfig>
        </>
    );
};

export default DashboardPage;

export const getStaticProps = async () => {
    // const readStats = await getReadStats();
    const githubUserPersonal = await getGithubUser('personal');
    const leetcodeStats = await getLeetcode();
    return {
        props: {
            fallback: {
                // '/api/read-stats': readStats.data,
                '/api/leetcode': leetcodeStats,
                '/api/github?type=personal': githubUserPersonal?.data,
            },
        },
        revalidate: 1,
    };
};
