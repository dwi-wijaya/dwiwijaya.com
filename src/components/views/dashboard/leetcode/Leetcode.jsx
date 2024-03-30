import React from 'react'
import DashboardCard from '../DashboardCard'

const Letcode = ({  data }) => {
  return (
    <div className='leetcode__section'>
      <div className="grid grid-cols-2 md:grid-cols-4 mb-6 mt-4 gap-2 scrollbar-hide">
        <DashboardCard title='Acceptance Rate' value={data.acceptanceRate || 0} unit='%' />
        <DashboardCard title='Contribution Points' value={data.contributionPoints || 0} />
        <DashboardCard title='Total Solved' value={data.totalSolved || 0} />
        <DashboardCard title='Easy - Medium - Hard' value={[data.easySolved || 0, data.mediumSolved || 0, data.hardSolved || 0]} isMultiple={true} />
      </div>
    </div>
  )
}

export default Letcode