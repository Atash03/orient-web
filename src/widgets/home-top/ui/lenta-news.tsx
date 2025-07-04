import { FlatNewsCard, NewsModel } from '@/entities/news';
import { cn } from '@/shared/lib/utils';
import { Button, Heading } from '@/shared/ui';
import { getTranslations } from 'next-intl/server';
import React, { HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement> {
  news: NewsModel[];
}

const LentaNews: React.FC<Props> = async ({ news, className }) => {
  const t = await getTranslations('lentaNews');

  return (
    <section
      className={cn(
        'md:bg-surface-500 md:border-surface-600 hidden md:flex md:flex-col md:gap-[32px] md:rounded-[4px] md:border md:p-4',
        className,
      )}>
      <Heading title={t('title')} text="Lenta" className="text-heading-5 py-[32px] md:py-0" />
      <article className="custom-scroll hidden flex-col gap-4 md:flex xl:h-fit xl:overflow-y-scroll xl:pr-[7px]">
        {news.map((item) => (
          <div key={item.id} className="flex flex-col gap-4">
            <FlatNewsCard item={item} />
            {item.id !== news[news.length - 1].id && <hr className="bg-[#D0DDD7]" />}
          </div>
        ))}
      </article>
      <Button className="hidden w-full rounded-[4px] border border-[#A0B3A7] py-[12px] md:block">
        {t('button')}
      </Button>
    </section>
  );
};

export default LentaNews;
