import { UserDetails } from '@/types'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

const getPermissionByUserId = async (): Promise<string> => {
    const supabase = createServerComponentClient({ cookies: cookies});

    const { data: userData, error: sessionError } = await supabase.auth.getUser();

    if (sessionError) {
        console.error(sessionError.message);
        return '';
    }
    
    const { data, error } = await supabase
        .from('users')
        .select('permission')
        .eq('id', userData.user.id)
        .single();

    if (error) {
        console.error(error.message);
        return '';
    }

    return data ? data.permission : '';
};

export default getPermissionByUserId;