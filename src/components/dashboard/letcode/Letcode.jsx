import React from 'react'
import DashboardCard from '../DashboardCard'

const Letcode = ({ data }) => {
  return (
    <div className="dashboard__leetcode">
      <div className="dashboard__cards">
        <DashboardCard title='Acceptance Rate' value={data.acceptanceRate} unit='%' />
        <DashboardCard title='Contribution Points' value={data.contributionPoints} />
        <DashboardCard title='Total Solved' value={data.totalSolved} />
        <DashboardCard title='Easy - Medium - Hard' value={[data.easySolved, data.mediumSolved, data.hardSolved]} isMultiple={true} />
      </div>
    </div>
  )
}

export default Letcode