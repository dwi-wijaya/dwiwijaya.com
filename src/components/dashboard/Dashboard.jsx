import React from "react";
import useSWR from "swr";
import { getGithubUser } from "../../services/github";
import Overview from "./contributions/Overview";
import Calendar from "./contributions/Calendar";
import PageHeading from "../elements/PageHeading";
import PageSubHeading from "../elements/PageSubHeading";
import { PAGESPEED_URL } from "../../constants/pagespeed";
import PageSpeed from "./pagespeed";
import Letcode from "./letcode/Letcode";
import { fetcher } from "../../services/fetcher";
import { LEETCODE_API } from "../../constants/leetcode";
import style from './_dashboard.module.scss'
import { GITHUB_ACCOUNTS } from "../../constants/github";


const Dashboard = ({githubEndpoint, leetcodeEndpoint}) => {
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
    <section
      className="dashboard container section"
      id="dashboard"
      data-aos="fade-up"
    >
      <PageHeading
        title="Dashboard"
        description="This is my personal dashboard portfolio."
      />
      <PageSubHeading
        title="Pagespeed Insight"
        description="My pagespeed index by google APIs"
        icon="bx bx-tachometer"
        linkText='@pagespeed'
        link='https://pagespeed.web.dev/'
      />
      <PageSpeed style={style} />

      <hr className="border-section" />
      <PageSubHeading
        title="LeetCode Statistics"
        description="My LeetCode progress and performance."
        icon="bx bx-code"
        linkText='@dwi-wijaya'
        link='https://leetcode.com/dwi-wijaya'
      />
      <Letcode style={style} data={leetcodeData}/>

      <hr className="border-section" />
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
          <Overview style={style} data={contributionCalendar} />
          <Calendar style={style} data={contributionCalendar} />
        </div>
      )}

      </section>
    </section>
  );
};

export default Dashboard;
