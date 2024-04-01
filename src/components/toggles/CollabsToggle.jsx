const CollabsToggle = () => {
    return (
        <div className='group-[.sidebar-expanded]/main:-left-[200px] !text-primary toggle !z-[9] lg:left-[105px] left-[70px] gap-2 transition-3s'>
            <span className="relative flex h-3 w-3 ">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#d87237]"></span>
            </span>
            Open for collabs !
        </div>
    )
}

export default CollabsToggle