import { supabase } from '@/lib/supabase';

export default async function handler(req, res) {
    if (req.method === 'GET') {
        const { data: messages, error } = await supabase
            .from('guestbook')
            .select('*')
            .order('created_at', { ascending: true });

        if (error) {
            return res.status(500).json({ error: 'Failed to fetch messages' });
        }

        return res.status(200).json(messages);
    } else {
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
