import { FlatNewsCard, NewsModel } from '@/entities/news';
import { Link } from '@/shared/lib/i18n/navigation';
import { cn } from '@/shared/lib/utils';
import { Button, Heading } from '@/shared/ui';
import { getTranslations } from 'next-intl/server';
import React, { HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement> {
  news: NewsModel[];
}

export const LentaNews: React.FC<Props> = async ({ news, className }) => {
  const t = await getTranslations('lentaNews');

  return (
    <section
      className={cn(
        'bg-surface-500 border-surface-600 gap-[32px] rounded-[4px] border p-4',
        className,
      )}>
      <Heading title={t('title')} text="Lenta" className="text-heading-5 md:py-0" />
      <article className="custom-scroll flex flex-col gap-4 xl:h-fit xl:overflow-y-scroll xl:pr-[7px]">
        {news.map((item) => (
          <div key={item.id} className="flex flex-col gap-4">
            <FlatNewsCard item={item} />
            {item.id !== news[news.length - 1].id && <hr className="bg-[#D0DDD7]" />}
          </div>
        ))}
      </article>
      <Link href={'/posts/news'}>
        <Button className="w-full cursor-pointer rounded-[4px] border border-[#A0B3A7] py-[12px]">
          {t('button')}
        </Button>
      </Link>
    </section>
  );
};
