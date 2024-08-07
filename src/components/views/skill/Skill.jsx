import React from 'react'
import InfiniteSkill from './InfiniteSkill'
import PageSubHeading from '@/components/common/PageSubHeading'
import Certificates from './Certificates'
import { useTranslations } from 'next-intl'

const Skill = ({skills,certificates}) => {
    const t = useTranslations();
    return (
        <>
            <InfiniteSkill skills={skills} />
            <hr className="hr !my-8" />
            <PageSubHeading title={t('Skillset.certificateTitle')} description={t('Skillset.certificateSubtitle')} icon='fad fa-file-certificate' />
            <Certificates certificates={certificates} />
        </>
    )
}

export default Skill