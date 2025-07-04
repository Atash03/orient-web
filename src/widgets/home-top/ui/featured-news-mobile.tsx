'use client';
import { BannerNewsItem, NewsModel } from '@/entities/news';
import { cn } from '@/shared/lib/utils';
import React from 'react';

interface Props {
  news: NewsModel[];
}
// this component is made, because of optimization (server rendering) in larger viewports
const FeaturedNewsMobile: React.FC<Props> = ({ news }) => {
  const [active, setActive] = React.useState<number>(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setActive((prevActive) => (prevActive + 1) % news.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [news.length]);

  return (
    <div className="flex flex-col gap-[8px] md:hidden">
      <BannerNewsItem item={news[active]} className="h-[270px] md:hidden" />
      <div className="flex items-center justify-center">
        {news.map((item, i) => (
          <button onClick={() => setActive(i)} key={item.id} className="p-[8px]">
            <div
              className={cn(
                'size-[8px] rounded-full transition-all duration-300',
                active === i ? 'bg-primary' : 'bg-[#4A5A4F]',
              )}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default FeaturedNewsMobile;
