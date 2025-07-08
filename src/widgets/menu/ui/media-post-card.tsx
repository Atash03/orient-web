import { PhotoModel } from '@/entities/photo';
import { VideoModel } from '@/entities/video';
import { MediaDialog } from '@/features/media-dialog';
import { cn, constructDate } from '@/shared/lib/utils';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React from 'react';

interface Props {
  item: VideoModel | PhotoModel;
  className?: string;
}

export function MediaPostCard({ item, className }: Props) {
  const t = useTranslations('newsCard');
  const { fullDate, time } = constructDate(item.published_at);

  return (
    <MediaDialog media={item}>
      <div
        className={cn(
          'flex min-h-[370px] w-full flex-col gap-[8px] md:grid md:min-h-[275px] md:grid-cols-3 lg:grid-cols-2',
          className,
        )}>
        <div className="relative w-full flex-1 overflow-hidden rounded-[4px]">
          <Image src={item.poster_file} alt={item.name} fill className="object-cover" />
        </div>
        <div className="flex flex-col gap-4 md:col-span-2 lg:col-span-3">
          <div className="flex flex-1 flex-col justify-center gap-[8px]">
            <h1 className="text-on-surface text-text-1">{item.name}</h1>
          </div>

          <div className="text-text-3 flex items-center gap-4">
            <div className="text-secondary-800 flex items-center gap-[8px] md:hidden">
              <span>{t('type')}</span>
              <span>&#xB7;</span>
              <span className="capitalize">{item.type}</span>
            </div>
            <div className="flex items-center gap-[4px] text-[#4A5A4F]">
              <span>{fullDate}</span>
              <span className="text-[#C0CFC7]">|</span>
              <span>{time}</span>
            </div>
          </div>
        </div>
      </div>
    </MediaDialog>
  );
}
