import { useTranslations } from 'next-intl';
import PageSubHeading from '../../common/PageSubHeading'

const About = () => {
    const t = useTranslations();
    return (
    <>
      <div className="">
        <p className='mb-6'>
          {t('About.intro')}
        </p>

        <PageSubHeading icon={'fad fa-route'} title={t('About.journeyTitle')} />
        <p className='mb-6'>{t('About.journey')}</p>

        <PageSubHeading icon={'fad fa-lightbulb'} title={t('About.valuesTitle')} />
        <p className='mb-6'>{t('About.values')}</p>

        <PageSubHeading icon={'fad fa-laugh-beam'} title={t('About.funTitle')} />

        <ul>
          <li>{t('About.funfact')}</li>
        </ul>

      </div>
    </>
  )
}

export default About