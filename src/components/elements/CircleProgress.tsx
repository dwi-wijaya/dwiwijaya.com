import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import '../dashboard/pagespeed/_speed_section.css'

export default function CircleProgress({ value }) {
  return (
    <div data-testid="progress" className="speed__progress">
      <CircularProgressbar
        value={value}
        text={`${value}%`}
        styles={buildStyles({
          textColor: '#008800',
          pathColor: '#00cc66',
          backgroundColor: '#ebf9f0'
        })}
      />
    </div>
  )
}
