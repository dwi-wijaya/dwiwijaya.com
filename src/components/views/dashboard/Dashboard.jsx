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
  console.log(GITHUB_ACCOUNTS);
  const { data: leetcodeData, error: leetcodeError } = useSWR(leetcodeEndpoint, fetcher);
  const { data: githubData, error: githubError } = useSWR(githubEndpoint, fetcher);
  // console.log(leetcodeData);
  if (githubError) {
    // console.error("Error fetching GitHub data:", githubError);
    return null; // or display an error message
  }


  if (leetcodeError) {
    // console.error("Error fetching LeetCode data:", leetcodeError);
    return null; // or display an error message
  }

  const contributionCalendar = githubData?.contributionsCollection?.contributionCalendar;
  console.log(contributionCalendar);
  return (
    <section>
      <PageSubHeading
        title="Pagespeed Insight"
        description="My pagespeed index by google APIs"
        icon="bx bx-tachometer"
        linkText='@pagespeed'
        link='https://pagespeed.web.dev/'
      />
      <PageSpeed/>

      
      <hr className="hr" />
      <PageSubHeading
        title="Contributions"
        description="My contributions from last year on github."
        icon="bx bxl-github"
        linkText='@dwi-wijaya'
        link='https://github.com/dwi-wijaya'
      />
      <section className="contribution__section">
        {!githubData && <div className='dark:text-neutral-400'>No Github Data</div>}

        {githubData && (
          <div className='space-y-3'>
            <Overview data={contributionCalendar} />
            <Calendar data={contributionCalendar} />
          </div>
        )}

      </section>

      <hr className="hr" />
      <PageSubHeading
        title="LeetCode Statistics"
        description="My LeetCode progress and performance."
        icon="bx bx-code"
        linkText='@dwi-wijaya'
        link='https://leetcode.com/dwi-wijaya'
      />
      <Letcode data={leetcodeData} />

    </section>
  );
};

export default Dashboard;
