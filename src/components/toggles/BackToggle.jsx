// BackToggle.js

import { useRouter } from "next/router";

const BackToggle = () => {
    const router = useRouter();
    const handleGoBack = () => {
        router.back();
    };
    return (
        <button onClick={handleGoBack} aria-label="back toggle" className='group-[.sidebar-expanded]/main:-left-[200px] active:ring toggle gap-2 lg:left-[17rem] left-[70px] !text-primary'>
            <i className='fad fa-circle-arrow-left' /> Back
        </button>
    );
};

export default BackToggle;
