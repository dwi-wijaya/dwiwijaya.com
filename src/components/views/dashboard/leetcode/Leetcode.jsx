import React from 'react'
import DashboardCard from '../DashboardCard'
import { useRouter } from 'next/router';

const Letcode = ({  data }) => {
    const { locale } = useRouter();
    return (
    <div className='leetcode__section'>
      <div className="grid grid-cols-2 md:grid-cols-4 mb-6 mt-4 gap-2 scrollbar-hide">
        <DashboardCard title={locale == "en" ? "Acceptance Rate" : "Rasio Penerimaan"} value={data.acceptanceRate || 0} unit='%' />
        <DashboardCard title={locale == "en" ? "Contribution Points" : "Poin Kontribusi"} value={data.contributionPoints || 0} />
        <DashboardCard title={locale == "en" ? "Completed" : "Penyelesaian "} value={data.totalSolved || 0} />
        <DashboardCard title={locale == "en" ? "Easy - Medium - Hard" : "Mudah - Sedang - Sulit"} value={[data.easySolved || 0, data.mediumSolved || 0, data.hardSolved || 0]} isMultiple={true} />
      </div>
    </div>
  )
}

export default Letcode