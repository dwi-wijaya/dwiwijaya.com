import { supabase } from "@/lib/supabase";
import { BsGithub as GithubIcon } from "react-icons/bs";
import { FcGoogle as GoogleIcon } from "react-icons/fc";
import { HiOutlineLogin as SignInIcon } from "react-icons/hi";


const Providers = [
    {
        id: "google",
        icon: <GoogleIcon size={18} />,
        bgColor: "!bg-white border !border-stroke dark:border-none",
        textColor: "text-black",
        label: "Sign in with Google",
    },
    {
        id: "github",
        icon: <GithubIcon size={18} />,
        bgColor: "!bg-black !border-none",
        textColor: "text-white ",
        label: "Sign in with Github",
    },
];
const signIn = async (provider) => {
    const { error } = await supabase.auth.signInWithOAuth({
        provider, options: {
            redirectTo: `${window.location.origin}/guestbook`, // pastikan ini menuju ke halaman guestbook
        },
    });
};
const ChatAuth = () => {
    return (
        <div className="flex flex-col border-t border-stroke">
            <div className="space-y-5 pt-3 text-start text-neutral-700 dark:text-neutral-400">
                <p className=" text-xs sm:text-sm ml-1 flex gap-1 item-center">
                <SignInIcon size={16} className="cursor-pointer  text-text mt-[1px]" />Please sign in to start. Don&apos;t worry, your data is safe. 
                </p>
                <div
                    className={
                        `flex flex-col items-start sm:items-center justify-start gap-2 sm:gap-4 xs:flex-row lg:gap-5 !mt-3 `
                    }
                >
                    {Providers?.map((button) => (
                        <button
                            key={button.id}
                            onClick={() => signIn(button.id)}
                            className={`btn min-w-56  !text-white ${button.bgColor
                                } `}
                            data-umami-event={`Sign In to Chat: ${button.label}`}
                        >
                            {button.icon}
                            <span className={button.textColor}>{button.label}</span>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ChatAuth;
