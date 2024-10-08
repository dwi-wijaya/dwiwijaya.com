import { supabase } from '@/lib/supabase';
import { useEffect, useState } from 'react';
import { GuestbookForm } from './GuestbookForm';
import { GuestbookMessages } from './GuestbookMessages';
import { useRouter } from 'next/router';

export default function Guestbook() {
    const [user, setUser] = useState(null);
    const router = useRouter();

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

    const signInWithProvider = async (provider) => {
        const { error } = await supabase.auth.signInWithOAuth({
            provider, options: {
                redirectTo: `${window.location.origin}/guestbook`, // pastikan ini menuju ke halaman guestbook
            },
        });
    };

    const signOut = async () => {
        const { error } = await supabase.auth.signOut();
        if (error) {
            console.error('Error during sign out:', error);
        } else {
            router.push('/guestbook');
        }
    };

    return (
        <div>
            {!user ? (
                <div>
                    <button onClick={() => signInWithProvider('google')}>Login with Google</button>
                    <button onClick={() => signInWithProvider('github')}>Login with GitHub</button>
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
