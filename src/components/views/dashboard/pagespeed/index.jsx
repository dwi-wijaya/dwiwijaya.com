
import React, { useState } from 'react'
import useSwr from 'swr'
import { PAGESPEED_API } from '@/constants/pagespeed'
import { fetcher } from '@/services/fetcher'
import BadgeSection from './Badge'
import SpeedSection from './SpeedSection'

export default function PageSpeed({ style }) {

    const [url, setUrl] = useState(PAGESPEED_API)
    const [active, setActive] = useState('/')

    const { data, isLoading, mutate } = useSwr(url, fetcher)

    function refetch(path) {
        console.log(path);
        setActive(path)
        setUrl(PAGESPEED_API + path)
        mutate()
    }

    return (
        <section className='pagespeed__section'>
            <BadgeSection active={active} refetch={refetch} />
            <SpeedSection data={data} isLoading={isLoading} />
        </section>
    )
}
