import DashboardCard from "../DashboardCard";

const Overview = ({ style, data }) => {
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
      <DashboardCard title="This Week" value={totalThisWeekContribution} />
      <DashboardCard title="Best Day" value={bestContribution} />
      <DashboardCard title="Average" value={averageContribution} unit="/ day" />
    </div>
  );
};

export default Overview;
