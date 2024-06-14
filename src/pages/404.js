import Container from '@/components/layout/Container'
import { NextSeo } from 'next-seo'
import Link from 'next/link'
import React from 'react'

const Custom404 = () => {
    return (
        <Container>
            <NextSeo title="404 - Page Not Found" />
            <section className="">
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 mt-14">
                    <div className="mx-auto max-w-screen-sm text-center">
                        <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary dark:text-primary-500">404</h1>
                        <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">Something&apos;s missing.</p>
                        <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">Sorry, we can&apos;t find that page. You&apos;ll find lots to explore on the home page. </p>
                        <Link href="/" className="btn !inline-flex">Back to Homepage</Link>
                    </div>
                </div>
            </section>
        </Container>
    )
}

export default Custom404