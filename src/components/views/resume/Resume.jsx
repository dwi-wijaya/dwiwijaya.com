import React from 'react'
import PageHeading from '../../common/PageHeading';
import { _Resume, resumeData } from '@/constants/data/resume';
import WorkDuration from '@/components/elements/WorkDuration';

const Resume = ({ experience }) => {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-6">
                <div data-aos="fade-right" className="grid card relative !px-8 !py-6">
                    {experience.map((val, id) => {
                        if (val.type === "education") {
                            return (
                                <div key={id} className="relative pl-8 pb-8 md:pl-12 timeline">
                                    <i className="absolute -left-[0.6rem] -top-1 text-xl text-primary bg-container p-1 icon-graduation"></i>
                                    <span className="text-sm text-subtext">{val.startMonth} - {val.endDate ?? 'present'}</span>
                                    <p className='text-sm text-subtext mt-3'><i class='bx bx-map-pin'></i> {val.location}</p> 
                                    <h3 className="my-2 font-semibold text-lg">{val.major}</h3>
                                    <div className="flex gap-2">
                                        <a href={val.link} className="timeline__text mb-1 pb-0 border-b border-[#727272] hover:border-text hover:text-primary transition-3s">
                                            {val.institution}
                                        </a>
                                    </div>
                                    <p className="text-subtext"><i class='bx bx-book'></i> {val.degree}</p>
                                </div>
                            );
                        }
                    })}
                </div>
                <div data-aos="fade-right" className="grid card relative !px-8 !py-6">
                    {experience.map((val, id) => {
                    {
                        console.log(val)
                    }
                        if (val.type === "work") {
                            return (
                                <div key={id} className="relative pl-8 pb-8 md:pl-12 timeline">
                                    <i className="absolute -left-[0.6rem] -top-1 text-xl text-primary bg-container p-1 icon-briefcase"></i>
                                    <span className="text-sm text-subtext">{val.startMonth} - {val.endDate ?? 'present'}</span>
                                    <p className='text-sm text-subtext mt-3'><i class='bx bx-map-pin'></i> {val.location}</p> 
                                    <h3 className="my-2 font-semibold text-lg">{val.position}</h3>
                                    <div className="flex gap-2">
                                        <a href="" className="timeline__text mb-1 pb-0 border-b border-[#727272] hover:border-text hover:text-primary transition-3s">
                                            {val.institution}
                                        </a>
                                    </div>
                                    <WorkDuration startMonth={val.startMonth} endMonth={val.endMonth} />
                                </div>
                            );
                        }
                    })}
                </div>
            </div>
        </>
    )
}

export default Resume