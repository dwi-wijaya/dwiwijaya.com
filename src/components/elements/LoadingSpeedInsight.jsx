import React from 'react'

export default function LoadingSpeedInsight() {
  return (
    <div className="my-2 flex items-center justify-start text-xs gap-4 overflow-y-hidden">
      {[1, 2, 3, 4].map(item => (
        <div key={item} className="flex w-max gap-3 flex-col items-center justify-center space-y-2 text-center">
          <div className="mt-2 h-3 w-16 animate-pulse rounded-full bg-container md:w-[82px]"></div>
          <div className="h-16 !mt-0 !mb-1 w-16 animate-pulse rounded-full bg-transparent p-2 md:h-20 md:w-20">
            <div className="flex h-full w-full items-center outline outline-container !outline-[0.5rem] justify-center rounded-full bg-transparent">
              <i className=' text-xl bx bx-dots-horizontal-rounded' ></i>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
