import React, { HTMLAttributes } from 'react';
import { PostModel } from '../model';
import { cn, constructDate } from '@/shared/lib/utils';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { ModelCategory } from '@/shared/types';
import { Link } from '@/shared/lib/i18n/navigation';

interface Props extends HTMLAttributes<HTMLAnchorElement> {
  item: PostModel;
  categories?: ModelCategory[];
  summary?: string;
}

export const PostsCard: React.FC<Props> = ({ item, categories, summary, className, ...props }) => {
  const t = useTranslations('newsCard');
  const { fullDate, time } = constructDate(item.published_at);

  return (
    <Link
      href={`/post/${item.id}/${item.slug}`}
      className={cn(
        'flex min-h-[370px] w-full flex-col gap-[8px] md:grid md:min-h-[275px] md:grid-cols-3 lg:grid-cols-2',
        className,
      )}
      {...props}>
      <div className="relative max-h-[270px] w-full flex-1 overflow-hidden rounded-[4px]">
        <Image src={item.main_image} alt={item.slug} fill className="object-cover" />
      </div>
      <div className="flex flex-col gap-4 md:col-span-2 md:justify-between lg:col-span-3">
        <div className="text-text-3 text-secondary-800 hidden items-center gap-[10px] font-[400] md:flex">
          {categories && categories.map((cat) => <span key={cat.id}>{cat.name}</span>)}
        </div>

        <div className="flex flex-col gap-[8px]">
          <h1 className="text-on-surface text-text-1">{item.title}</h1>
          {summary && <p className="text-text-4 text-[#4A5A4F]">{summary}</p>}
        </div>

        <div className="text-text-3 flex items-center gap-4">
          <div className="text-secondary-800 flex items-center gap-[8px] md:hidden">
            <span>{t('type')}</span>
            <span>&#xB7;</span>
            {item.categories.length && (
              <span className="capitalize">{item.categories[0].name}</span>
            )}
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
