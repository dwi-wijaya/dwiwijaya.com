import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'


export default function CircleProgress({ value }) {
    return (
        <div data-testid="progress" className="h-fit w-16 md:w-20">
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
