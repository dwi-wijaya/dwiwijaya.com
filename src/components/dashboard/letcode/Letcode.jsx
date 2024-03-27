import React from 'react'
import DashboardCard from '../DashboardCard'

const Letcode = ({ style, data }) => {
  return (
    <div className='leetcode__section'>
      <div className={style.dashboard__cards}>
        <DashboardCard style={style} title='Acceptance Rate' value={data.acceptanceRate} unit='%' />
        <DashboardCard style={style} title='Contribution Points' value={data.contributionPoints} />
        <DashboardCard style={style} title='Total Solved' value={data.totalSolved} />
        <DashboardCard style={style} title='Easy - Medium - Hard' value={[data.easySolved, data.mediumSolved, data.hardSolved]} isMultiple={true} />
      </div>
    </div>
  )
}

export default Letcode