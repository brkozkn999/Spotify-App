'use client'
import qs from 'query-string';
import useDebounce from "@/hooks/useDebounce";
import Input from './Input';
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { BiSearch } from 'react-icons/bi';

const SearchInput = () => {
    const router = useRouter();
    const [value, setValue] = useState<string>('');
    const debouncedValue = useDebounce<string>(value, 500);

    useEffect(() => {
        const query = {
            title: debouncedValue
        };

        const url = qs.stringifyUrl({
            url: '/search',
            query: query
        });

        router.push(url);
    }, [debouncedValue, router])

    return (
        <Input 
            placeholder='What do you want to play?' 
            value={value}
            onChange={(e) => setValue(e.target.value)} 
            icon={<BiSearch size={25} />}
        />
    )
};

export default SearchInput;
