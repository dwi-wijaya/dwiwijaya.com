import React from 'react'

const Info = () => {
  return (
    <section className="mb-6 grid grid-cols-3 md:grid-cols-3fr justify-center lg:justify-normal gap-4 lg:gap-3">
      <div className="card items-center !rounded-xl text-center !px-3 !py-2 !lg:px-5 !lg:py-4">
        <i className='bx bx-award text-title text-xl'></i>
        <h3 className="font-medium font-sm">Experience</h3>
        <div className="text-xs text-subtext mt-1">2 Years Working</div>
      </div>
      <div className="card items-center !rounded-xl text-center !px-3 !py-2 !lg:px-5 !lg:py-4">
        <i className='bx bx-briefcase-alt text-title text-xl'></i>
        <h3 className="font-medium font-sm">Completed</h3>
        <div className="text-xs text-subtext mt-1">48 + Projects</div>
      </div>
      <div className="card items-center !rounded-xl text-center !px-3 !py-2 !lg:px-5 !lg:py-4">
        <i className='bx bx-support text-title text-xl'></i>
        <h3 className="font-medium font-sm">Support</h3>
        <div className="text-xs text-subtext mt-1">Online 24/7</div>
      </div>
    </section>
  )
}

export default Info