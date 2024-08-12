import { supabase } from "@/lib/supabase";
import { useEffect, useState } from "react";

export const GuestbookMessages = () => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const fetchMessages = async () => {
            const { data, error } = await supabase
                .from('guestbook')
                .select('*')
                .order('created_at', { ascending: false })
                ;

            if (error) {
                console.error('Error fetching messages:', error);
            } else {
                setMessages(data);
            }
        };

        fetchMessages();

        const subscription = supabase
            .channel('guesbook-channel')
            .on('postgres_changes', { event: '*', schema: 'public', table: 'guestbook' }, payload => {
                setMessages((currentMessages) => [payload.new, ...currentMessages]);
            })
            .subscribe();

        return () => {
            supabase.removeChannel(subscription);
        };
    }, [messages]);

    return (
        <div className="rounded-lg px-1">
            <div className="space-y-5 overflow-y-auto py-4">
            {messages.map((msg) => (
                <div key={msg.id}>
                    <p>{msg.message}</p>
                    <small>— {msg.name}</small>
                </div>
            ))}
            </div>
        </div>
    );
}
