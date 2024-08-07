import { GetStaticProps, NextPage } from 'next';
import { NextSeo } from 'next-seo';
import { SWRConfig } from 'swr';
import { getGithubUser } from '@/services/GithubServices';
import { getLeetcode } from '@/services/LeetcodeService';
import { LEETCODE_ACCOUNTS } from '@/constants/leetcode';
import { GITHUB_ACCOUNTS } from '@/constants/github';
import Container from '@/components/layouts/partials/Container';
import Dashboard from '@/components/views/dashboard/Dashboard';
import PageHeading from '@/components/common/PageHeading';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { useTranslations } from 'next-intl';


const DashboardPage = ({ fallback }) => {
    
    const t = useTranslations();
    const router = useRouter();
    const canonicalUrl = `${process.env.NEXT_PUBLIC_SITE_URL}${router.asPath}`;

    const PAGE_TITLE = t('Dashboard.title');
    const PAGE_DESCRIPTION = t('Dashboard.subtitle');

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
