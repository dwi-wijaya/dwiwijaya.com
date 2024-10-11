import React from "react";
import useSWR from "swr";
import { getGithubUser } from "@/services/GithubServices";
import PageSpeed from "./pagespeed";
import { fetcher } from "@/services/fetcher";
import { LEETCODE_API } from "@/constants/leetcode";
import { GITHUB_ACCOUNTS } from "@/constants/github";
import PageHeading from "@/components/common/PageHeading";
import PageSubHeading from "@/components/common/PageSubHeading";
import Letcode from "./leetcode/Leetcode";
import Overview from "./contributions/Overview";
import Calendar from "./contributions/Calendar";
import { useTranslations } from "next-intl";


const Dashboard = ({ githubEndpoint, leetcodeEndpoint }) => {
  const t = useTranslations();

  const { data: leetcodeData } = useSWR(leetcodeEndpoint, fetcher);
  const { data: githubData } = useSWR(githubEndpoint, fetcher);

  const contributionCalendar = githubData?.contributionsCollection?.contributionCalendar;

  return (
    <div className="flex flex-col space-y-10">
      <section>
        <PageSubHeading
          title="Pagespeed Insight"
          description={t('Dashboard.pagespeedSubtitle')}
          icon="bx bx-tachometer"
          linkText='@pagespeed'
          link='https://pagespeed.web.dev/'
          tintIcon={false}
        />
        <PageSpeed />
      </section>

      <section>
        <PageSubHeading
          title="Contributions"
          description={t('Dashboard.githubSubtitle')}
          icon="bx bxl-github"
          linkText='@dwi-wijaya'
          link='https://github.com/dwi-wijaya'
          tintIcon={false}
        />
        <>
          {!githubData && <div className='dark:text-neutral-400'>No Github Data</div>}

          {githubData && (
            <div className='space-y-3'>
              <Overview data={contributionCalendar} />
              <Calendar data={contributionCalendar} />
            </div>
          )}
        </>
      </section>

      <section>
        <PageSubHeading
          title="LeetCode Statistics"
          description={t('Dashboard.leetcodeSubtitle')}
          icon="bx bx-code"
          linkText='@dwi-wijaya'
          link='https://leetcode.com/dwi-wijaya'
          tintIcon={false}
        />
        <Letcode data={leetcodeData} />
      </section>

    </div>
  );
};

export default Dashboard;
