import React from 'react'

export default function LoadingSpeedInsight() {
  return (
    <div className="my-4 flex items-center justify-start text-xs gap-4 overflow-y-hidden">
      {[1, 2, 3, 4].map(item => (
        <div key={item} className="flex w-max flex-col items-center justify-center space-y-2 text-center">
          <div className="h-3 w-16 animate-pulse rounded-full bg-container md:w-[82px]"></div>
          <div className="h-12 w-12 animate-pulse rounded-full bg-container p-[6px] md:h-16 md:w-16">
            <div className="flex h-full w-full items-center justify-center rounded-full bg-transparent">
              <i className='bx bx-dots-horizontal-rounded' ></i>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
