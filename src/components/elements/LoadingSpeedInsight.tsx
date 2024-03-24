import React from 'react'
import '../dashboard/pagespeed/_speed_section.css'

export default function LoadingSpeedInsight() {
  return (
    <div className="speed__wrapper">
      {[1, 2, 3, 4].map(item => (
        <div key={item} className="speed__indicator">
          <div className="loading__speed-category"></div>
          <div className="loading__circle-wrapper">
            <div className="loading__circle">
              <i className='bx bx-dots-horizontal-rounded' ></i>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
