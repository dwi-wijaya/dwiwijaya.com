import { supabase } from "@/lib/supabase";
import Link from "next/link";
import { BsGithub as GithubIcon } from "react-icons/bs";
import { FcGoogle as GoogleIcon } from "react-icons/fc";
import { HiOutlineLogin as SignInIcon } from "react-icons/hi";


const Providers = [
    {
        id: "google",
        icon: <GoogleIcon size={18} />,
        bgColor: "!bg-white",
        iconColor: "text-black",
        textColor: "text-black",
        label: "Sign in with Google",
    },
    {
        id: "github",
        icon: <GithubIcon size={18} />,
        bgColor: "!bg-white",
        iconColor: "!text-black",
        textColor: "text-black",
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
                <p className="text-xs sm:text-sm ml-1">
                    <span className="inline-block align-middle">
                        <SignInIcon size={16} className="min-w-4 text-start mr-[2px] mb-[2px]" />
                    </span>
                    <span className="">
                        Please sign in to send a message. Don’t worry, your data is safe—learn more in our <Link className="text-primary underline underline-offset-2" target="_blank" href="/privacy-policy">Privacy Policy</Link>.
                    </span>
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
                            className={`btn outline outline-stroke outline-1 !border-none min-w-56 ${button.bgColor} ${button.iconColor} `}
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
