import { supabase } from '@/lib/supabase';
import { useEffect, useState } from 'react';
import { GuestbookForm } from './GuestbookForm';
import { GuestbookMessages } from './GuestbookMessages';

export default function Guestbook() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const session = supabase.auth.getSession();
        setUser(session?.user ?? null);
        console.log(user);
        const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
            setUser(session?.user ?? null);
        });

        return () => {
        };
    }, []);

    const signInWithGoogle = async () => {
        await supabase.auth.signInWithOAuth({ provider: 'google' });
    };

    const signInWithGitHub = async () => {
        await supabase.auth.signInWithOAuth({ provider: 'github' });
    };

    const signOut = async () => {
        await supabase.auth.signOut();
    };

    return (
        <div>
            {!user ? (
                <div>
                    <button onClick={signInWithGoogle}>Login with Google</button>
                    <button onClick={signInWithGitHub}>Login with GitHub</button>
                </div>
            ) : (
                <div>
                    <GuestbookMessages />
                    <button onClick={signOut}>Logout</button>
                    <GuestbookForm user={user} />
                </div>
            )}
        </div>
    );
}
