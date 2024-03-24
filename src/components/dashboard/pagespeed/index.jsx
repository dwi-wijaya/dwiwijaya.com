"use client";
import React, { useState } from 'react'
import useSwr from 'swr'

import BadgeSection from './BadgeSection'
import SpeedSection from './SpeedSection'
import { PAGESPEED_API } from '../../../constants/pagespeed'
import { fetcher } from '../../../services/fetcher'

export default function PageSpeed() {

  const [url, setUrl] = useState(PAGESPEED_API)
  const [active, setActive] = useState('')

  const { data, isLoading, mutate } = useSwr(url, fetcher)

  function refetch(path) {
    setActive(path)
    setUrl(PAGESPEED_API + path )
    mutate()
  }

  return (
    <section>
      <BadgeSection active={active} refetch={refetch} />
      <SpeedSection data={data} isLoading={isLoading} />
    </section>
  )
}
