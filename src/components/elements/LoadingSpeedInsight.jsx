import React from 'react'

export default function LoadingSpeedInsight({ style }) {
  return (
    <div className={style.speed__wrapper}>
      {[1, 2, 3, 4].map(item => (
        <div key={item} className={style.speed__indicator}>
          <div className={style['loading__speed-category']}></div>
          <div className={style['loading__circle-wrapper']}>
            <div className={style.loading__circle}>
              <i className='bx bx-dots-horizontal-rounded' ></i>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
