import React, { HTMLAttributes } from 'react';
import { NewsModel } from '../model';
import { cn, constructDate } from '@/shared/lib/utils';
import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import { Link } from '@/shared/lib/i18n/navigation';

interface Props extends HTMLAttributes<HTMLAnchorElement> {
  item: NewsModel;
}

const NewsCard: React.FC<Props> = async ({ item, className, ...props }) => {
  const t = await getTranslations('newsCard');
  const { fullDate, time } = constructDate(item.published_at);

  return (
    <Link
      href={`/post/${item.id}/${item.slug}`}
      className={cn(
        'flex w-full flex-col gap-[8px] md:grid md:grid-cols-3 lg:grid-cols-2',
        className,
      )}
      {...props}>
      <div className="relative h-[155px] w-full overflow-hidden rounded-[4px]">
        <Image src={item.main_image} alt={item.slug} fill className="object-cover" />
      </div>
      <div className="flex flex-col gap-4 md:col-span-2 md:justify-between lg:col-span-1">
        <h1 className="text-on-surface text-text-1 xl:line-clamp-4">{item.title}</h1>
        <div className="text-text-3 flex items-center gap-4">
          <div className="text-secondary flex items-center gap-[8px] md:hidden">
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
    </Link>
  );
};

export default NewsCard;
