export interface UserDetails {
    id: string;
    first_name: string;
    last_name: string;
    full_name: string;
    avatar_url: string;
    permission: string; // yeni eklendi
}

export interface Song {
    id: string;
    user_id: string;
    title: string;
    author: string;
    song_path: string;
    image_path: string;
}