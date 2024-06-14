import React from 'react'
import Sidebar from './partials/Sidebar'
import Overlay from './partials/Overlay'

const Layout = ({ lastUpdate, children }) => {
    return (
        <>
            <Sidebar lastUpdate={lastUpdate}/>
            <div className='group/main main ml-0 lg:ml-64 '>
                <Overlay />
                {children}
            </div>
        </>
    )
}

export default Layout