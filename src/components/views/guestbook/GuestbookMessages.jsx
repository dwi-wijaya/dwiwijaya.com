import { supabase } from "@/lib/supabase";
import ChatItem from "./ChatItem";
import { useEffect, useState } from "react";

export const GuestbookMessages = ({ initialMessages, onDeleteMessage, session }) => {
    const [messages, setMessages] = useState(initialMessages || []);

    // Subscribe to changes in the "guestbook" table
    supabase
        .channel('guestbook')
        .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'guestbook' }, (payload) => {
            setMessages((currentMessages) => [...currentMessages, payload.new, ]);
        })
        .on('postgres_changes', { event: 'DELETE', schema: 'public', table: 'guestbook' }, (payload) => {
            setMessages((currentMessages) =>
                currentMessages.filter((msg) => msg.id !== payload.old.id)
            );
        })
        .subscribe();

    return (
        <div className="rounded-lg px-1">
<div className="space-y-5 overflow-y-auto pb-4 max-h-[50svh] scrollbar- sm:max-h-[55svh] overflow-auto">
                {messages.map((msg, index) => (
                    <ChatItem key={index} onDelete={onDeleteMessage} {...msg} session={session} />
                ))}
            </div>
        </div>
    );
}
