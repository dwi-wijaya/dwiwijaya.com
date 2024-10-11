import { supabase } from "@/lib/supabase";
import { useState } from "react";

export const GuestbookForm = ({ user }) => {
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (message.trim()) {
            const { error } = await supabase
                .from('guestbook')
                .insert([
                    {
                        id: uuidv4(), // Menghasilkan UUID untuk id
                        name: user.user_metadata.full_name,
                        email: user.email,
                        avatar: user.user_metadata.avatar_url,
                        message,
                        is_show: 'true'
                    }
                ]);

            if (error) {
                console.error('Error inserting message:', error);
            } else {
                setMessage(''); // Reset form setelah submit
            }
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tinggalkan pesan, saran, atau pertanyaanmu"
                required
            />
            <button type="submit">Submit</button>
        </form>
    );
}
