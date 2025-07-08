import { NewsCard } from '@/entities/news';
import { NewsModelMid } from '@/entities/news/model';
import { Link } from '@/shared/lib/i18n/navigation';
import { cn } from '@/shared/lib/utils';
import { Button, Heading } from '@/shared/ui';
import { getTranslations } from 'next-intl/server';
import React, { HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement> {
  title: string;
  data: NewsModelMid[];
  href?: string;
}

const NewsSectionLayout: React.FC<Props> = async ({ data, href, title, className }) => {
  const t = await getTranslations('buttons');

  return (
    data.length > 0 && (
      <article className={cn('space-y-[32px]', className)}>
        <div className="flex items-center justify-between">
          <Heading text="" title={title} className="text-heading-3" />
          {href && (
            <Link className="lg:hidden" href={href}>
              {t('showMore')}
            </Link>
          )}
        </div>
        <div className="space-y-[39px]">
          {data.map((item) => (
            <div key={item.id} className="space-y-[39px] lg:space-y-[24px]">
              <NewsCard item={item} />
              {item.id !== data[data.length - 1].id && <hr className="bg-[#D0DDD7]" />}
            </div>
          ))}
        </div>
        {href && (
          <Link href={href}>
            <Button className="hidden w-full cursor-pointer rounded-[4px] border border-[#A0B3A7] py-[12px] capitalize lg:block">
              {t('showMore')}
            </Button>
          </Link>
        )}
      </article>
    )
  );
};

export default NewsSectionLayout;
