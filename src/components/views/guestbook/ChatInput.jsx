import clsx from "clsx";
import { ChangeEvent, FormEvent, useRef, useState } from "react";
import { FiSend as SendIcon } from "react-icons/fi";

import ChatUserInfo from "./ChatUserInfo";

const ChatInput = ({ onSendMessage, session }) => {
    const [message, setMessage] = useState("");
    const [isSending, setIsSending] = useState(false);


    const handleSendMessage = async (e) => {
        e.preventDefault();

        if (isSending) return;

        setIsSending(true);

        try {
            await onSendMessage(message);
            setMessage("");
        } catch (error) {
            // console.error('Error sending message:', error);
        } finally {
            setIsSending(false);
        }
    };

    const handleChange = (e) => {
        setMessage(e.target.value);
    };

    return (
        <>
            <form className="flex items-center gap-x-1 border-t border-stroke pb-3 pt-4">
                <input
                    type="text"
                    value={message}
                    onChange={handleChange}
                    placeholder="Type a message..."
                    className="flex-grow bg-container rounded-md border p-2 focus:outline-none dark:border-stroke"
                    disabled={isSending}
                    autoFocus
                />
                <button
                    type="submit"
                    onClick={handleSendMessage}
                    className={
                        `ml-2 rounded-md btn !p-[.65rem] ${!message.trim() && "!bg-container !border-stroke !text-subtext cursor-not-allowed "}`

                    }
                    disabled={isSending || !message.trim()}
                    data-umami-event="Chat Widget: Send Chat"
                >
                    <SendIcon size={18} />
                </button>
            </form>
            <ChatUserInfo session={session} />
        </>
    );
};

export default ChatInput;
