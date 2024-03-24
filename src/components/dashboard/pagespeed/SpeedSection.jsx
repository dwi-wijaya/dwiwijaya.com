import React from 'react'
import CircleProgress from '../../elements/CircleProgress'
import LoadingSpeedInsight from '../../elements/LoadingSpeedInsight'



export default function SpeedSection({ data, isLoading }) {
  const categories = data?.lighthouseResult?.categories || {}
  const categoriesInArray = Object.keys(categories).map(key => ({ ...categories[key] }))

  if (isLoading) return <LoadingSpeedInsight />

  return (
    <div className="speed__wrapper">
      {categoriesInArray.map(category => (
        <div key={category.id} className="speed__indicator">
          <h3>{category.title}</h3>
          <CircleProgress value={Number(category.score || 0) * 100} />
        </div>
      ))}
    </div>
  )
}
