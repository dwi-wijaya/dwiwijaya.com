import { supabase } from '@/lib/supabase';
import { useEffect, useState } from 'react';
import { GuestbookForm } from './GuestbookForm';
import { GuestbookMessages } from './GuestbookMessages';
import ChatAuth from './ChatAuth';
import ChatInput from './ChatInput';
import { v4 as uuidv4 } from 'uuid';
import { sendEmailNotification } from '@/services/EmailService';

export default function Guestbook({ messages }) {
    const [session, setSession] = useState(null);

    useEffect(() => {
        const session = supabase.auth.getSession();
        setSession(session?.session ?? null);
        const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
            setSession(session?.user ?? null);
        });

        return () => {
        };
    }, []);

    // Handle send message
    const handleSendMessage = async (message) => {
        if (!message || !session) return;

        const { data, error } = await supabase
            .from('guestbook')
            .insert([
                {
                    id: uuidv4(),
                    message: message,
                    name: session.user_metadata.name || session.email,
                    email: session.email,
                    avatar: session.user_metadata.avatar_url,
                }
            ]);

        if (error) {
            console.error("Error sending message:", error.message);
        } else {
            // console.log("Message sent");

            // Kirim notifikasi email setelah pesan tersimpan
            session.email != 'dev.dwiwijaya@gmail.com' && await sendEmailNotification({
                name: session.user_metadata.name || session.email,
                message: message,
                email: session.email
            });
        }
    };

    // Handle delete message
    const handleDeleteMessage = async (id) => {
        if (!id) return;

        const { data, error } = await supabase
            .from('guestbook')
            .delete()
            .eq('id', id);

        if (error) {
            console.error("Error deleting message:", error.message);
        } else {
            // console.log("Message deleted:", data);
        }
    };

    return (
        <>
            <GuestbookMessages
                initialMessages={messages}
                onDeleteMessage={handleDeleteMessage}
                session={session}
            />
            {session ? (
                <ChatInput onSendMessage={handleSendMessage} session={session} />
            ) : (
                <ChatAuth />
            )}
        </>
    );
}
