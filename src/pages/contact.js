import PageHeading from '@/components/common/PageHeading';
import Container from '@/components/layout/Container'
import Contact from '@/components/views/contact/Contact'
import { NextSeo } from 'next-seo'
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react'

const PAGE_TITLE = 'Get in touch';
const PAGE_DESCRIPTION = "Reach out and start a conversation about potential collaborations or inquiries.";


const ContactPage = () => {

  const router = useRouter();
  const canonicalUrl = `${process.env.NEXT_PUBLIC_SITE_URL}${router.asPath}`;

  return (
    <>
      <Head>
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <NextSeo title={`${PAGE_TITLE} - Dwi Wijaya`} />

      <Container data-aos='fade-up'>
        <PageHeading
          title={PAGE_TITLE}
          description={PAGE_DESCRIPTION}
        />
        <Contact />
      </Container>
    </>
  )
}

export default ContactPage