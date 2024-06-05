import Link from "next/link"

const CollabsToggle = () => {
    return (
        <Link href='/contact' className="flex gap-2 items-center bg-background border border-stroke px-5 py-3 rounded-2xl" >
            <div className="fad fa-laptop-code text-primary"></div>
            Open Freelance !
        </Link>
    )
}

export default CollabsToggle