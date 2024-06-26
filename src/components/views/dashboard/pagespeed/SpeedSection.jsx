import CircleProgress from '@/components/elements/CircleProgress'
import LoadingSpeedInsight from '@/components/elements/LoadingSpeedInsight'
import React from 'react'


export default function SpeedSection({ data, isLoading, style }) {
    const categories = data?.lighthouseResult?.categories || {}
    const categoriesInArray = Object.keys(categories).map(key => ({ ...categories[key] }))

    if (isLoading) return <LoadingSpeedInsight style={style} />

    return (
        <div className="my-2 flex items-center justify-start text-xs gap-4 overflow-y-hidden scrollbar-hide">
            {categoriesInArray.map(category => (
                <div key={category.id} className="mt-2 flex flex-col items-center justify-start text-xs gap-3">
                    <h3 className='whitespace-nowrap'>{category.title}</h3>
                    <CircleProgress style={style} value={Number(category.score || 0) * 100} />
                </div>
            ))}
        </div>
    )
}