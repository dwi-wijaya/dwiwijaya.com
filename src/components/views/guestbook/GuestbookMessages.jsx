import { supabase } from "@/lib/supabase";
import ChatItem from "./ChatItem";
import { useEffect, useState, useRef } from "react";

export const GuestbookMessages = ({ initialMessages, onDeleteMessage, session }) => {
    const [messages, setMessages] = useState(initialMessages || []);
    const scrollableContainerRef = useRef(null);  // Ref untuk container yang di-scroll

    // Scroll ke bagian bawah hanya jika pesan berasal dari user yang sedang login
    const scrollToBottom = () => {
        if (scrollableContainerRef.current) {
            scrollableContainerRef.current.scrollTop = scrollableContainerRef.current.scrollHeight;
        }
    };

    // Subscribe to changes in the "guestbook" table
    useEffect(() => {
        const subscription = supabase
            .channel('guestbook')
            .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'guestbook' }, (payload) => {
                setMessages((currentMessages) => [...currentMessages, payload.new]);

                // Scroll otomatis jika email user yang login sama dengan email pengirim pesan
                if (payload.new.email === session?.email) {
                    scrollToBottom();
                }
            })
            .on('postgres_changes', { event: 'DELETE', schema: 'public', table: 'guestbook' }, (payload) => {
                setMessages((currentMessages) =>
                    currentMessages.filter((msg) => msg.id !== payload.old.id)
                );
            })
            .subscribe();

        return () => {
            supabase.removeChannel(subscription);
        };
    }, [session]);

    return (
        <div className="rounded-lg px-1">
            <div 
                ref={scrollableContainerRef}
                className="space-y-5 overflow-y-auto pb-4 max-h-[50svh] scrollbar- sm:max-h-[55svh] overflow-auto"
            >
                {messages.map((msg, index) => (
                    <ChatItem key={index} onDelete={onDeleteMessage} {...msg} session={session} />
                ))}
            </div>
        </div>
    );
};
