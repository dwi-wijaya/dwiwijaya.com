import React from 'react'
import PageHeading from '../elements/PageHeading'

const Blog = () => {
    return (
        <section data-section className="blog container section" id="blog">
            <PageHeading title='Blog' description='Exploring the world of code, creativity, and constant learning.' />
            <div className="blog__container">
                <h3><i className='bx bx-time-five'></i> Coming Soon</h3>
            </div>
        </section>
    )
}

export default Blog