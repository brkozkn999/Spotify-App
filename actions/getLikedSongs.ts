import { Song } from '@/types'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

const getLikedSongs = async (): Promise<Song[]> => {
    const supabase = createServerComponentClient({ cookies: cookies });

    const { 
        data: {
            user
        } 
    } = await supabase.auth.getUser();

    const { data, error } = await supabase
    .from('liked_songs')
    .select('*, songs(*)')
    .eq('user_id', user?.id)
    .order('liked_at', { ascending: false });

    if (error) {
        console.log("Database error:", error);
        return [];
    }

    if (!data) {
        console.log("No data found");
        return [];
    }

    console.log("Fetched liked songs:", data);

    return data.map((item) => ({
        ...item.songs
    }))
};

export default getLikedSongs;
