import { MediaDialog } from '@/features/media-dialog';
import React from 'react';
import { VideoModel } from '../model';
import Image from 'next/image';

export function VideoCard({ video }: { video: VideoModel }) {
  return (
    <MediaDialog media={video}>
      <div className="bg-surface-600 border-surface-700 text-text-3 h-full min-h-[312px] w-full max-w-[320px] cursor-pointer overflow-hidden rounded-[4px] border md:max-w-full">
        <div className="relative h-[57%] w-full lg:flex-1">
          <Image src={video.poster_file} alt={video.name} fill className="object-cover" />
        </div>
        <p className="text-on-surface text-balance p-4">{video.name}</p>
      </div>
    </MediaDialog>
  );
}
