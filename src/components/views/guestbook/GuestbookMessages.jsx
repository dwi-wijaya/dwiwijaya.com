import { supabase } from "@/lib/supabase";
import ChatItem from "./ChatItem";
import { useEffect, useState } from "react";

export const GuestbookMessages = ({messages,onDeleteMessage,session}) => {

    return (
        <div className="rounded-lg px-1">
            <div className="space-y-5 overflow-y-auto py-4">
                {messages.map((msg, index) => (
                    <ChatItem key={index} onDelete={onDeleteMessage} {...msg} session={session} />
                ))}
            </div>
        </div>
    );
}
