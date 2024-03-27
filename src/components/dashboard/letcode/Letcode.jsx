import React from 'react'
import DashboardCard from '../DashboardCard'

const Letcode = ({ style, data }) => {
  return (
    <div className='leetcode__section'>
      <div className={style.dashboard__cards}>
        <DashboardCard style={style} title='Acceptance Rate' value={data.acceptanceRate || 0} unit='%' />
        <DashboardCard style={style} title='Contribution Points' value={data.contributionPoints || 0} />
        <DashboardCard style={style} title='Total Solved' value={data.totalSolved || 0} />
        <DashboardCard style={style} title='Easy - Medium - Hard' value={[data.easySolved || 0, data.mediumSolved || 0, data.hardSolved || 0]} isMultiple={true} />
      </div>
    </div>
  )
}

export default Letcode