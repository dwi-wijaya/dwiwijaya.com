import React from 'react'
import PageHeading from '../../common/PageHeading';
import { _Resume, resumeData } from '@/constants/data/resume';

const Resume = () => {
    return (
        <>
            <PageHeading
                title='Experience'
                description='Discover my professional background and valuable experiences.'
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-6">
                <div data-aos="fade-right" className="grid card relative !px-8 !py-6">
                    {resumeData.map((val, id) => {
                        if (val.category === "education") {
                            return (
                                <div key={id} className="relative pl-8 pb-8 md:pl-12 timeline">
                                    <i className="absolute -left-[0.6rem] -top-1 text-xl text-primary bg-container p-1 icon-graduation"></i>
                                    <span className="text-sm text-subtext">{val.year}</span>
                                    <h3 className="my-2 font-semibold text-lg">{val.major}</h3>
                                    <div className="flex gap-2">
                                        <a href="" className="timeline__text mb-1 pb-0 border-b border-[#727272] hover:border-text hover:text-primary transition-3s">
                                            {val.title}
                                        </a>
                                    </div>
                                    <p className="text-subtext">~ {val.degree}</p>
                                </div>
                            );
                        }
                    })}
                </div>
                <div data-aos="fade-right" className="grid card relative !px-8 !py-6">
                    {resumeData.map((val, id) => {
                        if (val.category === "experience") {
                            return (
                                <div key={id} className="relative pl-8 pb-8 md:pl-12 timeline">
                                    <i className="absolute -left-[0.6rem] -top-1 text-xl text-primary bg-container p-1 icon-briefcase"></i>
                                    <span className="text-sm text-subtext">{val.year}</span>
                                    <h3 className="my-2 font-semibold text-lg">{val.position}</h3>
                                    <div className="flex gap-2">
                                        <a href="" className="timeline__text mb-1 pb-0 border-b border-[#727272] hover:border-text hover:text-primary transition-3s">
                                            {val.company}
                                        </a>
                                        <span>•</span> {val.location}
                                    </div>
                                    <p className="text-subtext">~ {val.duration}</p>
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