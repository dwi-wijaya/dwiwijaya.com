import { useTranslations } from 'next-intl';
import React from 'react'

const Guestbook = () => {
    const t = useTranslations();
    return (
        <>
            <div className="Guestbook__container">
                <h3 className='flex gap-2 items-center'><i className='fad fa-clock text-primary'></i>{t('Common.comingsoon')}</h3>
            </div>
        </>
    )
}

export default Guestbook