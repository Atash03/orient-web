import Image from 'next/image';
import React from 'react';
import { PhotoModel } from '../model';

export function PhotoCard({ photo }: { photo: PhotoModel }) {
  return (
    <div className="text-text-3 h-full min-h-[312px] w-full max-w-[320px] cursor-pointer overflow-hidden rounded-[4px] md:max-w-full">
      <div className="bg-surface relative h-[57%] w-full lg:flex-1">
        <Image src={photo.poster_file} alt={photo.name} fill className="object-cover" />
      </div>
      <p className="text-on-surface text-balance py-4">{photo.name}</p>
    </div>
  );
}
