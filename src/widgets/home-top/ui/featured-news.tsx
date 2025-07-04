import { BannerNewsItem, NewsModel } from '@/entities/news';
import React, { HTMLAttributes } from 'react';
import FeaturedNewsMobile from './featured-news-mobile';
import { cn } from '@/shared/lib/utils';

interface Props extends HTMLAttributes<HTMLDivElement> {
  news: NewsModel[];
}

const FeaturedNews: React.FC<Props> = ({ news, className }) => {
  return (
    <section className={cn('mt-[32px]', className)}>
      <FeaturedNewsMobile news={news} />
      <div className="hidden h-[286px] grid-cols-3 gap-[24px] md:grid lg:flex lg:h-fit lg:flex-col">
        <BannerNewsItem item={news[0]} className="col-span-2 lg:h-[382px]" />
        <div className="flex flex-col gap-[20px] lg:grid lg:h-[122px] lg:grid-cols-3">
          <BannerNewsItem item={news[1]} />
          <BannerNewsItem item={news[2]} />
          <BannerNewsItem item={news[3]} className="hidden lg:block" />
        </div>
      </div>
    </section>
  );
};

export default FeaturedNews;
