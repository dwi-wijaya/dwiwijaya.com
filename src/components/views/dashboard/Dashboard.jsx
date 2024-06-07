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


const Dashboard = ({ githubEndpoint, leetcodeEndpoint }) => {
  const { data: leetcodeData } = useSWR(leetcodeEndpoint, fetcher);
  const { data: githubData } = useSWR(githubEndpoint, fetcher);

  const contributionCalendar = githubData?.contributionsCollection?.contributionCalendar;

  return (
    <section>
      <PageSubHeading
        title="Contributions"
        description="My contributions from last year on github."
        icon="bx bxl-github"
        linkText='@dwi-wijaya'
        link='https://github.com/dwi-wijaya'
        tintIcon={false}
      />
      <section className="contribution__section mb-6">
        {!githubData && <div className='dark:text-neutral-400'>No Github Data</div>}

        {githubData && (
          <div className='space-y-3'>
            <Overview data={contributionCalendar} />
            <Calendar data={contributionCalendar} />
          </div>
        )}

      </section>
      <PageSubHeading
        title="LeetCode Statistics"
        description="My LeetCode progress and performance."
        icon="bx bx-code"
        linkText='@dwi-wijaya'
        link='https://leetcode.com/dwi-wijaya'
        tintIcon={false}
      />
      <Letcode data={leetcodeData} />
      <PageSubHeading
        title="Pagespeed Insight"
        description="My pagespeed index by google APIs"
        icon="bx bx-tachometer"
        linkText='@pagespeed'
        link='https://pagespeed.web.dev/'
        tintIcon={false}
      />
      <PageSpeed />


    </section>
  );
};

export default Dashboard;
