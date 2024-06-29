'use client'
import useLoadImage from "@/hooks/useLoadImage";
import Image from "next/image";
import { Song } from "@/types";
import usePlayer from "@/hooks/usePlayer";

interface MediaItemProps {
    data: Song;
    onClick?: (id: string) => void;
}

const MedialItem: React.FC<MediaItemProps> = ({ data, onClick }) => {
    const player = usePlayer();
    const imageUrl = useLoadImage(data);
    const isActive = player.activeId === data.id;
    const handleClick = () => {
        if (onClick)
            return onClick(data.id);

        return player.setId(data.id);
    }

    return (
        <div onClick={handleClick} className="flex items-center gap-x-3 cursor-pointer hover:bg-neutral-800/50 w-full p-2 rounded-md">
            <div className="relative rounded-md min-h-[48px] min-w-[48px] overflow-hidden">
                <Image fill src={imageUrl || '/liked.png'} alt="Media Item" className="object-cover" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
            </div>
            <div className="flex flex-col overflow-hidden">
                <p className={`truncate ${isActive ? 'text-green-400' : 'text-white'}`}>
                    {data.title}
                </p>
                <p className="text-neutral-400 text-sm truncate">
                    {data.author}
                </p>
            </div>
        </div>
    )
};

export default MedialItem;