import Link from "next/link"
import Router from "next/router"

const CollabsToggle = ({ handleClick }) => {
    return (
        <button
            onClick={() => { handleClick(); Router.push('/contact') }}
            data-umami-event='Click Open Freelance' href='/contact'
            className="flex gap-2 items-center bg-background border border-stroke px-5 py-3 rounded-2xl"
        >
            <i className="fad fa-laptop-code text-primary"></i>
            Open Freelance !
        </button>
    )
}

export default CollabsToggle