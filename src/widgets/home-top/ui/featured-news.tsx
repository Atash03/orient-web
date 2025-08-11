import { BannerNewsItem, NewsModel } from '@/entities/news';
import React, { HTMLAttributes, Suspense } from 'react';
import FeaturedNewsMobile from './featured-news-mobile';
import { cn } from '@/shared/lib/utils';
import { Advertisement } from '@/entities/advertisement';
import { AdvertisemenSkleton } from '@/shared/ui';

interface Props extends HTMLAttributes<HTMLDivElement> {
  news: NewsModel[];
}

const FeaturedNews: React.FC<Props> = ({ news, className }) => {
  return (
    <section className={cn('mt-[32px]', className)}>
      <FeaturedNewsMobile news={news} />
      <div className="hidden h-[286px] grid-cols-3 gap-[24px] md:grid lg:flex lg:h-fit lg:flex-col xl:flex-row">
        <BannerNewsItem item={news[0]} className="col-span-2 xl:flex-1" />
        <div className="flex flex-col gap-[20px] lg:grid lg:grid-cols-3 *:lg:h-[122px] xl:grid-cols-1 *:xl:min-w-[216px]">
          <BannerNewsItem item={news[1]} />
          <BannerNewsItem item={news[2]} />
          <BannerNewsItem item={news[3]} className="hidden lg:block" />
        </div>
      </div>
      <Suspense fallback={<AdvertisemenSkleton />}>
        <Advertisement addsIndex={2} height={160} className="hidden xl:inline-block" />
      </Suspense>
    </section>
  );
};

export default FeaturedNews;
