import PageHeading from '@/components/common/PageHeading';
import Container from '@/components/layout/Container'
import Contact from '@/components/views/contact/Contact'
import { NextSeo } from 'next-seo'
import React from 'react'

const PAGE_TITLE = 'Get in touch';
const PAGE_DESCRIPTION = "Reach out and start a conversation about potential collaborations or inquiries.";


const contact = () => {
  return (
    <>
      <NextSeo title={`${PAGE_TITLE} - Dwi Wijaya`} />
      <Container>
        <PageHeading
          title={PAGE_TITLE}
          description={PAGE_DESCRIPTION}
        />
        <Contact />
      </Container>
    </>
  )
}

export default contact