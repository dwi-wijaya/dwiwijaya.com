"use client";
import React, { useState } from 'react'
import useSwr from 'swr'
import BadgeSection from './BadgeSection'
import SpeedSection from './SpeedSection'
import { PAGESPEED_API } from '../../../constants/pagespeed'
import { fetcher } from '../../../services/fetcher'

export default function PageSpeed({style}) {

  const [url, setUrl] = useState(PAGESPEED_API)
  console.log(style);
  const [active, setActive] = useState('')

  const { data, isLoading, mutate } = useSwr(url, fetcher)

  function refetch(path) {
    setActive(path)
    setUrl(PAGESPEED_API + path )
    mutate()
  }

  return (
    <section className='pagespeed__section'>
      <BadgeSection style={style} active={active} refetch={refetch} />
      <SpeedSection style={style} data={data} isLoading={isLoading} />
    </section>
  )
}
