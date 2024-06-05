import React from 'react'
import InfiniteSkill from './InfiniteSkill'
import PageSubHeading from '@/components/common/PageSubHeading'
import Certificates from './Certificates'

const Skill = ({skills,certificates}) => {
    return (
        <>
            <InfiniteSkill skills={skills} />
            <hr className="hr !my-8" />
            <PageSubHeading title='Certificates' description='A showcase of my professional certificates .' icon='fad fa-file-certificate' />
            <Certificates certificates={certificates} />
        </>
    )
}

export default Skill