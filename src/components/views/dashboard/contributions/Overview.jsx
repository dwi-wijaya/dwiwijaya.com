import { useRouter } from "next/router";
import DashboardCard from "../DashboardCard";

const Overview = ({ style, data }) => {
    const { locale } = useRouter();

    const totalContributions = data?.totalContributions || 0;
  const weeks = data?.weeks || [];

  const totalThisWeekContribution =
    weeks[weeks.length - 1]?.contributionDays
      ?.map((item) => item.contributionCount)
      ?.reduce(
        (previousValue, currentValue) => previousValue + currentValue,
        0
      ) || 0;
  const totalContributionList = weeks
    .map((week) =>
      week.contributionDays.map(
        (contributionDay) => contributionDay.contributionCount
      )
    )
    .flat();

  const bestContribution = Math.max(...totalContributionList) || 0;
  const averageContribution = totalContributions / totalContributionList.length;

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 mb-6 mt-4 gap-2">
      <DashboardCard title="Total" value={totalContributions} />
      <DashboardCard title={locale == "en" ? "This Week" : "Minggu Ini"} value={totalThisWeekContribution} />
      <DashboardCard title={locale == "en" ? "Best Day" : "Hari Terbaik"} value={bestContribution} />
      <DashboardCard title={locale == "en" ? "Average" : "Rata-rata"} value={averageContribution} unit={locale == "en" ? "/ day" : "/ hari"} />
    </div>
  );
};

export default Overview;
