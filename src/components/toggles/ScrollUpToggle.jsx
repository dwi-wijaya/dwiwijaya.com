import React from 'react'

const ScrollUpToggle = () => {
    window.addEventListener('scroll', function() {
        const scrollUp = document.querySelector('.scrollup');
        if (this.scrollY >= 560) {
            scrollUp.classList.add('show-scroll');
        } else {
            scrollUp.classList.remove('show-scroll');
        }
    })
    return (
        <a aria-label='go to top' href='#' className="scrollup toggle scrollup__toggle">
            <i className='bx bx-up-arrow-alt' ></i>
        </a>
    )
}

export default ScrollUpToggle