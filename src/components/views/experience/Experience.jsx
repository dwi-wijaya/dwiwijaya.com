import React from 'react'
import PageHeading from '../../common/PageHeading';
import { _Experience, experienceData } from '@/constants/data/experience';
import WorkDuration from '@/components/elements/WorkDuration';
import { motion } from "framer-motion";

const Experience = ({ experience }) => {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.05, delay: 1 * 0.1 }}  className="grid card relative !px-8 !py-6">
                    {experience.map((val, id) => {
                        if (val.type === "education") {
                            return (
                                <div key={id} className="relative pl-8 pb-8 md:pl-12 timeline">
                                    <i className="absolute -left-[0.6rem] -top-1 text-xl text-primary bg-container p-1 icon-graduation"></i>
                                    <span className="text-sm text-subtext">{val.startMonth} - {val.endMonth ? val.endMonth : 'present'}</span>
                                    <p className='text-sm text-subtext mt-3'><i className='text-primary bx bx-map-pin'></i> {val.location}</p>
                                    <p className="text-sm text-subtext mt-1"><i className='text-primary bx bx-book'></i> {val.degree}</p>
                                    <h3 className="mt-2 font-semibold text-lg">{val.major}</h3>
                                    <div className="flex gap-2">
                                        <a umami-event={`Click Education School - ${val.institution}`} href={val.link} className="timeline__text mb-1 pb-0 border-b border-[#727272] hover:border-primary hover:text-primary transition-3s">
                                            {val.institution}
                                        </a>
                                    </div>
                                </div>
                            );
                        }
                    })}
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.05, delay: 2 * 0.1 }} className="grid card relative !px-8 !py-6">
                    {experience.map((val, id) => {
                        if (val.type === "work") {
                            return (
                                <div key={id} className="relative pl-8 pb-8 md:pl-12 timeline">
                                    <i className="absolute -left-[0.6rem] -top-1 text-xl text-primary bg-container p-1 icon-briefcase"></i>
                                    <span className="text-sm text-subtext">{val.startMonth} - {val.endMonth ? val.endMonth : 'present'}</span>
                                    <p className='text-sm text-subtext mt-3'><i className='text-primary bx bx-map-pin'></i> {val.location}</p>
                                    <WorkDuration startMonth={val.startMonth} endMonth={val.endMonth} />
                                    <h3 className="mt-2 font-semibold text-lg">{val.position}</h3>
                                    <div className="flex gap-2">
                                        <a umami-event={`Click Career Company - ${val.institution}`} href="" className="timeline__text mb-1 pb-0 border-b border-[#727272] hover:border-primary hover:text-primary transition-3s">
                                            {val.institution}
                                        </a>
                                    </div>
                                </div>
                            );
                        }
                    })}
                </motion.div>
            </div>
        </>
    )
}

export default Experience