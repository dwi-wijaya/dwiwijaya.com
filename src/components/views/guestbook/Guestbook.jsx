import { supabase } from '@/lib/supabase';
import { useEffect, useState } from 'react';
import { GuestbookForm } from './GuestbookForm';
import { GuestbookMessages } from './GuestbookMessages';
import { sessionouter, useRouter } from 'next/router';
import ChatAuth from './ChatAuth';
import ChatInput from './ChatInput';

export default function Guestbook({ messages }) {
    const [session, setSession] = useState(null);

    useEffect(() => {
        const session = supabase.auth.getSession();
        setSession(session?.session ?? null);
        console.log(session);
        const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
            setSession(session?.user ?? null);
        });

        return () => {
        };
    }, []);

    const handleSendMessage = (message) => {

    };

    const handleDeleteMessage = (id) => {

    };

    console.log(session)
    return (
        <>
            <GuestbookMessages
                messages={messages}
                onDeleteMessage={handleDeleteMessage}
                session={session}

            />
            {session ? (
                <ChatInput onSendMessage={handleSendMessage} session={session}/>
            ) : (
                <ChatAuth />
            )}
        </>
    );
}
