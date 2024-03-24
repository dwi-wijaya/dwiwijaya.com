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
import './dashboard.css'
const Dashboard = () => {
  const { data: githubData, error: githubError } = useSWR("personal", getGithubUser);
  const { data: leetcodeData, error: leetcodeError } = useSWR(LEETCODE_API, fetcher);

  if (githubError) {
    console.error("Error fetching GitHub data:", githubError);
    return null; // or display an error message
  }


  if (leetcodeError) {
    console.error("Error fetching LeetCode data:", leetcodeError);
    return null; // or display an error message
  }

  if (!githubData) return "";
  if (!leetcodeData) return "";

  const contributionCalendar = githubData.data?.contributionsCollection?.contributionCalendar;

  return (
    <section
      className="contact container section"
      id="contact"
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
      <PageSpeed />

      <hr className="border-section" />
      <PageSubHeading
        title="LeetCode Statistics"
        description="My LeetCode progress and performance."
        icon="bx bx-code"
        linkText='@dwi-wijaya'
        link='https://leetcode.com/dwi-wijaya'
      />
      <Letcode data={leetcodeData}/>

      <hr className="border-section" />
      <PageSubHeading
        title="Contributions"
        description="My contributions from last year on github."
        icon="bx bxl-github"
        linkText='@dwi-wijaya'
        link='https://github.com/dwi-wijaya'
      />
      {contributionCalendar && <Overview data={contributionCalendar} />}
      {contributionCalendar && <Calendar data={contributionCalendar} />}
    </section>
  );
};

export default Dashboard;
