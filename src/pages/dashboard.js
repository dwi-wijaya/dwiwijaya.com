import { GetStaticProps, NextPage } from 'next';
import { NextSeo } from 'next-seo';
import { SWRConfig } from 'swr';
import { getGithubUser } from '../services/github';
import Dashboard from '../components/dashboard/Dashboard';
import { LEETCODE_ACCOUNTS } from '../constants/leetcode';
import { GITHUB_ACCOUNTS } from '../constants/github';
import { getLeetcode } from '../services/github';



const PAGE_TITLE = 'Dashboard';
const PAGE_DESCRIPTION =
  'This is my personal dashboard, built with Next.js API routes deployed as serverless functions.';

const DashboardPage = ({ fallback }) => {
  return (
    <SWRConfig value={{ fallback }}>
      <NextSeo title={`${PAGE_TITLE} - Ryan Aulia`} />
        <Dashboard leetcodeEndpoint={LEETCODE_ACCOUNTS.endpoint} githubEndpoint={GITHUB_ACCOUNTS[0].endpoint} />
    </SWRConfig>
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
        '/api/leetcode' : leetcodeStats,
        '/api/github?type=personal': githubUserPersonal?.data,
      },
    },
    revalidate: 1,
  };
};
